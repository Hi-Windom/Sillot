import * as assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import * as cheerio from 'cheerio';
import testAdapter from './test-adapter.js';
import { loadFixture } from './test-utils.js';

describe('astro:i18n virtual module', () => {
	/** @type {import('./test-utils').Fixture} */
	let fixture;
	/** @type {import('./test-utils').DevServer} */
	let devServer;

	before(async () => {
		fixture = await loadFixture({
			root: './fixtures/i18n-routing/',
		});
		devServer = await fixture.startDevServer();
	});

	after(async () => {
		await devServer.stop();
	});

	it('correctly imports the functions', async () => {
		const response = await fixture.fetch('/virtual-module');
		assert.equal(response.status, 200);
		const text = await response.text();
		assert.equal(text.includes("Virtual module doesn't break"), true);
		assert.equal(text.includes('About: /pt/about'), true);
		assert.equal(text.includes('About spanish: /spanish/about'), true);
		assert.equal(text.includes('Spain path: spanish'), true);
		assert.equal(text.includes('Preferred path: es'), true);
		assert.equal(text.includes('About it: /it/about'), true);
	});

	describe('absolute URLs', () => {
		let app;
		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-subdomain/',
				output: 'server',
				adapter: testAdapter(),
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('correctly renders the absolute URL', async () => {
			let request = new Request('http://example.com/');
			let response = await app.render(request);
			assert.equal(response.status, 200);

			let html = await response.text();
			let $ = cheerio.load(html);

			assert.equal($('body').text().includes("Virtual module doesn't break"), true);
			assert.equal($('body').text().includes('Absolute URL pt: https://example.pt/about'), true);
			assert.equal($('body').text().includes('Absolute URL it: http://it.example.com/'), true);
		});
	});
});
describe('[DEV] i18n routing', () => {
	describe('should render a page that stars with a locale but it is a page', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;
		/** @type {import('./test-utils').DevServer} */
		let devServer;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing/',
			});
			devServer = await fixture.startDevServer();
		});

		after(async () => {
			await devServer.stop();
		});

		it('renders the page', async () => {
			const response = await fixture.fetch('/endurance');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Endurance'), true);
		});
	});

	describe('i18n routing', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;
		/** @type {import('./test-utils').DevServer} */
		let devServer;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
			});
			devServer = await fixture.startDevServer();
		});

		after(async () => {
			await devServer.stop();
		});

		it('should render the en locale', async () => {
			const response = await fixture.fetch('/en/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);

			const response2 = await fixture.fetch('/en/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hello world'), true);
		});

		it('should render localised page correctly', async () => {
			const response = await fixture.fetch('/pt/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start'), true);

			const response2 = await fixture.fetch('/pt/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hola mundo'), true);
		});

		it('should render localised page correctly when using path+codes', async () => {
			const response = await fixture.fetch('/spanish/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Espanol'), true);

			const response2 = await fixture.fetch('/spanish/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Lo siento'), true);
		});

		it("should NOT render the default locale if there isn't a fallback and the route is missing", async () => {
			const response = await fixture.fetch('/it/start');
			assert.equal(response.status, 404);
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			const response = await fixture.fetch('/fr/start');
			assert.equal(response.status, 404);
		});
	});

	describe('i18n routing, with base', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;
		/** @type {import('./test-utils').DevServer} */
		let devServer;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-base/',
			});
			devServer = await fixture.startDevServer();
		});

		after(async () => {
			await devServer.stop();
		});

		it('should render the en locale', async () => {
			const response = await fixture.fetch('/new-site/en/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Hello'), true);

			const response2 = await fixture.fetch('/new-site/en/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hello world'), true);
		});

		it('should render localised page correctly', async () => {
			const response = await fixture.fetch('/new-site/pt/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Hola'), true);

			const response2 = await fixture.fetch('/new-site/pt/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hola mundo'), true);
		});

		it('should render localised page correctly when using path+codes', async () => {
			const response = await fixture.fetch('/new-site/spanish/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Espanol'), true);

			const response2 = await fixture.fetch('/new-site/spanish/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Lo siento'), true);
		});

		it("should NOT render the default locale if there isn't a fallback and the route is missing", async () => {
			const response = await fixture.fetch('/new-site/it/start');
			assert.equal(response.status, 404);
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			const response = await fixture.fetch('/new-site/fr/start');
			assert.equal(response.status, 404);
		});
	});

	describe('i18n routing with routing strategy [prefix-other-locales]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;
		/** @type {import('./test-utils').DevServer} */
		let devServer;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-other-locales/',
				i18n: {
					defaultLocale: 'en',
					locales: [
						'en',
						'pt',
						'it',
						{
							path: 'spanish',
							codes: ['es', 'es-AR'],
						},
					],
					fallback: {
						it: 'en',
						spanish: 'en',
					},
				},
			});
			devServer = await fixture.startDevServer();
		});

		after(async () => {
			await devServer.stop();
		});

		it('should render the default locale without prefix', async () => {
			const response = await fixture.fetch('/new-site/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);

			const response2 = await fixture.fetch('/new-site/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hello world'), true);
		});

		it('should return 404 when route contains the default locale', async () => {
			const response = await fixture.fetch('/new-site/en/start');
			assert.equal(response.status, 404);

			const response2 = await fixture.fetch('/new-site/en/blog/1');
			assert.equal(response2.status, 404);
		});

		it('should render localised page correctly', async () => {
			const response = await fixture.fetch('/new-site/pt/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start'), true);

			const response2 = await fixture.fetch('/new-site/pt/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hola mundo'), true);
		});

		it('should render localised page correctly when using path+codes', async () => {
			const response = await fixture.fetch('/new-site/spanish/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Espanol'), true);

			const response2 = await fixture.fetch('/new-site/spanish/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Lo siento'), true);
		});

		it('should redirect to the english locale, which is the first fallback', async () => {
			const response = await fixture.fetch('/new-site/it/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			const response = await fixture.fetch('/new-site/fr/start');
			assert.equal(response.status, 404);
		});
	});

	describe('i18n routing with routing strategy [prefix-other-locales], when `build.format` is `directory`', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;
		/** @type {import('./test-utils').DevServer} */
		let devServer;
		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-other-locales/',
				i18n: {
					defaultLocale: 'en',
					locales: [
						'en',
						'pt',
						'it',
						{
							path: 'spanish',
							codes: ['es', 'es-AR'],
						},
					],
					fallback: {
						it: 'en',
						spanish: 'en',
					},
				},
				build: {
					format: 'directory',
				},
			});
			devServer = await fixture.startDevServer();
		});

		after(async () => {
			await devServer.stop();
		});

		it('should redirect to the english locale with trailing slash', async () => {
			const response = await fixture.fetch('/new-site/it/start/');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);
		});
	});

	describe('i18n routing with routing strategy [pathname-prefix-always-no-redirect]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;
		/** @type {import('./test-utils').DevServer} */
		let devServer;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
				i18n: {
					routing: {
						prefixDefaultLocale: true,
						redirectToDefaultLocale: false,
					},
				},
			});
			devServer = await fixture.startDevServer();
		});

		after(async () => {
			await devServer.stop();
		});

		it('should NOT redirect to the index of the default locale', async () => {
			const response = await fixture.fetch('/new-site');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('I am index'), true);
		});

		it('can render the 404.astro route on unmatched requests', async () => {
			const response = await fixture.fetch('/xyz');
			assert.equal(response.status, 404);
			const text = await response.text();
			assert.equal(text.includes("Can't find the page youre looking for."), true);
		});
	});

	describe('i18n routing with routing strategy [pathname-prefix-always]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;
		/** @type {import('./test-utils').DevServer} */
		let devServer;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
			});
			devServer = await fixture.startDevServer();
		});

		after(async () => {
			await devServer.stop();
		});

		it('should redirect to the index of the default locale', async () => {
			const response = await fixture.fetch('/new-site');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Hello'), true);
		});

		it('should not render the default locale without prefix', async () => {
			const response = await fixture.fetch('/new-site/start');
			assert.equal(response.status, 404);
			assert.equal((await response.text()).includes('Start'), false);

			const response2 = await fixture.fetch('/new-site/blog/1');
			assert.equal(response2.status, 404);
			assert.equal((await response2.text()).includes('Hello world'), false);
		});

		it('should render the default locale with prefix', async () => {
			const response = await fixture.fetch('/new-site/en/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);

			const response2 = await fixture.fetch('/new-site/en/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hello world'), true);
		});

		it('should render localised page correctly', async () => {
			const response = await fixture.fetch('/new-site/pt/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start'), true);

			const response2 = await fixture.fetch('/new-site/pt/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hola mundo'), true);
		});

		it('should render localised page correctly when using path+codes', async () => {
			const response = await fixture.fetch('/new-site/spanish/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Espanol'), true);

			const response2 = await fixture.fetch('/new-site/spanish/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Lo siento'), true);
		});

		it('should not redirect to the english locale', async () => {
			const response = await fixture.fetch('/new-site/it/start');
			assert.equal(response.status, 404);
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			const response = await fixture.fetch('/new-site/fr/start');
			assert.equal(response.status, 404);
		});
	});

	describe('[trailingSlash: always]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;
		/** @type {import('./test-utils').DevServer} */
		let devServer;
		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
				trailingSlash: 'always',
			});
			devServer = await fixture.startDevServer();
		});

		after(async () => {
			await devServer.stop();
		});

		it('should redirect to the index of the default locale', async () => {
			const response = await fixture.fetch('/new-site/');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Hello'), true);
		});
	});

	describe('i18n routing fallback', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;
		/** @type {import('./test-utils').DevServer} */
		let devServer;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-fallback/',
				i18n: {
					defaultLocale: 'en',
					locales: [
						'en',
						'pt',
						'it',
						{
							path: 'spanish',
							codes: ['es', 'es-AR'],
						},
					],
					fallback: {
						it: 'en',
						spanish: 'en',
					},
					routing: {
						prefixDefaultLocale: false,
					},
				},
			});
			devServer = await fixture.startDevServer();
		});

		after(async () => {
			await devServer.stop();
		});

		it('should render the default locale without prefix', async () => {
			const response = await fixture.fetch('/new-site/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);

			const response2 = await fixture.fetch('/new-site/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hello world'), true);
		});

		it('should render localised page correctly', async () => {
			const response = await fixture.fetch('/new-site/pt/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start'), true);

			const response2 = await fixture.fetch('/new-site/pt/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hola mundo'), true);
		});

		it('should render localised page correctly when using path+codes', async () => {
			const response = await fixture.fetch('/new-site/spanish/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);

			const response2 = await fixture.fetch('/new-site/spanish/blog/1');
			assert.equal(response2.status, 200);
			assert.equal((await response2.text()).includes('Hello world'), true);
		});

		it('should redirect to the english locale, which is the first fallback', async () => {
			const response = await fixture.fetch('/new-site/it/start');
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			const response = await fixture.fetch('/new-site/fr/start');
			assert.equal(response.status, 404);
		});
	});
});
describe('[SSG] i18n routing', () => {
	describe('i18n routing', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
			});
			await fixture.build();
		});

		it('should render the en locale', async () => {
			let html = await fixture.readFile('/en/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Start'), true);

			html = await fixture.readFile('/en/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Hello world'), true);
		});

		it('should render localised page correctly', async () => {
			let html = await fixture.readFile('/pt/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Oi essa e start'), true);

			html = await fixture.readFile('/pt/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Hola mundo'), true);
		});

		it('should render localised page correctly when it has codes+path', async () => {
			let html = await fixture.readFile('/spanish/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Espanol'), true);

			html = await fixture.readFile('/spanish/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Lo siento'), true);
		});

		it("should NOT render the default locale if there isn't a fallback and the route is missing", async () => {
			try {
				await fixture.readFile('/it/start/index.html');
				// It should throw before reaching this point
				assert.fail('The file should not exist');
			} catch (e) {
				assert.equal(e.message.includes('ENOENT'), true);
			}
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			try {
				await fixture.readFile('/fr/start/index.html');
				// It should throw before reaching this point
				assert.fail('The file should not exist');
			} catch (e) {
				assert.equal(e.message.includes('ENOENT'), true);
			}
		});
	});

	describe('i18n routing, with base', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-base/',
			});
			await fixture.build();
		});

		it('should render the en locale', async () => {
			let html = await fixture.readFile('/en/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Hello'), true);

			html = await fixture.readFile('/en/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Hello world'), true);
		});

		it('should render localised page correctly', async () => {
			let html = await fixture.readFile('/pt/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Hola'), true);

			html = await fixture.readFile('/pt/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Hola mundo'), true);
		});

		it('should render localised page correctly when it has codes+path', async () => {
			let html = await fixture.readFile('/spanish/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Espanol'), true);

			html = await fixture.readFile('/spanish/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Lo siento'), true);
		});

		it("should NOT render the default locale if there isn't a fallback and the route is missing", async () => {
			try {
				await fixture.readFile('/it/start/index.html');
				// It should throw before reaching this point
				assert.fail('The file should not exist');
			} catch (e) {
				assert.equal(e.message.includes('ENOENT'), true);
			}
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			try {
				await fixture.readFile('/fr/start/index.html');
				// It should throw before reaching this point
				assert.fail('The file should not exist');
			} catch (e) {
				assert.equal(e.message.includes('ENOENT'), true);
			}
		});
	});

	describe('i18n routing with routing strategy [prefix-other-locales]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-other-locales/',
			});
			await fixture.build();
		});

		it('should render the en locale', async () => {
			let html = await fixture.readFile('/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Start'), true);

			html = await fixture.readFile('/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Hello world'), true);
		});

		it('should return 404 when route contains the default locale', async () => {
			try {
				await fixture.readFile('/start/en/index.html');
				// It should throw before reaching this point
				assert.fail('The file should not exist');
			} catch (e) {
				assert.equal(e.message.includes('ENOENT'), true);
			}
		});

		it('should render localised page correctly', async () => {
			let html = await fixture.readFile('/pt/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Oi essa e start'), true);

			html = await fixture.readFile('/pt/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Hola mundo'), true);
		});

		it('should render localised page correctly when it has codes+path', async () => {
			let html = await fixture.readFile('/spanish/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Espanol'), true);

			html = await fixture.readFile('/spanish/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Lo siento'), true);
		});

		it("should NOT render the default locale if there isn't a fallback and the route is missing", async () => {
			try {
				await fixture.readFile('/it/start/index.html');
				// It should throw before reaching this point
				assert.fail('The file should not exist');
			} catch (e) {
				assert.equal(e.message.includes('ENOENT'), true);
			}
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			try {
				await fixture.readFile('/fr/start/index.html');
				// It should throw before reaching this point
				assert.fail('The file should not exist');
			} catch (e) {
				assert.equal(e.message.includes('ENOENT'), true);
			}
		});
	});

	describe('i18n routing with routing strategy [pathname-prefix-always-no-redirect]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
				i18n: {
					routing: {
						prefixDefaultLocale: true,
						redirectToDefaultLocale: false,
					},
				},
			});
			await fixture.build();
		});

		it('should NOT redirect to the index of the default locale', async () => {
			const html = await fixture.readFile('/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('I am index'), true);
		});
	});

	describe('i18n routing with routing strategy [pathname-prefix-always]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
			});
			await fixture.build();
		});

		it('should redirect to the index of the default locale', async () => {
			const html = await fixture.readFile('/index.html');
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('url=/new-site/en'), true);
		});

		it('should render the en locale', async () => {
			let html = await fixture.readFile('/en/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Start'), true);

			html = await fixture.readFile('/en/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Hello world'), true);
		});

		it('should render localised page correctly', async () => {
			let html = await fixture.readFile('/pt/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Oi essa e start'), true);

			html = await fixture.readFile('/pt/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Hola mundo'), true);
		});

		it('should render localised page correctly when it has codes+path', async () => {
			let html = await fixture.readFile('/spanish/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Espanol'), true);

			html = await fixture.readFile('/spanish/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Lo siento'), true);
		});

		it("should NOT render the default locale if there isn't a fallback and the route is missing", async () => {
			try {
				await fixture.readFile('/it/start/index.html');
				// It should throw before reaching this point
				assert.fail('The file should not exist');
			} catch (e) {
				assert.equal(e.message.includes('ENOENT'), true);
			}
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			try {
				await fixture.readFile('/fr/start/index.html');
				// It should throw before reaching this point
				assert.fail('The file should not exist');
			} catch (e) {
				assert.equal(e.message.includes('ENOENT'), true);
			}
		});

		describe('[trailingSlash: always]', () => {
			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing-prefix-always/',
					trailingSlash: 'always',
				});
			});

			it('should redirect to the index of the default locale', async () => {
				const html = await fixture.readFile('/index.html');
				assert.equal(html.includes('http-equiv="refresh'), true);
				assert.equal(html.includes('url=/new-site/en'), true);
			});
		});

		describe('when `build.format` is `directory`', () => {
			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing-prefix-always/',
					build: {
						format: 'directory',
					},
				});
				await fixture.build();
			});

			it('should redirect to the index of the default locale', async () => {
				const html = await fixture.readFile('/index.html');
				assert.equal(html.includes('http-equiv="refresh'), true);
				assert.equal(html.includes('http-equiv="refresh'), true);
				assert.equal(html.includes('url=/new-site/en/'), true);
			});
		});
	});

	describe('i18n routing with fallback', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-fallback/',
				i18n: {
					defaultLocale: 'en',
					locales: [
						'en',
						'pt',
						'it',
						{
							path: 'spanish',
							codes: ['es', 'es-AR'],
						},
					],
					fallback: {
						it: 'en',
						spanish: 'en',
					},
				},
			});
			await fixture.build();
		});

		it('should render the en locale', async () => {
			let html = await fixture.readFile('/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Start'), true);

			html = await fixture.readFile('/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Hello world'), true);
		});

		it('should render localised page correctly', async () => {
			let html = await fixture.readFile('/pt/start/index.html');
			let $ = cheerio.load(html);
			assert.equal($('body').text().includes('Oi essa e start: pt'), true);

			html = await fixture.readFile('/pt/blog/1/index.html');
			$ = cheerio.load(html);
			assert.equal($('body').text().includes('Hola mundo'), true);
		});

		it('should redirect to the english locale correctly when it has codes+path', async () => {
			let html = await fixture.readFile('/spanish/start/index.html');
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('url=/new-site/start'), true);
			html = await fixture.readFile('/spanish/index.html');
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('url=/new-site'), true);
		});

		it('should redirect to the english locale, which is the first fallback', async () => {
			let html = await fixture.readFile('/it/start/index.html');
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('url=/new-site/start'), true);
			html = await fixture.readFile('/it/index.html');
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('url=/new-site'), true);
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			try {
				await fixture.readFile('/fr/start/index.html');
				// It should throw before reaching this point
				assert.fail('The file should not exist');
			} catch (e) {
				assert.equal(e.message.includes('ENOENT'), true);
			}
		});

		it('should render the page with client scripts', async () => {
			let html = await fixture.readFile('/index.html');
			let $ = cheerio.load(html);
			assert.equal($('script').text().includes('console.log("this is a script")'), true);
		});

		describe('with localised index pages', () => {
			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing-fallback-index/',
					i18n: {
						defaultLocale: 'en',
						locales: [
							'en',
							'pt',
							'it',
							{
								path: 'spanish',
								codes: ['es', 'es-AR'],
							},
						],
						fallback: {
							it: 'en',
							spanish: 'en',
						},
					},
				});
				await fixture.build();
			});

			it('should render correctly', async () => {
				let html = await fixture.readFile('/pt/index.html');
				let $ = cheerio.load(html);
				assert.equal($('body').text().includes('Oi essa e index'), true);
			});
		});
	});

	describe('i18n routing with fallback and [pathname-prefix-always]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
				i18n: {
					defaultLocale: 'en',
					locales: ['en', 'pt', 'it'],
					fallback: {
						it: 'en',
					},
					routing: {
						prefixDefaultLocale: true,
					},
				},
			});
			await fixture.build();
		});

		it('should render the en locale', async () => {
			let html = await fixture.readFile('/it/start/index.html');
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('url=/new-site/en/start'), true);
			html = await fixture.readFile('/it/index.html');
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('url=/new-site/en'), true);
		});
	});

	describe('i18n routing with fallback and redirect', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-fallback/',
				redirects: {
					'/': '/en',
				},
				i18n: {
					defaultLocale: 'en',
					locales: ['en', 'pt', 'it'],
					fallback: {
						it: 'en',
					},
				},
			});
			await fixture.build();
		});

		it('should render the en locale', async () => {
			let html = await fixture.readFile('/index.html');
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('Redirecting to: /en'), true);
		});
	});

	describe('i18n routing with fallback and trailing slash', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-fallback/',
				trailingSlash: 'always',
				build: {
					format: 'directory',
				},
				i18n: {
					defaultLocale: 'en',
					locales: ['en', 'pt', 'it'],
					fallback: {
						it: 'en',
					},
					routing: {
						prefixDefaultLocale: false,
					},
				},
			});
			await fixture.build();
		});

		it('should render the en locale', async () => {
			let html = await fixture.readFile('/it/index.html');
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('Redirecting to: /new-site/'), true);
		});
	});

	describe('should render a page that stars with a locale but it is a page', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing/',
			});
			await fixture.build();
		});

		it('renders the page', async () => {
			const html = await fixture.readFile('/endurance/index.html');
			assert.equal(html.includes('Endurance'), true);
		});
	});

	describe('current locale', () => {
		describe('with [prefix-other-locales]', () => {
			/** @type {import('./test-utils').Fixture} */
			let fixture;

			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing/',
				});
				await fixture.build();
			});

			it('should return the default locale', async () => {
				const html = await fixture.readFile('/current-locale/index.html');
				assert.equal(html.includes('Current Locale: en'), true);
			});

			it('should return the default locale when rendering a route with spread operator', async () => {
				const html = await fixture.readFile('/blog/es/index.html');
				assert.equal(html.includes('Current Locale: es'), true);
			});

			it('should return the default locale of the current URL', async () => {
				const html = await fixture.readFile('/pt/start/index.html');
				assert.equal(html.includes('Current Locale: pt'), true);
			});

			it('should return the default locale when a route is dynamic', async () => {
				const html = await fixture.readFile('/dynamic/lorem/index.html');
				assert.equal(html.includes('Current Locale: en'), true);
			});

			it('should returns the correct locale when requesting a locale via path', async () => {
				const html = await fixture.readFile('/spanish/index.html');
				assert.equal(html.includes('Current Locale: es'), true);
			});
		});

		describe('with [pathname-prefix-always]', () => {
			/** @type {import('./test-utils').Fixture} */
			let fixture;

			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing-prefix-always/',
				});
				await fixture.build();
			});

			it('should return the locale of the current URL (en)', async () => {
				const html = await fixture.readFile('/en/start/index.html');
				assert.equal(html.includes('Current Locale: en'), true);
			});

			it('should return the locale of the current URL (pt)', async () => {
				const html = await fixture.readFile('/pt/start/index.html');
				assert.equal(html.includes('Current Locale: pt'), true);
			});
		});
	});
});
describe('[SSR] i18n routing', () => {
	let app;

	describe('should render a page that stars with a locale but it is a page', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing/',
				output: 'server',
				adapter: testAdapter(),
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('renders the page', async () => {
			let request = new Request('http://example.com/endurance');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Endurance'), true);
		});
	});

	describe('default', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
				output: 'server',
				adapter: testAdapter(),
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('should redirect to the index of the default locale', async () => {
			let request = new Request('http://example.com/new-site');
			let response = await app.render(request);
			assert.equal(response.status, 302);
			assert.equal(response.headers.get('location'), '/new-site/en/');
		});

		it('should render the en locale', async () => {
			let request = new Request('http://example.com/en/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);
		});

		it('should render localised page correctly', async () => {
			let request = new Request('http://example.com/pt/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start'), true);
		});

		it('should render localised page correctly when locale has codes+path', async () => {
			let request = new Request('http://example.com/spanish/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Espanol'), true);
		});

		it("should NOT render the default locale if there isn't a fallback and the route is missing", async () => {
			let request = new Request('http://example.com/it/start');
			let response = await app.render(request);
			assert.equal(response.status, 404);
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			let request = new Request('http://example.com/fr/start');
			let response = await app.render(request);
			assert.equal(response.status, 404);
		});
	});

	describe('with base', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
				output: 'server',
				adapter: testAdapter(),
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('should render the en locale', async () => {
			let request = new Request('http://example.com/en/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);
		});

		it('should render localised page correctly', async () => {
			let request = new Request('http://example.com/new-site/pt/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start'), true);
		});

		it("should NOT render the default locale if there isn't a fallback and the route is missing", async () => {
			let request = new Request('http://example.com/new-site/it/start');
			let response = await app.render(request);
			assert.equal(response.status, 404);
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			let request = new Request('http://example.com/new-site/fr/start');
			let response = await app.render(request);
			assert.equal(response.status, 404);
		});
	});

	describe('i18n routing with routing strategy [prefix-other-locales]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-other-locales/',
				output: 'server',
				adapter: testAdapter(),
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('should render the en locale', async () => {
			let request = new Request('http://example.com/new-site/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);
		});

		it('should return 404 if route contains the default locale', async () => {
			let request = new Request('http://example.com/new-site/en/start');
			let response = await app.render(request);
			assert.equal(response.status, 404);
		});

		it('should render localised page correctly', async () => {
			let request = new Request('http://example.com/new-site/pt/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start'), true);
		});

		it('should render localised page correctly when locale has codes+path', async () => {
			let request = new Request('http://example.com/new-site/spanish/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Espanol'), true);
		});

		it("should NOT render the default locale if there isn't a fallback and the route is missing", async () => {
			let request = new Request('http://example.com/new-site/it/start');
			let response = await app.render(request);
			assert.equal(response.status, 404);
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			let request = new Request('http://example.com/new-site/fr/start');
			let response = await app.render(request);
			assert.equal(response.status, 404);
		});
	});

	describe('i18n routing with routing strategy [pathname-prefix-always-no-redirect]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
				output: 'server',
				adapter: testAdapter(),
				i18n: {
					routing: {
						prefixDefaultLocale: true,
						redirectToDefaultLocale: false,
					},
				},
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('should NOT redirect the index to the default locale', async () => {
			let request = new Request('http://example.com/new-site');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('I am index'), true);
		});

		it('can render the 404.astro route on unmatched requests', async () => {
			const request = new Request('http://example.com/xyz');
			const response = await app.render(request);
			assert.equal(response.status, 404);
			const text = await response.text();
			assert.equal(text.includes("Can't find the page youre looking for."), true);
		});
	});

	describe('i18n routing with routing strategy [pathname-prefix-always]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
				output: 'server',
				adapter: testAdapter(),
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('should redirect the index to the default locale', async () => {
			let request = new Request('http://example.com/new-site');
			let response = await app.render(request);
			assert.equal(response.status, 302);
			assert.equal(response.headers.get('location'), '/new-site/en/');
		});

		it('should render the en locale', async () => {
			let request = new Request('http://example.com/new-site/en/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);
		});

		it('should render localised page correctly', async () => {
			let request = new Request('http://example.com/pt/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start'), true);
		});

		it('should render localised page correctly when locale has codes+path', async () => {
			let request = new Request('http://example.com/spanish/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Espanol'), true);
		});

		it("should NOT render the default locale if there isn't a fallback and the route is missing", async () => {
			let request = new Request('http://example.com/it/start');
			let response = await app.render(request);
			assert.equal(response.status, 404);
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			let request = new Request('http://example.com/fr/start');
			let response = await app.render(request);
			assert.equal(response.status, 404);
		});

		describe('[trailingSlash: always]', () => {
			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing-prefix-always/',
					output: 'server',
					adapter: testAdapter(),
					trailingSlash: 'always',
				});
				await fixture.build();
				app = await fixture.loadTestAdapterApp();
			});

			it('should redirect to the index of the default locale', async () => {
				let request = new Request('http://example.com/new-site/');
				let response = await app.render(request);
				assert.equal(response.status, 302);
				assert.equal(response.headers.get('location'), '/new-site/en/');
			});
		});

		describe('when `build.format` is `directory`', () => {
			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing-prefix-always/',
					output: 'server',
					adapter: testAdapter(),
					build: {
						format: 'directory',
					},
				});
				await fixture.build();
				app = await fixture.loadTestAdapterApp();
			});

			it('should redirect to the index of the default locale', async () => {
				let request = new Request('http://example.com/new-site/');
				let response = await app.render(request);
				assert.equal(response.status, 302);
				assert.equal(response.headers.get('location'), '/new-site/en/');
			});
		});
	});

	describe('with fallback', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-fallback/',
				output: 'server',
				adapter: testAdapter(),
				i18n: {
					defaultLocale: 'en',
					locales: [
						'en',
						'pt',
						'it',
						{
							codes: ['es', 'es-AR'],
							path: 'spanish',
						},
					],
					fallback: {
						it: 'en',
						spanish: 'en',
					},
				},
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('should render the en locale', async () => {
			let request = new Request('http://example.com/new-site/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Start'), true);
		});

		it('should render localised page correctly', async () => {
			let request = new Request('http://example.com/new-site/pt/start');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start'), true);
		});

		it('should redirect to the english locale, which is the first fallback', async () => {
			let request = new Request('http://example.com/new-site/it/start');
			let response = await app.render(request);
			assert.equal(response.status, 302);
			assert.equal(response.headers.get('location'), '/new-site/start');
		});

		it('should redirect to the english locale when locale has codes+path', async () => {
			let request = new Request('http://example.com/new-site/spanish/start');
			let response = await app.render(request);
			assert.equal(response.status, 302);
			assert.equal(response.headers.get('location'), '/new-site/start');
		});

		it("should render a 404 because the route `fr` isn't included in the list of locales of the configuration", async () => {
			let request = new Request('http://example.com/new-site/fr/start');
			let response = await app.render(request);
			assert.equal(response.status, 404);
		});

		describe('with routing strategy [pathname-prefix-always]', () => {
			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing-fallback/',
					output: 'server',
					adapter: testAdapter(),
					i18n: {
						defaultLocale: 'en',
						locales: ['en', 'pt', 'it'],
						fallback: {
							it: 'en',
						},
						routing: {
							prefixDefaultLocale: false,
						},
					},
				});
				await fixture.build();
				app = await fixture.loadTestAdapterApp();
			});

			it('should redirect to the english locale, which is the first fallback', async () => {
				let request = new Request('http://example.com/new-site/it/start');
				let response = await app.render(request);
				assert.equal(response.status, 302);
				assert.equal(response.headers.get('location'), '/new-site/start');
			});
		});
	});

	describe('preferred locale', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing/',
				output: 'server',
				adapter: testAdapter(),
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('should not render the locale when the value is *', async () => {
			let request = new Request('http://example.com/preferred-locale', {
				headers: {
					'Accept-Language': '*',
				},
			});
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Locale: none'), true);
		});

		it('should render the locale pt', async () => {
			let request = new Request('http://example.com/preferred-locale', {
				headers: {
					'Accept-Language': 'pt',
				},
			});
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Locale: pt'), true);
		});

		it('should render empty locales', async () => {
			let request = new Request('http://example.com/preferred-locale', {
				headers: {
					'Accept-Language': 'fr;q=0.1,fr-AU;q=0.9',
				},
			});
			let response = await app.render(request);
			const text = await response.text();
			assert.equal(response.status, 200);
			assert.equal(text.includes('Locale: none'), true);
			assert.equal(text.includes('Locale list: empty'), true);
		});

		it('should render none as preferred locale, but have a list of locales that correspond to the initial locales', async () => {
			let request = new Request('http://example.com/preferred-locale', {
				headers: {
					'Accept-Language': '*',
				},
			});
			let response = await app.render(request);
			const text = await response.text();
			assert.equal(response.status, 200);
			assert.equal(text.includes('Locale: none'), true);
			assert.equal(text.includes('Locale list: en, pt, it'), true);
		});

		describe('in case the configured locales use underscores', () => {
			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing/',
					output: 'server',
					adapter: testAdapter(),
					i18n: {
						defaultLocale: 'en',
						locales: ['en_AU', 'pt_BR', 'es_US'],
					},
				});
				await fixture.build();
				app = await fixture.loadTestAdapterApp();
			});

			it('they should be still considered when parsing the Accept-Language header', async () => {
				let request = new Request('http://example.com/preferred-locale', {
					headers: {
						'Accept-Language': 'en-AU;q=0.1,pt-BR;q=0.9',
					},
				});
				let response = await app.render(request);
				const text = await response.text();
				assert.equal(response.status, 200);
				assert.equal(text.includes('Locale: pt_BR'), true);
				assert.equal(text.includes('Locale list: pt_BR, en_AU'), true);
			});
		});

		describe('in case the configured locales are granular', () => {
			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing/',
					output: 'server',
					adapter: testAdapter(),
				});
				await fixture.build();
				app = await fixture.loadTestAdapterApp();
			});

			it('they should be still considered when parsing the Accept-Language header', async () => {
				let request = new Request('http://example.com/preferred-locale', {
					headers: {
						'Accept-Language': 'en-AU;q=0.1,es;q=0.9',
					},
				});
				let response = await app.render(request);
				const text = await response.text();
				assert.equal(response.status, 200);
				assert.equal(text.includes('Locale: spanish'), true);
				assert.equal(text.includes('Locale list: spanish'), true);
			});
		});
	});

	describe('current locale', () => {
		describe('with [prefix-other-locales]', () => {
			/** @type {import('./test-utils').Fixture} */
			let fixture;

			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing/',
					output: 'server',
					adapter: testAdapter(),
				});
				await fixture.build();
				app = await fixture.loadTestAdapterApp();
			});

			it('should return the default locale', async () => {
				let request = new Request('http://example.com/current-locale', {});
				let response = await app.render(request);
				assert.equal(response.status, 200);
				assert.equal((await response.text()).includes('Current Locale: en'), true);
			});

			it('should return the default locale when rendering a route with spread operator', async () => {
				let request = new Request('http://example.com/blog/es', {});
				let response = await app.render(request);
				assert.equal(response.status, 200);
				assert.equal((await response.text()).includes('Current Locale: es'), true);
			});

			it('should return the default locale of the current URL', async () => {
				let request = new Request('http://example.com/pt/start', {});
				let response = await app.render(request);
				assert.equal(response.status, 200);
				assert.equal((await response.text()).includes('Current Locale: pt'), true);
			});

			it('should return the default locale when a route is dynamic', async () => {
				let request = new Request('http://example.com/dynamic/lorem', {});
				let response = await app.render(request);
				assert.equal(response.status, 200);
				assert.equal((await response.text()).includes('Current Locale: en'), true);
			});
		});

		describe('with [pathname-prefix-always]', () => {
			/** @type {import('./test-utils').Fixture} */
			let fixture;

			before(async () => {
				fixture = await loadFixture({
					root: './fixtures/i18n-routing-prefix-always/',
					output: 'server',
					adapter: testAdapter(),
				});
				await fixture.build();
				app = await fixture.loadTestAdapterApp();
			});

			it('should return the locale of the current URL (en)', async () => {
				let request = new Request('http://example.com/en/start', {});
				let response = await app.render(request);
				assert.equal(response.status, 200);
				assert.equal((await response.text()).includes('Current Locale: en'), true);
			});

			it('should return the locale of the current URL (pt)', async () => {
				let request = new Request('http://example.com/pt/start', {});
				let response = await app.render(request);
				assert.equal(response.status, 200);
				assert.equal((await response.text()).includes('Current Locale: pt'), true);
			});
		});
	});

	describe('i18n routing should work with hybrid rendering', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
				output: 'hybrid',
				adapter: testAdapter(),
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('and render the index page, which is static', async () => {
			const html = await fixture.readFile('/client/index.html');
			assert.equal(html.includes('http-equiv="refresh'), true);
			assert.equal(html.includes('url=/new-site/en'), true);
		});
	});
});

