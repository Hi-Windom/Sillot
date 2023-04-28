import type { AstroInstance } from 'astro';
import { Fragment } from 'astro/jsx-runtime';
import type { RenderableTreeNode } from '@markdoc/markdoc';
import Markdoc from '@markdoc/markdoc';
import { createComponent, renderComponent, render } from 'astro/runtime/server/index.js';

export type TreeNode =
	| {
			type: 'text';
			content: string;
	  }
	| {
			type: 'component';
			component: AstroInstance['default'];
			props: Record<string, any>;
			children: TreeNode[];
	  }
	| {
			type: 'element';
			tag: string;
			attributes: Record<string, any>;
			children: TreeNode[];
	  };

export const ComponentNode = createComponent({
	factory(result: any, { treeNode }: { treeNode: TreeNode }) {
		if (treeNode.type === 'text') return render`${treeNode.content}`;
		const slots = {
			default: () =>
				render`${treeNode.children.map((child) =>
					renderComponent(result, 'ComponentNode', ComponentNode, { treeNode: child })
				)}`,
		};
		if (treeNode.type === 'component') {
			return renderComponent(
				result,
				treeNode.component.name,
				treeNode.component,
				treeNode.props,
				slots
			);
		}
		return renderComponent(result, treeNode.tag, treeNode.tag, treeNode.attributes, slots);
	},
	propagation: 'none',
});

export function createTreeNode(node: RenderableTreeNode | RenderableTreeNode[]): TreeNode {
	if (typeof node === 'string' || typeof node === 'number') {
		return { type: 'text', content: String(node) };
	} else if (Array.isArray(node)) {
		return {
			type: 'component',
			component: Fragment,
			props: {},
			children: node.map((child) => createTreeNode(child)),
		};
	} else if (node === null || typeof node !== 'object' || !Markdoc.Tag.isTag(node)) {
		return { type: 'text', content: '' };
	}

	if (typeof node.name === 'function') {
		const component = node.name;
		const props = node.attributes;
		const children = node.children.map((child) => createTreeNode(child));

		return {
			type: 'component',
			component,
			props,
			children,
		};
	} else {
		return {
			type: 'element',
			tag: node.name,
			attributes: node.attributes,
			children: node.children.map((child) => createTreeNode(child)),
		};
	}
}
