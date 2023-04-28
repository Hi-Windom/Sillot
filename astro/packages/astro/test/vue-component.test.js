import { expect } from 'chai';
import * as cheerio from 'cheerio';
import { isWindows, loadFixture } from './test-utils.js';

describe('Vue component', () => {
	let fixture;

	before(async () => {
		fixture = await loadFixture({
			root: './fixtures/vue-component/',
		});
	});

	describe('build', () => {
		before(async () => {
			await fixture.build();
		});

		it('Can load Vue', async () => {
			const html = await fixture.readFile('/index.html');
			const $ = cheerio.load(html);

			const allPreValues = $('pre')
				.toArray()
				.map((el) => $(el).text());

			// test 1: renders all components correctly
			expect(allPreValues).to.deep.equal(['0', '1', '1', '1', '10', '100', '1000']);

			// test 2: renders 3 <astro-island>s
			expect($('astro-island')).to.have.lengthOf(6);

			// test 3: all <astro-island>s have uid attributes
			expect($('astro-island[uid]')).to.have.lengthOf(6);

			// test 4: treats <my-button> as a custom element
			expect($('my-button')).to.have.lengthOf(7);

			// test 5: components with identical render output and props have been deduplicated
			const uniqueRootUIDs = $('astro-island').map((i, el) => $(el).attr('uid'));
			expect(new Set(uniqueRootUIDs).size).to.equal(5);

			// test 6: import public files work
			expect($('#vue-img')).to.be.ok;
		});
	});

	if (isWindows) return;

	describe('dev', () => {
		let devServer;

		before(async () => {
			devServer = await fixture.startDevServer();
		});

		after(async () => {
			await devServer.stop();
		});

		it('scripts proxy correctly', async () => {
			const html = await fixture.fetch('/').then((res) => res.text());
			const $ = cheerio.load(html);

			for (const script of $('script').toArray()) {
				const { src } = script.attribs;
				if (!src) continue;
				expect((await fixture.fetch(src)).status, `404: ${src}`).to.equal(200);
			}
		});
	});
});
