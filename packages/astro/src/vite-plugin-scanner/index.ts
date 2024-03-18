import { extname } from 'node:path';
import { bold } from 'kleur/colors';
import type { Plugin as VitePlugin } from 'vite';
import { normalizePath } from 'vite';
import type { AstroSettings } from '../@types/astro.js';
import { type Logger } from '../core/logger/core.js';
import { isEndpoint, isPage, rootRelativePath } from '../core/util.js';
import { getPrerenderDefault, isServerLikeOutput } from '../prerender/utils.js';
import { scan } from './scan.js';

export interface AstroPluginScannerOptions {
	settings: AstroSettings;
	logger: Logger;
}

const KNOWN_FILE_EXTENSIONS = ['.astro', '.js', '.ts'];

export default function astroScannerPlugin({
	settings,
	logger,
}: AstroPluginScannerOptions): VitePlugin {
	return {
		name: 'astro:scanner',
		enforce: 'post',

		async transform(this, code, id, options) {
			if (!options?.ssr) return;

			const filename = normalizePath(id);
			let fileURL: URL;
			try {
				fileURL = new URL(`file://${filename}`);
			} catch (e) {
				// If we can't construct a valid URL, exit early
				return;
			}

			const fileIsPage = isPage(fileURL, settings);
			const fileIsEndpoint = isEndpoint(fileURL, settings);
			if (!(fileIsPage || fileIsEndpoint)) return;
			const defaultPrerender = getPrerenderDefault(settings.config);
			const pageOptions = await scan(code, id, settings);

			if (typeof pageOptions.prerender === 'undefined') {
				pageOptions.prerender = defaultPrerender;
			}
			// `getStaticPaths` warning is just a string check, should be good enough for most cases
			if (
				!pageOptions.prerender &&
				isServerLikeOutput(settings.config) &&
				code.includes('getStaticPaths') &&
				// this should only be valid for `.astro`, `.js` and `.ts` files
				KNOWN_FILE_EXTENSIONS.includes(extname(filename))
			) {
				logger.warn(
					'router',
					`getStaticPaths() ignored in dynamic page ${bold(
						rootRelativePath(settings.config.root, fileURL, true)
					)}. Add \`export const prerender = true;\` to prerender the page as static HTML during the build process.`
				);
			}

			const { meta = {} } = this.getModuleInfo(id) ?? {};
			return {
				code,
				map: null,
				meta: {
					...meta,
					astro: {
						...(meta.astro ?? { hydratedComponents: [], clientOnlyComponents: [], scripts: [] }),
						pageOptions,
					},
				},
			};
		},
	};
}
