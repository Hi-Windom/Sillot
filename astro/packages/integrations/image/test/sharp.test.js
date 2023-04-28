import { expect } from 'chai';
import sharp from '../dist/loaders/sharp.js';

describe('Sharp service', () => {
	describe('serializeTransform', () => {
		const src = '/assets/image.png';

		[
			['only requires src', { src }],
			['quality', { src, quality: 80 }],
			['format', { src, format: 'jpeg' }],
			['width', { src, width: 1280 }],
			['height', { src, height: 414 }],
			['width & height', { src, height: 400, width: 200 }],
			['aspect ratio string', { src, aspectRatio: '16:9' }],
			['aspect ratio float', { src, aspectRatio: 1.7 }],
			['background color', { src, format: 'jpeg', background: '#333333' }],
			['crop fit', { src, fit: 'cover' }],
			['crop position', { src, position: 'center' }],
		].forEach(([description, props]) => {
			it(description, async () => {
				const { searchParams } = await sharp.serializeTransform(props);

				function verifyProp(expected, search) {
					if (expected) {
						expect(searchParams.get(search)).to.equal(expected.toString());
					} else {
						expect(searchParams.has(search)).to.be.false;
					}
				}

				verifyProp(props.quality, 'q');
				verifyProp(props.format, 'f');
				verifyProp(props.width, 'w');
				verifyProp(props.height, 'h');
				verifyProp(props.aspectRatio, 'ar');
				verifyProp(props.fit, 'fit');
				verifyProp(props.position, 'p');
				verifyProp(props.background, 'bg');
			});
		});
	});

	describe('parseTransform', async () => {
		const src = '/assets/image.png';
		const href = encodeURIComponent(src);

		[
			['only requires src', `href=${href}`, { src }],
			['quality', `q=80&href=${href}`, { src, quality: 80 }],
			['format', `f=jpeg&href=${href}`, { src, format: 'jpeg' }],
			['width', `w=1280&href=${href}`, { src, width: 1280 }],
			['height', `h=414&href=${href}`, { src, height: 414 }],
			['width & height', `w=200&h=400&href=${href}`, { src, height: 400, width: 200 }],
			['aspect ratio string', `ar=16:9&href=${href}`, { src, aspectRatio: '16:9' }],
			['aspect ratio float', `ar=1.7&href=${href}`, { src, aspectRatio: 1.7 }],
			[
				'background color',
				`f=jpeg&bg=%23333333&href=${href}`,
				{ src, format: 'jpeg', background: '#333333' },
			],
			['crop fit', `fit=contain&href=${href}`, { src, fit: 'contain' }],
			['crop position', `p=right%20top&href=${href}`, { src, position: 'right top' }],
		].forEach(([description, params, expected]) => {
			it(description, async () => {
				const searchParams = new URLSearchParams(params);
				const props = sharp.parseTransform(searchParams);

				expect(props).to.deep.equal(expected);
			});
		});
	});
});
