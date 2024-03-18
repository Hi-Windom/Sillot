import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { markdownConfigDefaults, setVfileFrontmatter } from '@astrojs/markdown-remark';
import type { AstroIntegration, ContentEntryType, HookParameters, SSRError } from 'astro';
import astroJSXRenderer from 'astro/jsx/renderer.js';
import { parse as parseESM } from 'es-module-lexer';
import type { Options as RemarkRehypeOptions } from 'remark-rehype';
import type { PluggableList } from 'unified';
import { VFile } from 'vfile';
import type { Plugin as VitePlugin } from 'vite';
import { createMdxProcessor } from './plugins.js';
import type { OptimizeOptions } from './rehype-optimize-static.js';
import {
	ASTRO_IMAGE_ELEMENT,
	ASTRO_IMAGE_IMPORT,
	USES_ASTRO_IMAGE_FLAG,
} from './remark-images-to-component.js';
import { getFileInfo, ignoreStringPlugins, parseFrontmatter } from './utils.js';

export type MdxOptions = Omit<typeof markdownConfigDefaults, 'remarkPlugins' | 'rehypePlugins'> & {
	extendMarkdownConfig: boolean;
	recmaPlugins: PluggableList;
	// Markdown allows strings as remark and rehype plugins.
	// This is not supported by the MDX compiler, so override types here.
	remarkPlugins: PluggableList;
	rehypePlugins: PluggableList;
	remarkRehype: RemarkRehypeOptions;
	optimize: boolean | OptimizeOptions;
};

type SetupHookParams = HookParameters<'astro:config:setup'> & {
	// `addPageExtension` and `contentEntryType` are not a public APIs
	// Add type defs here
	addPageExtension: (extension: string) => void;
	addContentEntryType: (contentEntryType: ContentEntryType) => void;
};

