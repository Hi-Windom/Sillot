import type { AstroConfig } from '../@types/astro.js';
import { AstroError, AstroErrorData } from '../core/errors/index.js';
import { DEFAULT_HASH_PROPS } from './consts.js';
import { type ImageService, isLocalService } from './services/service.js';
import type {
	GetImageResult,
	ImageTransform,
	SrcSetValue,
	UnresolvedImageTransform,
} from './types.js';
import { isESMImportedImage, isRemoteImage } from './utils/imageKind.js';
import { probe } from './utils/remoteProbe.js';

export async function getConfiguredImageService(): Promise<ImageService> {
	if (!globalThis?.astroAsset?.imageService) {
		const { default: service }: { default: ImageService } = await import(
			// @ts-expect-error
			'virtual:image-service'
		).catch((e) => {
			const error = new AstroError(AstroErrorData.InvalidImageService);
			error.cause = e;
			throw error;
		});

		if (!globalThis.astroAsset) globalThis.astroAsset = {};
		globalThis.astroAsset.imageService = service;
		return service;
	}

	return globalThis.astroAsset.imageService;
}

export async function getImage(
	options: UnresolvedImageTransform,
	imageConfig: AstroConfig['image']
): Promise<GetImageResult> {
	if (!options || typeof options !== 'object') {
		throw new AstroError({
			...AstroErrorData.ExpectedImageOptions,
			message: AstroErrorData.ExpectedImageOptions.message(JSON.stringify(options)),
		});
	}
	if (typeof options.src === 'undefined') {
		throw new AstroError({
			...AstroErrorData.ExpectedImage,
			message: AstroErrorData.ExpectedImage.message(
				options.src,
				'undefined',
				JSON.stringify(options)
			),
		});
	}

	const service = await getConfiguredImageService();

	// If the user inlined an import, something fairly common especially in MDX, or passed a function that returns an Image, await it for them
	const resolvedOptions: ImageTransform = {
		...options,
		src:
			typeof options.src === 'object' && 'then' in options.src
				? (await options.src).default ?? (await options.src)
				: options.src,
	};

	// Infer size for remote images if inferSize is true
	if (options.inferSize && isRemoteImage(resolvedOptions.src)) {
		try {
			const result = await probe(resolvedOptions.src); // Directly probe the image URL
			resolvedOptions.width ??= result.width;
			resolvedOptions.height ??= result.height;
			delete resolvedOptions.inferSize; // Delete so it doesn't end up in the attributes
		} catch {
			throw new AstroError({
				...AstroErrorData.FailedToFetchRemoteImageDimensions,
				message: AstroErrorData.FailedToFetchRemoteImageDimensions.message(resolvedOptions.src),
			});
		}
	}

	const originalPath = isESMImportedImage(resolvedOptions.src)
		? resolvedOptions.src.fsPath
		: resolvedOptions.src;

	// Clone the `src` object if it's an ESM import so that we don't refer to any properties of the original object
	// Causing our generate step to think the image is used outside of the image optimization pipeline
	const clonedSrc = isESMImportedImage(resolvedOptions.src)
		? // @ts-expect-error - clone is a private, hidden prop
			resolvedOptions.src.clone ?? resolvedOptions.src
		: resolvedOptions.src;

	resolvedOptions.src = clonedSrc;

	const validatedOptions = service.validateOptions
		? await service.validateOptions(resolvedOptions, imageConfig)
		: resolvedOptions;

	// Get all the options for the different srcSets
	const srcSetTransforms = service.getSrcSet
		? await service.getSrcSet(validatedOptions, imageConfig)
		: [];

	let imageURL = await service.getURL(validatedOptions, imageConfig);
	let srcSets: SrcSetValue[] = await Promise.all(
		srcSetTransforms.map(async (srcSet) => ({
			transform: srcSet.transform,
			url: await service.getURL(srcSet.transform, imageConfig),
			descriptor: srcSet.descriptor,
			attributes: srcSet.attributes,
		}))
	);

	if (
		isLocalService(service) &&
		globalThis.astroAsset.addStaticImage &&
		!(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)
	) {
		const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
		imageURL = globalThis.astroAsset.addStaticImage(validatedOptions, propsToHash, originalPath);
		srcSets = srcSetTransforms.map((srcSet) => ({
			transform: srcSet.transform,
			url: globalThis.astroAsset.addStaticImage!(srcSet.transform, propsToHash, originalPath),
			descriptor: srcSet.descriptor,
			attributes: srcSet.attributes,
		}));
	}

	return {
		rawOptions: resolvedOptions,
		options: validatedOptions,
		src: imageURL,
		srcSet: {
			values: srcSets,
			attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(', '),
		},
		attributes:
			service.getHTMLAttributes !== undefined
				? await service.getHTMLAttributes(validatedOptions, imageConfig)
				: {},
	};
}