describe('i18n routing does not break assets and endpoints', () => {
	describe('assets', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/core-image-base/',
				i18n: {
					defaultLocale: 'en',
					locales: ['en', 'es'],
				},
				base: '/blog',
			});
			await fixture.build();
		});

		it('should render the image', async () => {
			const html = await fixture.readFile('/index.html');
			const $ = cheerio.load(html);
			const src = $('#local img').attr('src');
			assert.equal(src.length > 0, true);
			assert.equal(src.startsWith('/blog'), true);
		});
	});

	describe('endpoint', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;

		let app;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-prefix-always/',
				output: 'server',
				adapter: testAdapter(),
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('should return the assert.equaled data', async () => {
			let request = new Request('http://example.com/new-site/test.json');
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('lorem'), true);
		});
	});

	describe('i18n routing with routing strategy [subdomain]', () => {
		/** @type {import('./test-utils').Fixture} */
		let fixture;
		let app;

		before(async () => {
			fixture = await loadFixture({
				root: './fixtures/i18n-routing-subdomain/',
				output: 'server',
				adapter: testAdapter(),
			});
			await fixture.build();
			app = await fixture.loadTestAdapterApp();
		});

		it('should render the en locale when X-Forwarded-Host header is passed', async () => {
			let request = new Request('http://example.pt/start', {
				headers: {
					'X-Forwarded-Host': 'example.pt',
					'X-Forwarded-Proto': 'https',
				},
			});
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start\n'), true);
		});

		it('should render the en locale when Host header is passed', async () => {
			let request = new Request('http://example.pt/start', {
				headers: {
					Host: 'example.pt',
					'X-Forwarded-Proto': 'https',
				},
			});
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start\n'), true);
		});

		it('should render the en locale when Host header is passed and it has the port', async () => {
			let request = new Request('http://example.pt/start', {
				headers: {
					Host: 'example.pt:8080',
					'X-Forwarded-Proto': 'https',
				},
			});
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start\n'), true);
		});

		it('should render when the protocol header we fallback to the one of the host', async () => {
			let request = new Request('https://example.pt/start', {
				headers: {
					Host: 'example.pt',
				},
			});
			let response = await app.render(request);
			assert.equal(response.status, 200);
			assert.equal((await response.text()).includes('Oi essa e start\n'), true);
		});
	});
});