export default function mdx(partialMdxOptions: Partial<MdxOptions> = {}): AstroIntegration {
	return {
		name: '@astrojs/mdx',
		hooks: {
			'astro:config:setup': async (params) => {
				const { updateConfig, config, addPageExtension, addContentEntryType, addRenderer } =
					params as SetupHookParams;

				addRenderer(astroJSXRenderer);
				addPageExtension('.mdx');
				addContentEntryType({
					extensions: ['.mdx'],
					async getEntryInfo({ fileUrl, contents }: { fileUrl: URL; contents: string }) {
						const parsed = parseFrontmatter(contents, fileURLToPath(fileUrl));
						return {
							data: parsed.data,
							body: parsed.content,
							slug: parsed.data.slug,
							rawData: parsed.matter,
						};
					},
					contentModuleTypes: await fs.readFile(
						new URL('../template/content-module-types.d.ts', import.meta.url),
						'utf-8'
					),
					// MDX can import scripts and styles,
					// so wrap all MDX files with script / style propagation checks
					handlePropagation: true,
				});

				const extendMarkdownConfig =
					partialMdxOptions.extendMarkdownConfig ?? defaultMdxOptions.extendMarkdownConfig;

				const mdxOptions = applyDefaultOptions({
					options: partialMdxOptions,
					defaults: markdownConfigToMdxOptions(
						extendMarkdownConfig ? config.markdown : markdownConfigDefaults
					),
				});

				let processor: ReturnType<typeof createMdxProcessor>;

				updateConfig({
					vite: {
						plugins: [
							{
								name: '@mdx-js/rollup',
								enforce: 'pre',
								configResolved(resolved) {
									processor = createMdxProcessor(mdxOptions, {
										sourcemap: !!resolved.build.sourcemap,
										importMetaEnv: { SITE: config.site, ...resolved.env },
									});

									// HACK: move ourselves before Astro's JSX plugin to transform things in the right order
									const jsxPluginIndex = resolved.plugins.findIndex((p) => p.name === 'astro:jsx');
									if (jsxPluginIndex !== -1) {
										const myPluginIndex = resolved.plugins.findIndex(
											(p) => p.name === '@mdx-js/rollup'
										);
										if (myPluginIndex !== -1) {
											const myPlugin = resolved.plugins[myPluginIndex];
											// @ts-ignore-error ignore readonly annotation
											resolved.plugins.splice(myPluginIndex, 1);
											// @ts-ignore-error ignore readonly annotation
											resolved.plugins.splice(jsxPluginIndex, 0, myPlugin);
										}
									}
								},
								// Override transform to alter code before MDX compilation
								// ex. inject layouts
								async transform(_, id) {
									if (!id.endsWith('.mdx')) return;

									// Read code from file manually to prevent Vite from parsing `import.meta.env` expressions
									const { fileId } = getFileInfo(id, config);
									const code = await fs.readFile(fileId, 'utf-8');

									const { data: frontmatter, content: pageContent } = parseFrontmatter(code, id);

									const vfile = new VFile({ value: pageContent, path: id });
									// Ensure `data.astro` is available to all remark plugins
									setVfileFrontmatter(vfile, frontmatter);

									try {
										const compiled = await processor.process(vfile);

										return {
											code: String(compiled.value),
											map: compiled.map,
										};
									} catch (e: any) {
										const err: SSRError = e;

										// For some reason MDX puts the error location in the error's name, not very useful for us.
										err.name = 'MDXError';
										err.loc = { file: fileId, line: e.line, column: e.column };

										// For another some reason, MDX doesn't include a stack trace. Weird
										Error.captureStackTrace(err);

										throw err;
									}
								},
							},
							{
								name: '@astrojs/mdx-postprocess',
								// These transforms must happen *after* JSX runtime transformations
								transform(code, id) {
									if (!id.endsWith('.mdx')) return;

									const [moduleImports, moduleExports] = parseESM(code);

									// Fragment import should already be injected, but check just to be safe.
									const importsFromJSXRuntime = moduleImports
										.filter(({ n }) => n === 'astro/jsx-runtime')
										.map(({ ss, se }) => code.substring(ss, se));
									const hasFragmentImport = importsFromJSXRuntime.some((statement) =>
										/[\s,{](?:Fragment,|Fragment\s*\})/.test(statement)
									);
									if (!hasFragmentImport) {
										code = 'import { Fragment } from "astro/jsx-runtime"\n' + code;
									}

									const { fileUrl, fileId } = getFileInfo(id, config);
									if (!moduleExports.find(({ n }) => n === 'url')) {
										code += `\nexport const url = ${JSON.stringify(fileUrl)};`;
									}
									if (!moduleExports.find(({ n }) => n === 'file')) {
										code += `\nexport const file = ${JSON.stringify(fileId)};`;
									}
									if (!moduleExports.find(({ n }) => n === 'Content')) {
										// If have `export const components`, pass that as props to `Content` as fallback
										const hasComponents = moduleExports.find(({ n }) => n === 'components');
										const usesAstroImage = moduleExports.find(
											({ n }) => n === USES_ASTRO_IMAGE_FLAG
										);

										let componentsCode = `{ Fragment${
											hasComponents ? ', ...components' : ''
										}, ...props.components,`;
										if (usesAstroImage) {
											componentsCode += ` ${JSON.stringify(ASTRO_IMAGE_ELEMENT)}: ${
												hasComponents ? 'components.img ?? ' : ''
											} props.components?.img ?? ${ASTRO_IMAGE_IMPORT}`;
										}
										componentsCode += ' }';

										// Make `Content` the default export so we can wrap `MDXContent` and pass in `Fragment`
										code = code.replace(
											'export default function MDXContent',
											'function MDXContent'
										);
										code += `\nexport const Content = (props = {}) => MDXContent({
											...props,
											components: ${componentsCode},
										});
										export default Content;`;
									}

									// mark the component as an MDX component
									code += `\nContent[Symbol.for('mdx-component')] = true`;

									// Ensures styles and scripts are injected into a `<head>`
									// When a layout is not applied
									code += `\nContent[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);`;
									code += `\nContent.moduleId = ${JSON.stringify(id)};`;

									return { code, map: null };
								},
							},
						] as VitePlugin[],
					},
				});
			},
		},
	};
}

const defaultMdxOptions = {
	extendMarkdownConfig: true,
	recmaPlugins: [],
};

function markdownConfigToMdxOptions(markdownConfig: typeof markdownConfigDefaults): MdxOptions {
	return {
		...defaultMdxOptions,
		...markdownConfig,
		remarkPlugins: ignoreStringPlugins(markdownConfig.remarkPlugins),
		rehypePlugins: ignoreStringPlugins(markdownConfig.rehypePlugins),
		remarkRehype: (markdownConfig.remarkRehype as any) ?? {},
		optimize: false,
	};
}

function applyDefaultOptions({
	options,
	defaults,
}: {
	options: Partial<MdxOptions>;
	defaults: MdxOptions;
}): MdxOptions {
	return {
		syntaxHighlight: options.syntaxHighlight ?? defaults.syntaxHighlight,
		extendMarkdownConfig: options.extendMarkdownConfig ?? defaults.extendMarkdownConfig,
		recmaPlugins: options.recmaPlugins ?? defaults.recmaPlugins,
		remarkRehype: options.remarkRehype ?? defaults.remarkRehype,
		gfm: options.gfm ?? defaults.gfm,
		smartypants: options.smartypants ?? defaults.smartypants,
		remarkPlugins: options.remarkPlugins ?? defaults.remarkPlugins,
		rehypePlugins: options.rehypePlugins ?? defaults.rehypePlugins,
		shikiConfig: options.shikiConfig ?? defaults.shikiConfig,
		optimize: options.optimize ?? defaults.optimize,
	};
}
