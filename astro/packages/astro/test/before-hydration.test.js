import { expect } from 'chai';
import * as cheerio from 'cheerio';
import { loadFixture } from './test-utils.js';
import { preact } from './fixtures/before-hydration/deps.mjs';
import testAdapter from './test-adapter.js';

describe('Astro Scripts before-hydration', () => {
	describe('SSG', () => {
		describe('Is used by an integration', () => {
			/** @type {import('./test-utils').Fixture} */
			let fixture;

			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/before-hydration/',
					integrations: [
						preact(),
						{
							name: '@test/before-hydration',
							hooks: {
								'astro:config:setup'({ injectScript }) {
									injectScript('before-hydration', `import '/src/scripts/global.js';`);
								},
							},
						},
					],
				});
			});

			describe('Development', () => {
				/** @type {import('./test-utils').DevServer} */
				let devServer;

				before(async () => {
					devServer = await fixture.startDevServer();
				});

				after(async () => {
					await devServer.stop();
				});

				it('Is included in the astro-island', async () => {
					let res = await fixture.fetch('/');
					let html = await res.text();
					let $ = cheerio.load(html);
					expect($('astro-island[before-hydration-url]')).has.a.lengthOf(1);
				});
			});

			describe('Build', () => {
				before(async () => {
					await fixture.build();
				});

				it('Is included in the astro-island', async () => {
					let html = await fixture.readFile('/index.html');
					let $ = cheerio.load(html);
					expect($('astro-island[before-hydration-url]')).has.a.lengthOf(1);
				});
			});
		});

		describe('Is not used by an integration', () => {
			/** @type {import('./test-utils').Fixture} */
			let fixture;

			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/before-hydration/',
				});
			});

			describe('Development', () => {
				/** @type {import('./test-utils').DevServer} */
				let devServer;

				before(async () => {
					devServer = await fixture.startDevServer();
				});

				after(async () => {
					await devServer.stop();
				});

				it('Does include before-hydration-url on the astro-island', async () => {
					let res = await fixture.fetch('/');
					let html = await res.text();
					let $ = cheerio.load(html);
					expect($('astro-island[before-hydration-url]')).has.a.lengthOf(1);
				});
			});

			describe('Build', () => {
				before(async () => {
					await fixture.build();
				});

				it('Does not include before-hydration-url on the astro-island', async () => {
					let html = await fixture.readFile('/index.html');
					let $ = cheerio.load(html);
					expect($('astro-island[before-hydration-url]')).has.a.lengthOf(0);
				});
			});
		});
	});

	describe('SSR', () => {
		describe('Is used by an integration', () => {
			/** @type {import('./test-utils').Fixture} */
			let fixture;

			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/before-hydration/',
					output: 'server',
					adapter: testAdapter(),
					integrations: [
						preact(),
						{
							name: '@test/before-hydration',
							hooks: {
								'astro:config:setup'({ injectScript }) {
									injectScript('before-hydration', `import '/src/scripts/global.js';`);
								},
							},
						},
					],
				});
			});

			describe('Prod', () => {
				before(async () => {
					await fixture.build();
				});

				it('Is included in the astro-island', async () => {
					let app = await fixture.loadTestAdapterApp();
					let request = new Request('http://example.com/');
					let response = await app.render(request);
					let html = await response.text();
					let $ = cheerio.load(html);
					expect($('astro-island[before-hydration-url]')).has.a.lengthOf(1);
				});
			});
		});

		describe('Is not used by an integration', () => {
			/** @type {import('./test-utils').Fixture} */
			let fixture;

			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/before-hydration/',
					output: 'server',
					adapter: testAdapter(),
				});
			});

			describe('Build', () => {
				before(async () => {
					await fixture.build();
				});

				it('Does not include before-hydration-url on the astro-island', async () => {
					let app = await fixture.loadTestAdapterApp();
					let request = new Request('http://example.com/');
					let response = await app.render(request);
					let html = await response.text();
					let $ = cheerio.load(html);
					expect($('astro-island[before-hydration-url]')).has.a.lengthOf(0);
				});
			});
		});
	});
});
