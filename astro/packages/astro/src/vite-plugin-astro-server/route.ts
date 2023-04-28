import type http from 'http';
import mime from 'mime';
import type { AstroSettings, ComponentInstance, ManifestData, RouteData } from '../@types/astro';
import type {
	ComponentPreload,
	DevelopmentEnvironment,
	SSROptions,
} from '../core/render/dev/index';

import { attachToResponse } from '../core/cookies/index.js';
import { call as callEndpoint } from '../core/endpoint/dev/index.js';
import { throwIfRedirectNotAllowed } from '../core/endpoint/index.js';
import { AstroErrorData } from '../core/errors/index.js';
import { warn } from '../core/logger/core.js';
import { appendForwardSlash } from '../core/path.js';
import { preload, renderPage } from '../core/render/dev/index.js';
import { getParamsAndProps, GetParamsAndPropsError } from '../core/render/index.js';
import { createRequest } from '../core/request.js';
import { matchAllRoutes } from '../core/routing/index.js';
import { resolvePages } from '../core/util.js';
import { log404 } from './common.js';
import { handle404Response, writeSSRResult, writeWebResponse } from './response.js';

type AsyncReturnType<T extends (...args: any) => Promise<any>> = T extends (
	...args: any
) => Promise<infer R>
	? R
	: any;

interface MatchedRoute {
	route: RouteData;
	filePath: URL;
	resolvedPathname: string;
	preloadedComponent: ComponentPreload;
	mod: ComponentInstance;
}

function getCustom404Route({ config }: AstroSettings, manifest: ManifestData) {
	// For Windows compat, use relative page paths to match the 404 route
	const relPages = resolvePages(config).href.replace(config.root.href, '');
	const pattern = new RegExp(`${appendForwardSlash(relPages)}404.(astro|md)`);
	return manifest.routes.find((r) => r.component.match(pattern));
}

export async function matchRoute(
	pathname: string,
	env: DevelopmentEnvironment,
	manifest: ManifestData
): Promise<MatchedRoute | undefined> {
	const { logging, settings, routeCache } = env;
	const matches = matchAllRoutes(pathname, manifest);

	for await (const maybeRoute of matches) {
		const filePath = new URL(`./${maybeRoute.component}`, settings.config.root);
		const preloadedComponent = await preload({ env, filePath });
		const [, mod] = preloadedComponent;
		// attempt to get static paths
		// if this fails, we have a bad URL match!
		const paramsAndPropsRes = await getParamsAndProps({
			mod,
			route: maybeRoute,
			routeCache,
			pathname: pathname,
			logging,
			ssr: settings.config.output === 'server',
		});

		if (paramsAndPropsRes !== GetParamsAndPropsError.NoMatchingStaticPath) {
			return {
				route: maybeRoute,
				filePath,
				resolvedPathname: pathname,
				preloadedComponent,
				mod,
			};
		}
	}

	// Try without `.html` extensions or `index.html` in request URLs to mimic
	// routing behavior in production builds. This supports both file and directory
	// build formats, and is necessary based on how the manifest tracks build targets.
	const altPathname = pathname.replace(/(index)?\.html$/, '');
	if (altPathname !== pathname) {
		return await matchRoute(altPathname, env, manifest);
	}

	if (matches.length) {
		const possibleRoutes = matches.flatMap((route) => route.component);

		warn(
			logging,
			'getStaticPaths',
			`${AstroErrorData.NoMatchingStaticPathFound.message(
				pathname
			)}\n\n${AstroErrorData.NoMatchingStaticPathFound.hint(possibleRoutes)}`
		);
	}

	log404(logging, pathname);
	const custom404 = getCustom404Route(settings, manifest);

	if (custom404) {
		const filePath = new URL(`./${custom404.component}`, settings.config.root);
		const preloadedComponent = await preload({ env, filePath });
		const [, mod] = preloadedComponent;

		return {
			route: custom404,
			filePath,
			resolvedPathname: pathname,
			preloadedComponent,
			mod,
		};
	}

	return undefined;
}

export async function handleRoute(
	matchedRoute: AsyncReturnType<typeof matchRoute>,
	url: URL,
	pathname: string,
	body: ArrayBuffer | undefined,
	origin: string,
	env: DevelopmentEnvironment,
	manifest: ManifestData,
	req: http.IncomingMessage,
	res: http.ServerResponse
): Promise<void> {
	const { logging, settings } = env;
	if (!matchedRoute) {
		return handle404Response(origin, req, res);
	}

	const { config } = settings;
	const filePath: URL | undefined = matchedRoute.filePath;
	const { route, preloadedComponent, mod } = matchedRoute;
	const buildingToSSR = config.output === 'server';

	// Headers are only available when using SSR.
	const request = createRequest({
		url,
		headers: buildingToSSR ? req.headers : new Headers(),
		method: req.method,
		body,
		logging,
		ssr: buildingToSSR,
		clientAddress: buildingToSSR ? req.socket.remoteAddress : undefined,
	});

	// Set user specified headers to response object.
	for (const [name, value] of Object.entries(config.server.headers ?? {})) {
		if (value) res.setHeader(name, value);
	}

	// attempt to get static paths
	// if this fails, we have a bad URL match!
	const paramsAndPropsRes = await getParamsAndProps({
		mod,
		route,
		routeCache: env.routeCache,
		pathname: pathname,
		logging,
		ssr: config.output === 'server',
	});

	const options: SSROptions = {
		env,
		filePath,
		origin,
		preload: preloadedComponent,
		pathname,
		request,
		route,
	};

	// Route successfully matched! Render it.
	if (route.type === 'endpoint') {
		const result = await callEndpoint(options, logging);
		if (result.type === 'response') {
			if (result.response.headers.get('X-Astro-Response') === 'Not-Found') {
				const fourOhFourRoute = await matchRoute('/404', env, manifest);
				return handleRoute(
					fourOhFourRoute,
					new URL('/404', url),
					'/404',
					body,
					origin,
					env,
					manifest,
					req,
					res
				);
			}
			throwIfRedirectNotAllowed(result.response, config);
			await writeWebResponse(res, result.response);
		} else {
			let contentType = 'text/plain';
			// Dynamic routes don’t include `route.pathname`, so synthesize a path for these (e.g. 'src/pages/[slug].svg')
			const filepath =
				route.pathname ||
				route.segments.map((segment) => segment.map((p) => p.content).join('')).join('/');
			const computedMimeType = mime.getType(filepath);
			if (computedMimeType) {
				contentType = computedMimeType;
			}
			const response = new Response(Buffer.from(result.body, result.encoding), {
				status: 200,
				headers: {
					'Content-Type': `${contentType};charset=utf-8`,
				},
			});
			attachToResponse(response, result.cookies);
			await writeWebResponse(res, response);
		}
	} else {
		const result = await renderPage(options);
		throwIfRedirectNotAllowed(result, config);
		return await writeSSRResult(request, result, res);
	}
}
