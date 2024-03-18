import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Config as MarkdocConfig, Node } from '@markdoc/markdoc';
import Markdoc from '@markdoc/markdoc';
import type { AstroConfig, ContentEntryType } from 'astro';
import { emitESMImage } from 'astro/assets/utils';
import matter from 'gray-matter';
import type { ErrorPayload as ViteErrorPayload, Rollup } from 'vite';
import type { ComponentConfig } from './config.js';
import { htmlTokenTransform } from './html/transform/html-token-transform.js';
import type { MarkdocConfigResult } from './load-config.js';
import type { MarkdocIntegrationOptions } from './options.js';
import { setupConfig } from './runtime.js';
import { getMarkdocTokenizer } from './tokenizer.js';
import { MarkdocError, isComponentConfig, isValidUrl, prependForwardSlash } from './utils.js';

export async function getContentEntryType({
	markdocConfigResult,
	astroConfig,
	options,
}: {
	astroConfig: AstroConfig;
	markdocConfigResult?: MarkdocConfigResult;
	options?: MarkdocIntegrationOptions;
}): Promise<ContentEntryType> {
	return {
		extensions: ['.mdoc'],
		getEntryInfo,
		handlePropagation: true,
		async getRenderModule({ contents, fileUrl, viteId }) {
			const entry = getEntryInfo({ contents, fileUrl });
			const tokenizer = getMarkdocTokenizer(options);
			let tokens = tokenizer.tokenize(entry.body);

			if (options?.allowHTML) {
				tokens = htmlTokenTransform(tokenizer, tokens);
			}

			const ast = Markdoc.parse(tokens);
			const usedTags = getUsedTags(ast);
			const userMarkdocConfig = markdocConfigResult?.config ?? {};
			const markdocConfigUrl = markdocConfigResult?.fileUrl;

			let componentConfigByTagMap: Record<string, ComponentConfig> = {};
			// Only include component imports for tags used in the document.
			// Avoids style and script bleed.
			for (const tag of usedTags) {
				const render = userMarkdocConfig.tags?.[tag]?.render;
				if (isComponentConfig(render)) {
					componentConfigByTagMap[tag] = render;
				}
			}
			let componentConfigByNodeMap: Record<string, ComponentConfig> = {};
			for (const [nodeType, schema] of Object.entries(userMarkdocConfig.nodes ?? {})) {
				const render = schema?.render;
				if (isComponentConfig(render)) {
					componentConfigByNodeMap[nodeType] = render;
				}
			}

			const pluginContext = this;
			const markdocConfig = await setupConfig(userMarkdocConfig, options);

			const filePath = fileURLToPath(fileUrl);

			const validationErrors = Markdoc.validate(
				ast,
				/* Raised generics issue with Markdoc core https://github.com/markdoc/markdoc/discussions/400 */
				markdocConfig as MarkdocConfig
			).filter((e) => {
				return (
					// Ignore `variable-undefined` errors.
					// Variables can be configured at runtime,
					// so we cannot validate them at build time.
					e.error.id !== 'variable-undefined' &&
					(e.error.level === 'error' || e.error.level === 'critical')
				);
			});
			if (validationErrors.length) {
				// Heuristic: take number of newlines for `rawData` and add 2 for the `---` fences
				const frontmatterBlockOffset = entry.rawData.split('\n').length + 2;
				const rootRelativePath = path.relative(fileURLToPath(astroConfig.root), filePath);
				throw new MarkdocError({
					message: [
						`**${String(rootRelativePath)}** contains invalid content:`,
						...validationErrors.map((e) => `- ${e.error.message}`),
					].join('\n'),
					location: {
						// Error overlay does not support multi-line or ranges.
						// Just point to the first line.
						line: frontmatterBlockOffset + validationErrors[0].lines[0],
						file: viteId,
					},
				});
			}

			await emitOptimizedImages(ast.children, {
				astroConfig,
				pluginContext,
				filePath,
			});

			const res = `import { Renderer } from '@astrojs/markdoc/components';
import { createGetHeadings, createContentComponent } from '@astrojs/markdoc/runtime';
${
	markdocConfigUrl
		? `import markdocConfig from ${JSON.stringify(fileURLToPath(markdocConfigUrl))};`
		: 'const markdocConfig = {};'
}

import { assetsConfig } from '@astrojs/markdoc/runtime-assets-config';
markdocConfig.nodes = { ...assetsConfig.nodes, ...markdocConfig.nodes };

${getStringifiedImports(componentConfigByTagMap, 'Tag', astroConfig.root)}
${getStringifiedImports(componentConfigByNodeMap, 'Node', astroConfig.root)}

const tagComponentMap = ${getStringifiedMap(componentConfigByTagMap, 'Tag')};
const nodeComponentMap = ${getStringifiedMap(componentConfigByNodeMap, 'Node')};

const options = ${JSON.stringify(options)};

const stringifiedAst = ${JSON.stringify(
				/* Double stringify to encode *as* stringified JSON */ JSON.stringify(ast)
			)};

export const getHeadings = createGetHeadings(stringifiedAst, markdocConfig, options);
export const Content = createContentComponent(
	Renderer,
	stringifiedAst,
	markdocConfig,
  options,
	tagComponentMap,
	nodeComponentMap,
)`;
			return { code: res };
		},
		contentModuleTypes: await fs.promises.readFile(
			new URL('../template/content-module-types.d.ts', import.meta.url),
			'utf-8'
		),
	};
}

