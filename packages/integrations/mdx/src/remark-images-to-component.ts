import type { MarkdownVFile } from '@astrojs/markdown-remark';
import type { Image, Parent } from 'mdast';
import type { MdxJsxAttribute, MdxJsxFlowElement, MdxjsEsm } from 'mdast-util-mdx';
import { visit } from 'unist-util-visit';
import { jsToTreeNode } from './utils.js';

export const ASTRO_IMAGE_ELEMENT = 'astro-image';
export const ASTRO_IMAGE_IMPORT = '__AstroImage__';
export const USES_ASTRO_IMAGE_FLAG = '__usesAstroImage';

export function remarkImageToComponent() {
	return function (tree: any, file: MarkdownVFile) {
		if (!file.data.imagePaths) return;

		const importsStatements: MdxjsEsm[] = [];
		const importedImages = new Map<string, string>();

		visit(tree, 'image', (node: Image, index: number | undefined, parent: Parent | null) => {
			// Use the imagePaths set from the remark-collect-images so we don't have to duplicate the logic for
			// checking if an image should be imported or not
			if (file.data.imagePaths?.has(node.url)) {
				let importName = importedImages.get(node.url);

				// If we haven't already imported this image, add an import statement
				if (!importName) {
					importName = `__${importedImages.size}_${node.url.replace(/\W/g, '_')}__`;

					importsStatements.push({
						type: 'mdxjsEsm',
						value: '',
						data: {
							estree: {
								type: 'Program',
								sourceType: 'module',
								body: [
									{
										type: 'ImportDeclaration',
										source: { type: 'Literal', value: node.url, raw: JSON.stringify(node.url) },
										specifiers: [
											{
												type: 'ImportDefaultSpecifier',
												local: { type: 'Identifier', name: importName },
											},
										],
									},
								],
							},
						},
					});
					importedImages.set(node.url, importName);
				}

				// Build a component that's equivalent to <Image src={importName} alt={node.alt} title={node.title} />
				const componentElement: MdxJsxFlowElement = {
					name: ASTRO_IMAGE_ELEMENT,
					type: 'mdxJsxFlowElement',
					attributes: [
						{
							name: 'src',
							type: 'mdxJsxAttribute',
							value: {
								type: 'mdxJsxAttributeValueExpression',
								value: importName,
								data: {
									estree: {
										type: 'Program',
										sourceType: 'module',
										comments: [],
										body: [
											{
												type: 'ExpressionStatement',
												expression: { type: 'Identifier', name: importName },
											},
										],
									},
								},
							},
						},
						{ name: 'alt', type: 'mdxJsxAttribute', value: node.alt || '' },
					],
					children: [],
				};

				if (node.title) {
					componentElement.attributes.push({
						type: 'mdxJsxAttribute',
						name: 'title',
						value: node.title,
					});
				}

				if (node.data && node.data.hProperties) {
					const createArrayAttribute = (name: string, values: string[]): MdxJsxAttribute => {
						return {
							type: 'mdxJsxAttribute',
							name: name,
							value: {
								type: 'mdxJsxAttributeValueExpression',
								value: name,
								data: {
									estree: {
										type: 'Program',
										body: [
											{
												type: 'ExpressionStatement',
												expression: {
													type: 'ArrayExpression',
													elements: values.map((value) => ({
														type: 'Literal',
														value: value,
														raw: String(value),
													})),
												},
											},
										],
										sourceType: 'module',
										comments: [],
									},
								},
							},
						};
					};
					// Go through every hProperty and add it as an attribute of the <Image>
					Object.entries(node.data.hProperties as Record<string, string | string[]>).forEach(
						([key, value]) => {
							if (Array.isArray(value)) {
								componentElement.attributes.push(createArrayAttribute(key, value));
							} else {
								componentElement.attributes.push({
									name: key,
									type: 'mdxJsxAttribute',
									value: String(value),
								});
							}
						}
					);
				}

				parent!.children.splice(index!, 1, componentElement);
			}
		});

		// Add all the import statements to the top of the file for the images
		tree.children.unshift(...importsStatements);

		tree.children.unshift(
			jsToTreeNode(`import { Image as ${ASTRO_IMAGE_IMPORT} } from "astro:assets";`)
		);
		// Export `__usesAstroImage` to pick up `astro:assets` usage in the module graph.
		// @see the '@astrojs/mdx-postprocess' plugin
		tree.children.push(jsToTreeNode(`export const ${USES_ASTRO_IMAGE_FLAG} = true`));
	};
}
