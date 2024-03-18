import * as assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { parseHTML } from 'linkedom';
import { loadFixture } from '../../../astro/test/test-utils.js';

const imageTestRoutes = ['with-components', 'esm-import', 'content-collection'];

describe('MDX Page', () => {
	let devServer;
	let fixture;

	before(async () => {
		fixture = await loadFixture({
			root: new URL('./fixtures/mdx-images/', import.meta.url),
		});
		devServer = await fixture.startDevServer();
	});

	after(async () => {
		await devServer.stop();
	});

	describe('Optimized images in MDX', () => {
		it('works', async () => {
			const res = await fixture.fetch('/');
			assert.equal(res.status, 200);

			const html = await res.text();
			const { document } = parseHTML(html);

			const imgs = document.getElementsByTagName('img');
			assert.equal(imgs.length, 4);
			// Image using a relative path
			assert.equal(imgs.item(0).src.startsWith('/_image'), true);
			// Image using an aliased path
			assert.equal(imgs.item(1).src.startsWith('/_image'), true);
			// Image with title
			assert.equal(imgs.item(2).title, 'Houston title');
			// Image with spaces in the path
			assert.equal(imgs.item(3).src.startsWith('/_image'), true);
		});

		for (const route of imageTestRoutes) {
			it(`supports img component - ${route}`, async () => {
				const res = await fixture.fetch(`/${route}`);
				assert.equal(res.status, 200);

				const html = await res.text();
				const { document } = parseHTML(html);

				const imgs = document.getElementsByTagName('img');
				assert.equal(imgs.length, 2);

				const assetsImg = imgs.item(0);
				assert.equal(assetsImg.src.startsWith('/_image'), true);
				assert.equal(assetsImg.hasAttribute('data-my-image'), true);

				const publicImg = imgs.item(1);
				assert.equal(publicImg.src, '/favicon.svg');
				assert.equal(publicImg.hasAttribute('data-my-image'), true);
			});
		}
	});
});
