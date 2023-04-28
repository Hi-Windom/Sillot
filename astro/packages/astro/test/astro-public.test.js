import { expect } from 'chai';
import { loadFixture } from './test-utils.js';

describe('Public', () => {
	let fixture;

	before(async () => {
		fixture = await loadFixture({ root: './fixtures/astro-public/' });
		await fixture.build();
	});

	it('css and js files do not get bundled', async () => {
		let indexHtml = await fixture.readFile('/index.html');
		expect(indexHtml).to.include('<script src="/example.js"></script>');
		expect(indexHtml).to.include('<link href="/example.css" rel="stylesheet">');
		expect(indexHtml).to.include('<img src="/images/twitter.png">');
	});
});
