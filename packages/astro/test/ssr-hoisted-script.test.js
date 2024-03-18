import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { load as cheerioLoad } from 'cheerio';
import testAdapter from './test-adapter.js';
import { loadFixture } from './test-utils.js';

async function fetchHTML(fixture, path) {
	const app = await fixture.loadTestAdapterApp();
	const request = new Request('http://example.com' + path);
	const response = await app.render(request);
	const html = await response.text();
	return html;
}

/** @type {import('./test-utils').AstroInlineConfig} */
const defaultFixtureOptions = {
	root: './fixtures/ssr-hoisted-script/',
	output: 'server',
	adapter: testAdapter(),
};

describe('Hoisted inline scripts in SSR', () => {
	/** @type {import('./test-utils').Fixture} */
	let fixture;

	describe('without base path', () => {
		before(async () => {
			fixture = await loadFixture(defaultFixtureOptions);
			await fixture.build();
		});

		it('scripts get included', async () => {
			const html = await fetchHTML(fixture, '/');
			const $ = cheerioLoad(html);
			assert.equal($('script').length, 1);
		});
	});

	describe('with base path', () => {
		const base = '/hello';

		before(async () => {
			fixture = await loadFixture({
				...defaultFixtureOptions,
				base,
			});
			await fixture.build();
		});

		it('Inlined scripts get included without base path in the script', async () => {
			const html = await fetchHTML(fixture, '/hello/');
			const $ = cheerioLoad(html);
			assert.equal($('script').html(), 'console.log("hello world");\n');
		});
	});
});

describe('Hoisted external scripts in SSR', () => {
	/** @type {import('./test-utils').Fixture} */
	let fixture;

	describe('without base path', () => {
		before(async () => {
			fixture = await loadFixture({
				...defaultFixtureOptions,
				vite: {
					build: {
						assetsInlineLimit: 0,
					},
				},
			});
			await fixture.build();
		});

		it('script has correct path', async () => {
			const html = await fetchHTML(fixture, '/');
			const $ = cheerioLoad(html);
			assert.match($('script').attr('src'), /^\/_astro\/hoisted\..{8}\.js$/);
		});
	});

	describe('with base path', () => {
		before(async () => {
			fixture = await loadFixture({
				...defaultFixtureOptions,
				vite: {
					build: {
						assetsInlineLimit: 0,
					},
				},
				base: '/hello',
			});
			await fixture.build();
		});

		it('script has correct path', async () => {
			const html = await fetchHTML(fixture, '/hello/');
			const $ = cheerioLoad(html);
			assert.match($('script').attr('src'), /^\/hello\/_astro\/hoisted\..{8}\.js$/);
		});
	});

	describe('with assetsPrefix', () => {
		before(async () => {
			fixture = await loadFixture({
				...defaultFixtureOptions,
				vite: {
					build: {
						assetsInlineLimit: 0,
					},
				},
				build: {
					assetsPrefix: 'https://cdn.example.com',
				},
			});
			await fixture.build();
		});

		it('script has correct path', async () => {
			const html = await fetchHTML(fixture, '/');
			const $ = cheerioLoad(html);
			assert.match(
				$('script').attr('src'),
				/^https:\/\/cdn\.example\.com\/_astro\/hoisted\..{8}\.js$/
			);
		});
	});

	describe('with custom rollup output file names', () => {
		before(async () => {
			fixture = await loadFixture({
				...defaultFixtureOptions,
				vite: {
					build: {
						assetsInlineLimit: 0,
						rollupOptions: {
							output: {
								entryFileNames: 'assets/entry.[hash].mjs',
								chunkFileNames: 'assets/chunks/chunk.[hash].mjs',
								assetFileNames: 'assets/asset.[hash][extname]',
							},
						},
					},
				},
			});
			await fixture.build();
		});

		it('script has correct path', async () => {
			const html = await fetchHTML(fixture, '/');
			const $ = cheerioLoad(html);
			assert.match($('script').attr('src'), /^\/assets\/entry\..{8}\.mjs$/);
		});
	});

	describe('with custom rollup output file names and base', () => {
		before(async () => {
			fixture = await loadFixture({
				...defaultFixtureOptions,
				vite: {
					build: {
						assetsInlineLimit: 0,
						rollupOptions: {
							output: {
								entryFileNames: 'assets/entry.[hash].mjs',
								chunkFileNames: 'assets/chunks/chunk.[hash].mjs',
								assetFileNames: 'assets/asset.[hash][extname]',
							},
						},
					},
				},
				base: '/hello',
			});
			await fixture.build();
		});

		it('script has correct path', async () => {
			const html = await fetchHTML(fixture, '/hello/');
			const $ = cheerioLoad(html);
			assert.match($('script').attr('src'), /^\/hello\/assets\/entry\..{8}\.mjs$/);
		});
	});

	describe('with custom rollup output file names and assetsPrefix', () => {
		before(async () => {
			fixture = await loadFixture({
				...defaultFixtureOptions,
				vite: {
					build: {
						assetsInlineLimit: 0,
						rollupOptions: {
							output: {
								entryFileNames: 'assets/entry.[hash].mjs',
								chunkFileNames: 'assets/chunks/chunk.[hash].mjs',
								assetFileNames: 'assets/asset.[hash][extname]',
							},
						},
					},
				},
				build: {
					assetsPrefix: 'https://cdn.example.com',
				},
			});
			await fixture.build();
		});

		it('script has correct path', async () => {
			const html = await fetchHTML(fixture, '/');
			const $ = cheerioLoad(html);
			assert.match(
				$('script').attr('src'),
				/^https:\/\/cdn\.example\.com\/assets\/entry\..{8}\.mjs$/
			);
		});
	});
});
