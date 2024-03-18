import * as assert from 'node:assert/strict';
import os from 'node:os';
import { describe, it } from 'node:test';
import { fileURLToPath } from 'node:url';
import * as cheerio from 'cheerio';

import { attachContentServerListeners } from '../../../dist/content/server-listeners.js';
import { createFsWithFallback, createRequestAndResponse, runInContainer } from '../test-utils.js';

const root = new URL('../../fixtures/content/', import.meta.url);

const _describe = os.platform() === 'win32' ? describe.skip : describe;

/** @type {typeof runInContainer} */
async function runInContainerWithContentListeners(params, callback) {
	return await runInContainer(params, async (container) => {
		await attachContentServerListeners(container);
		await callback(container);
	});
}

_describe('Content Collections - render()', () => {
	it('can be called in a page component', async () => {
		const fs = createFsWithFallback(
			{
				'/src/content/config.ts': `
					import { z, defineCollection } from 'astro:content';

					const blog = defineCollection({
						schema: z.object({
							title: z.string(),
							description: z.string().max(60, 'For SEO purposes, keep descriptions short!'),
						}),
					});

					export const collections = { blog };
				`,
				'/src/pages/index.astro': `
					---
					import { getCollection } from 'astro:content';
					const blog = await getCollection('blog');
					const launchWeekEntry = blog.find(post => post.id === 'promo/launch-week.mdx');
					const { Content } = await launchWeekEntry.render();
					---
					<html>
						<head><title>Testing</title></head>
						<body>
							<h1>testing</h1>
							<Content />
						</body>
					</html>
				`,
			},
			root
		);

		await runInContainerWithContentListeners(
			{
				fs,
				inlineConfig: {
					root: fileURLToPath(root),
					vite: { server: { middlewareMode: true } },
				},
			},
			async (container) => {
				const { req, res, done, text } = createRequestAndResponse({
					method: 'GET',
					url: '/',
				});
				container.handle(req, res);
				await done;
				const html = await text();

				const $ = cheerio.load(html);
				// Rendered the content
				assert.equal($('ul li').length, 3);

				// Rendered the styles
				assert.equal($('style').length, 1);
			}
		);
	});

	it('can be used in a layout component', async () => {
		const fs = createFsWithFallback(
			{
				// Loading the content config with `astro:content` oddly
				// causes this test to fail. Spoof a different src/content entry
				// to ensure `existsSync` checks pass.
				// TODO: revisit after addressing this issue
				// https://github.com/withastro/astro/issues/6121
				'/src/content/blog/promo/launch-week.mdx': `---
title: Launch Week
description: Astro is launching this week!
---
# Launch Week
- [x] Launch Astro
- [ ] Celebrate`,
				'/src/components/Layout.astro': `
					---
					import { getCollection } from 'astro:content';
					const blog = await getCollection('blog');
					const launchWeekEntry = blog.find(post => post.id === 'promo/launch-week.mdx');
					const { Content } = await launchWeekEntry.render();
					---
					<html>
						<head></head>
						<body>
							<slot name="title"></slot>
							<article>
								<Content />
							</article>
						</body>
					</html>

				`,
				'/src/pages/index.astro': `
					---
					import Layout from '../components/Layout.astro';
					---
					<Layout>
						<h1 slot="title">Index page</h2>
					</Layout>
				`,
			},
			root
		);

		await runInContainerWithContentListeners(
			{
				fs,
				inlineConfig: {
					root: fileURLToPath(root),
					vite: { server: { middlewareMode: true } },
				},
			},
			async (container) => {
				const { req, res, done, text } = createRequestAndResponse({
					method: 'GET',
					url: '/',
				});
				container.handle(req, res);
				await done;
				const html = await text();

				const $ = cheerio.load(html);
				// Rendered the content
				assert.equal($('ul li').length, 3);

				// Rendered the styles
				assert.equal($('style').length, 1);
			}
		);
	});

	it('can be used in a slot', async () => {
		const fs = createFsWithFallback(
			{
				'/src/content/config.ts': `
					import { z, defineCollection } from 'astro:content';

					const blog = defineCollection({
						schema: z.object({
							title: z.string(),
							description: z.string().max(60, 'For SEO purposes, keep descriptions short!'),
						}),
					});

					export const collections = { blog };
				`,
				'/src/components/Layout.astro': `
					<html>
						<head></head>
						<body>
							<slot name="title"></slot>
							<article>
								<slot name="main"></slot>
							</article>
						</body>
					</html>
				`,
				'/src/pages/index.astro': `
					---
					import Layout from '../components/Layout.astro';
					import { getCollection } from 'astro:content';
					const blog = await getCollection('blog');
					const launchWeekEntry = blog.find(post => post.id === 'promo/launch-week.mdx');
					const { Content } = await launchWeekEntry.render();
					---
					<Layout>
						<h1 slot="title">Index page</h2>
						<Content slot="main" />
					</Layout>
				`,
			},
			root
		);

		await runInContainerWithContentListeners(
			{
				fs,
				inlineConfig: {
					root: fileURLToPath(root),
					vite: { server: { middlewareMode: true } },
				},
			},
			async (container) => {
				const { req, res, done, text } = createRequestAndResponse({
					method: 'GET',
					url: '/',
				});
				container.handle(req, res);
				await done;
				const html = await text();

				const $ = cheerio.load(html);
				// Rendered the content
				assert.equal($('ul li').length, 3);

				// Rendered the styles
				assert.equal($('style').length, 1);
			}
		);
	});

	it('can be called from any js/ts file', async () => {
		const fs = createFsWithFallback(
			{
				'/src/content/config.ts': `
					import { z, defineCollection } from 'astro:content';

					const blog = defineCollection({
						schema: z.object({
							title: z.string(),
							description: z.string().max(60, 'For SEO purposes, keep descriptions short!'),
						}),
					});

					export const collections = { blog };
				`,
				'/src/launch-week.ts': `
					import { getCollection } from 'astro:content';

					export let Content;

					const blog = await getCollection('blog');
					const launchWeekEntry = blog.find(post => post.id === 'promo/launch-week.mdx');
					const mod = await launchWeekEntry.render();

					Content = mod.Content;
				`,
				'/src/pages/index.astro': `
					---
					import { Content } from '../launch-week.ts';
					---
					<html>
						<head><title>Testing</title></head>
						<body>
							<h1>Testing</h1>
							<Content />
						</body>
					</html>
				`,
			},
			root
		);

		await runInContainerWithContentListeners(
			{
				fs,
				inlineConfig: {
					root: fileURLToPath(root),
					vite: { server: { middlewareMode: true } },
				},
			},
			async (container) => {
				const { req, res, done, text } = createRequestAndResponse({
					method: 'GET',
					url: '/',
				});
				container.handle(req, res);
				await done;
				const html = await text();

				const $ = cheerio.load(html);
				// Rendered the content
				assert.equal($('ul li').length, 3);

				// Rendered the styles
				assert.equal($('style').length, 1);
			}
		);
	});
});
