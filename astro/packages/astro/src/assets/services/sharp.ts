import type { FormatEnum } from 'sharp';
import type { ImageOutputFormat, ImageQualityPreset } from '../types.js';
import {
	baseService,
	parseQuality,
	type BaseServiceTransform,
	type LocalImageService,
} from './service.js';

let sharp: typeof import('sharp');

const qualityTable: Record<ImageQualityPreset, number> = {
	low: 25,
	mid: 50,
	high: 80,
	max: 100,
};

async function loadSharp() {
	let sharpImport: typeof import('sharp');
	try {
		sharpImport = (await import('sharp')).default;
	} catch (e) {
		throw new Error('Could not find Sharp. Please install Sharp manually into your project.');
	}

	return sharpImport;
}

const sharpService: LocalImageService = {
	validateOptions: baseService.validateOptions,
	getURL: baseService.getURL,
	parseURL: baseService.parseURL,
	getHTMLAttributes: baseService.getHTMLAttributes,
	async transform(inputBuffer, transformOptions) {
		if (!sharp) sharp = await loadSharp();

		const transform: BaseServiceTransform = transformOptions as BaseServiceTransform;

		let result = sharp(inputBuffer, { failOnError: false, pages: -1 });

		// Never resize using both width and height at the same time, prioritizing width.
		if (transform.height && !transform.width) {
			result.resize({ height: transform.height });
		} else if (transform.width) {
			result.resize({ width: transform.width });
		}

		if (transform.format) {
			let quality: number | string | undefined = undefined;
			if (transform.quality) {
				const parsedQuality = parseQuality(transform.quality);
				if (typeof parsedQuality === 'number') {
					quality = parsedQuality;
				} else {
					quality = transform.quality in qualityTable ? qualityTable[transform.quality] : undefined;
				}
			}

			result.toFormat(transform.format as keyof FormatEnum, { quality: quality });
		}

		const { data, info } = await result.toBuffer({ resolveWithObject: true });

		return {
			data: data,
			format: info.format as ImageOutputFormat,
		};
	},
};

export default sharpService;
