import { expect } from 'chai';
import * as cheerio from 'cheerio';
import { isWindows, loadFixture } from './test-utils.js';

describe('Solid component', () => {
	let fixture;

	before(async () => {
		fixture = await loadFixture({
			root: './fixtures/solid-component/',
		});
	});

	describe('build', () => {
		before(async () => {
			await fixture.build();
		});

		it('Can load a component', async () => {
			const html = await fixture.readFile('/index.html');
			const $ = cheerio.load(html);

			// test 1: Works
			expect($('.hello')).to.have.lengthOf(1);

			// test 2: Support rendering proxy components
			expect($('#proxy-component').text()).to.be.equal('Hello world');
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

		it('Can load a component', async () => {
			const html = await fixture.fetch('/').then((res) => res.text());
			const $ = cheerio.load(html);

			// test 1: Works
			expect($('.hello')).to.have.lengthOf(1);

			// test 2: Support rendering proxy components
			expect($('#proxy-component').text()).to.be.equal('Hello world');
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
