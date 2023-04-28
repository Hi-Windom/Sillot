import type http from 'http';
import type { ErrorWithMetadata } from '../core/errors/index.js';
import type { ModuleLoader } from '../core/module-loader/index';

import { Readable } from 'stream';
import { getSetCookiesFromResponse } from '../core/cookies/index.js';
import { getViteErrorPayload } from '../core/errors/dev/index.js';
import notFoundTemplate from '../template/4xx.js';

export async function handle404Response(
	origin: string,
	req: http.IncomingMessage,
	res: http.ServerResponse
) {
	const pathname = decodeURI(new URL(origin + req.url).pathname);

	const html = notFoundTemplate({
		statusCode: 404,
		title: 'Not found',
		tabTitle: '404: Not Found',
		pathname,
	});
	writeHtmlResponse(res, 404, html);
}

export async function handle500Response(
	loader: ModuleLoader,
	res: http.ServerResponse,
	err: ErrorWithMetadata
) {
	res.on('close', async () =>
		setTimeout(async () => loader.webSocketSend(await getViteErrorPayload(err)), 200)
	);
	if (res.headersSent) {
		res.write(`<script type="module" src="/@vite/client"></script>`);
		res.end();
	} else {
		writeHtmlResponse(
			res,
			500,
			`<title>${err.name}</title><script type="module" src="/@vite/client"></script>`
		);
	}
}

export function writeHtmlResponse(res: http.ServerResponse, statusCode: number, html: string) {
	res.writeHead(statusCode, {
		'Content-Type': 'text/html; charset=utf-8',
		'Content-Length': Buffer.byteLength(html, 'utf-8'),
	});
	res.write(html);
	res.end();
}

export async function writeWebResponse(res: http.ServerResponse, webResponse: Response) {
	const { status, headers, body } = webResponse;

	// Attach any set-cookie headers added via Astro.cookies.set()
	const setCookieHeaders = Array.from(getSetCookiesFromResponse(webResponse));
	setCookieHeaders.forEach((cookie) => {
		headers.append('set-cookie', cookie);
	});

	const _headers = Object.fromEntries(headers.entries());

	// Undici 5.20.0+ includes a `getSetCookie` helper that returns an array of all the `set-cookies` headers.
	// Previously, `headers.entries()` would already have these merged, but it seems like this isn't the case anymore.
	if (headers.has('set-cookie')) {
		if ('getSetCookie' in headers && typeof headers.getSetCookie === 'function') {
			_headers['set-cookie'] = headers.getSetCookie();
		} else {
			_headers['set-cookie'] = headers.get('set-cookie')!;
		}
	}

	res.writeHead(status, _headers);
	if (body) {
		if (Symbol.for('astro.responseBody') in webResponse) {
			let stream = (webResponse as any)[Symbol.for('astro.responseBody')];
			for await (const chunk of stream) {
				res.write(chunk.toString());
			}
		} else if (body instanceof Readable) {
			body.pipe(res);
			return;
		} else if (typeof body === 'string') {
			res.write(body);
		} else {
			const reader = body.getReader();
			while (true) {
				const { done, value } = await reader.read();
				if (done) break;
				if (value) {
					res.write(value);
				}
			}
		}
	}
	res.end();
}

export async function writeSSRResult(
	webRequest: Request,
	webResponse: Response,
	res: http.ServerResponse
) {
	Reflect.set(webRequest, Symbol.for('astro.responseSent'), true);
	return writeWebResponse(res, webResponse);
}