function getUsedTags(markdocAst: Node) {
	const tags = new Set<string>();
	const validationErrors = Markdoc.validate(markdocAst);
	// Hack: run the validator with an empty config and look for 'tag-undefined'.
	// This is our signal that a tag is being used!
	for (const { error } of validationErrors) {
		if (error.id === 'tag-undefined') {
			const [, tagName] = error.message.match(/Undefined tag: '(.*)'/) ?? [];
			tags.add(tagName);
		}
	}
	return tags;
}

function getEntryInfo({ fileUrl, contents }: { fileUrl: URL; contents: string }) {
	const parsed = parseFrontmatter(contents, fileURLToPath(fileUrl));
	return {
		data: parsed.data,
		body: parsed.content,
		slug: parsed.data.slug,
		rawData: parsed.matter,
	};
}

/**
 * Emits optimized images, and appends the generated `src` to each AST node
 * via the `__optimizedSrc` attribute.
 */
async function emitOptimizedImages(
	nodeChildren: Node[],
	ctx: {
		pluginContext: Rollup.PluginContext;
		filePath: string;
		astroConfig: AstroConfig;
	}
) {
	for (const node of nodeChildren) {
		let isComponent = node.type === 'tag' && node.tag === 'image';
		// Support either a ![]() or {% image %} syntax, and handle the `src` attribute accordingly.
		if ((node.type === 'image' || isComponent) && typeof node.attributes.src === 'string') {
			let attributeName = isComponent ? 'src' : '__optimizedSrc';

			// If the image isn't an URL or a link to public, try to resolve it.
			if (shouldOptimizeImage(node.attributes.src)) {
				// Attempt to resolve source with Vite.
				// This handles relative paths and configured aliases
				const resolved = await ctx.pluginContext.resolve(node.attributes.src, ctx.filePath);

				if (resolved?.id && fs.existsSync(new URL(prependForwardSlash(resolved.id), 'file://'))) {
					const src = await emitESMImage(
						resolved.id,
						ctx.pluginContext.meta.watchMode,
						ctx.pluginContext.emitFile
					);

					const fsPath = resolved.id;

					if (src) {
						// We cannot track images in Markdoc, Markdoc rendering always strips out the proxy. As such, we'll always
						// assume that the image is referenced elsewhere, to be on safer side.
						if (ctx.astroConfig.output === 'static') {
							if (globalThis.astroAsset.referencedImages)
								globalThis.astroAsset.referencedImages.add(fsPath);
						}

						node.attributes[attributeName] = { ...src, fsPath };
					}
				} else {
					throw new MarkdocError({
						message: `Could not resolve image ${JSON.stringify(
							node.attributes.src
						)} from ${JSON.stringify(ctx.filePath)}. Does the file exist?`,
					});
				}
			} else if (isComponent) {
				// If the user is using the {% image %} tag, always pass the `src` attribute as `__optimizedSrc`, even if it's an external URL or absolute path.
				// That way, the component can decide whether to optimize it or not.
				node.attributes[attributeName] = node.attributes.src;
			}
		}
		await emitOptimizedImages(node.children, ctx);
	}
}

function shouldOptimizeImage(src: string) {
	// Optimize anything that is NOT external or an absolute path to `public/`
	return !isValidUrl(src) && !src.startsWith('/');
}

/**
 * Get stringified import statements for configured tags or nodes.
 * `componentNamePrefix` is appended to the import name for namespacing.
 *
 * Example output: `import Tagaside from '/Users/.../src/components/Aside.astro';`
 */
function getStringifiedImports(
	componentConfigMap: Record<string, ComponentConfig>,
	componentNamePrefix: string,
	root: URL
) {
	let stringifiedComponentImports = '';
	for (const [key, config] of Object.entries(componentConfigMap)) {
		const importName = config.namedExport
			? `{ ${config.namedExport} as ${componentNamePrefix + toImportName(key)} }`
			: componentNamePrefix + toImportName(key);
		const resolvedPath =
			config.type === 'local' ? fileURLToPath(new URL(config.path, root)) : config.path;

		stringifiedComponentImports += `import ${importName} from ${JSON.stringify(resolvedPath)};\n`;
	}
	return stringifiedComponentImports;
}

function toImportName(unsafeName: string) {
	// TODO: more checks that name is a safe JS variable name
	return unsafeName.replace('-', '_');
}

/**
 * Get a stringified map from tag / node name to component import name.
 * This uses the same `componentNamePrefix` used by `getStringifiedImports()`.
 *
 * Example output: `{ aside: Tagaside, heading: Tagheading }`
 */
function getStringifiedMap(
	componentConfigMap: Record<string, ComponentConfig>,
	componentNamePrefix: string
) {
	let stringifiedComponentMap = '{';
	for (const key in componentConfigMap) {
		stringifiedComponentMap += `${JSON.stringify(key)}: ${
			componentNamePrefix + toImportName(key)
		},\n`;
	}
	stringifiedComponentMap += '}';
	return stringifiedComponentMap;
}

/**
 * Match YAML exception handling from Astro core errors
 * @see 'astro/src/core/errors.ts'
 */
function parseFrontmatter(fileContents: string, filePath: string) {
	try {
		// `matter` is empty string on cache results
		// clear cache to prevent this
		(matter as any).clearCache();
		return matter(fileContents);
	} catch (e: any) {
		if (e.name === 'YAMLException') {
			const err: Error & ViteErrorPayload['err'] = e;
			err.id = filePath;
			err.loc = { file: e.id, line: e.mark.line + 1, column: e.mark.column };
			err.message = e.reason;
			throw err;
		} else {
			throw e;
		}
	}
}
