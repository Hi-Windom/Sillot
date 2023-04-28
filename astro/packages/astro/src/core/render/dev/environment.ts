import type { AstroSettings, RuntimeMode } from '../../../@types/astro';
import type { LogOptions } from '../../logger/core.js';
import type { ModuleLoader } from '../../module-loader/index';
import type { Environment } from '../index';

import { createEnvironment } from '../index.js';
import { RouteCache } from '../route-cache.js';
import { createResolve } from './resolve.js';

export type DevelopmentEnvironment = Environment & {
	loader: ModuleLoader;
	settings: AstroSettings;
};

export function createDevelopmentEnvironment(
	settings: AstroSettings,
	logging: LogOptions,
	loader: ModuleLoader
): DevelopmentEnvironment {
	const mode: RuntimeMode = 'development';
	let env = createEnvironment({
		adapterName: settings.adapter?.name,
		logging,
		markdown: settings.config.markdown,
		mode,
		// This will be overridden in the dev server
		renderers: [],
		resolve: createResolve(loader, settings.config.root),
		routeCache: new RouteCache(logging, mode),
		site: settings.config.site,
		ssr: settings.config.output === 'server',
		streaming: true,
		telemetry: Boolean(settings.forceDisableTelemetry),
	});

	return {
		...env,
		loader,
		settings,
	};
}
