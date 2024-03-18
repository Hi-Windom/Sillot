import { bold } from 'kleur/colors';
import type { APIContext, EndpointHandler } from '../../@types/astro.js';
import { REROUTABLE_STATUS_CODES, REROUTE_DIRECTIVE_HEADER } from '../../core/constants.js';
import { EndpointDidNotReturnAResponse } from '../../core/errors/errors-data.js';
import { AstroError } from '../../core/errors/errors.js';
import type { Logger } from '../../core/logger/core.js';

/** Renders an endpoint request to completion, returning the body. */
export async function renderEndpoint(
	mod: EndpointHandler,
	context: APIContext,
	ssr: boolean,
	logger: Logger
) {
	const { request, url } = context;

	const method = request.method.toUpperCase();
	// use the exact match on `method`, fallback to ALL
	const handler = mod[method] ?? mod['ALL'];
	if (!ssr && ssr === false && method !== 'GET') {
		logger.warn(
			'router',
			`${url.pathname} ${bold(
				method
			)} requests are not available for a static site. Update your config to \`output: 'server'\` or \`output: 'hybrid'\` to enable.`
		);
	}
	if (handler === undefined) {
		logger.warn(
			'router',
			`No API Route handler exists for the method "${method}" for the route "${url.pathname}".\n` +
				`Found handlers: ${Object.keys(mod)
					.map((exp) => JSON.stringify(exp))
					.join(', ')}\n` +
				('all' in mod
					? `One of the exported handlers is "all" (lowercase), did you mean to export 'ALL'?\n`
					: '')
		);
		// No handler matching the verb found, so this should be a
		// 404. Should be handled by 404.astro route if possible.
		return new Response(null, { status: 404 });
	}
	if (typeof handler !== 'function') {
		logger.error(
			'router',
			`The route "${
				url.pathname
			}" exports a value for the method "${method}", but it is of the type ${typeof handler} instead of a function.`
		);
		return new Response(null, { status: 500 });
	}

	const response = await handler.call(mod, context);

	if (!response || response instanceof Response === false) {
		throw new AstroError(EndpointDidNotReturnAResponse);
	}

	// Endpoints explicitly returning 404 or 500 response status should
	// NOT be subject to rerouting to 404.astro or 500.astro.
	if (REROUTABLE_STATUS_CODES.includes(response.status)) {
		// Only `Response.redirect` headers are immutable, therefore a `try..catch` is not necessary.
		// Note: `Response.redirect` can only be called with HTTP status codes: 301, 302, 303, 307, 308.
		// Source: https://developer.mozilla.org/en-US/docs/Web/API/Response/redirect_static#parameters
		response.headers.set(REROUTE_DIRECTIVE_HEADER, 'no');
	}

	return response;
}
