import type { MarkdownRenderingOptions } from '@astrojs/markdown-remark';
import type {
	AstroGlobal,
	AstroGlobalPartial,
	Params,
	Props,
	RuntimeMode,
	SSRElement,
	SSRLoadedRenderer,
	SSRResult,
} from '../../@types/astro';
import {
	renderSlotToString,
	stringifyChunk,
	type ComponentSlots,
} from '../../runtime/server/index.js';
import { renderJSX } from '../../runtime/server/jsx.js';
import { AstroCookies } from '../cookies/index.js';
import { AstroError, AstroErrorData } from '../errors/index.js';
import { warn, type LogOptions } from '../logger/core.js';

const clientAddressSymbol = Symbol.for('astro.clientAddress');
const responseSentSymbol = Symbol.for('astro.responseSent');

function onlyAvailableInSSR(name: 'Astro.redirect') {
	return function _onlyAvailableInSSR() {
		switch (name) {
			case 'Astro.redirect':
				throw new AstroError(AstroErrorData.StaticRedirectNotAvailable);
		}
	};
}

export interface CreateResultArgs {
	adapterName: string | undefined;
	ssr: boolean;
	logging: LogOptions;
	origin: string;
	markdown: MarkdownRenderingOptions;
	mode: RuntimeMode;
	params: Params;
	pathname: string;
	props: Props;
	renderers: SSRLoadedRenderer[];
	resolve: (s: string) => Promise<string>;
	site: string | undefined;
	links?: Set<SSRElement>;
	scripts?: Set<SSRElement>;
	styles?: Set<SSRElement>;
	componentMetadata?: SSRResult['componentMetadata'];
	request: Request;
	status: number;
}

function getFunctionExpression(slot: any) {
	if (!slot) return;
	if (slot.expressions?.length !== 1) return;
	return slot.expressions[0] as (...args: any[]) => any;
}

class Slots {
	#result: SSRResult;
	#slots: ComponentSlots | null;
	#loggingOpts: LogOptions;

	constructor(result: SSRResult, slots: ComponentSlots | null, logging: LogOptions) {
		this.#result = result;
		this.#slots = slots;
		this.#loggingOpts = logging;

		if (slots) {
			for (const key of Object.keys(slots)) {
				if ((this as any)[key] !== undefined) {
					throw new AstroError({
						...AstroErrorData.ReservedSlotName,
						message: AstroErrorData.ReservedSlotName.message(key),
					});
				}
				Object.defineProperty(this, key, {
					get() {
						return true;
					},
					enumerable: true,
				});
			}
		}
	}

	public has(name: string) {
		if (!this.#slots) return false;
		return Boolean(this.#slots[name]);
	}

	public async render(name: string, args: any[] = []) {
		if (!this.#slots || !this.has(name)) return;

		const result = this.#result;
		if (!Array.isArray(args)) {
			warn(
				this.#loggingOpts,
				'Astro.slots.render',
				`Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
			);
		} else if (args.length > 0) {
			const slotValue = this.#slots[name];
			const component = typeof slotValue === 'function' ? await slotValue(result) : await slotValue;

			// Astro
			const expression = getFunctionExpression(component);
			if (expression) {
				const slot = () => expression(...args);
				return await renderSlotToString(result, slot).then((res) =>
					res != null ? String(res) : res
				);
			}
			// JSX
			if (typeof component === 'function') {
				return await renderJSX(result, (component as any)(...args)).then((res) =>
					res != null ? String(res) : res
				);
			}
		}

		const content = await renderSlotToString(result, this.#slots[name]);
		const outHTML = stringifyChunk(result, content);

		return outHTML;
	}
}

let renderMarkdown: any = null;

export function createResult(args: CreateResultArgs): SSRResult {
	const { markdown, params, pathname, renderers, request, resolve } = args;

	const url = new URL(request.url);
	const headers = new Headers();
	headers.set('Content-Type', 'text/html');
	const response: ResponseInit = {
		status: args.status,
		statusText: 'OK',
		headers,
	};

	// Make headers be read-only
	Object.defineProperty(response, 'headers', {
		value: response.headers,
		enumerable: true,
		writable: false,
	});

	// Astro.cookies is defined lazily to avoid the cost on pages that do not use it.
	let cookies: AstroCookies | undefined = undefined;
	let componentMetadata = args.componentMetadata ?? new Map();

	// Create the result object that will be passed into the render function.
	// This object starts here as an empty shell (not yet the result) but then
	// calling the render() function will populate the object with scripts, styles, etc.
	const result: SSRResult = {
		styles: args.styles ?? new Set<SSRElement>(),
		scripts: args.scripts ?? new Set<SSRElement>(),
		links: args.links ?? new Set<SSRElement>(),
		componentMetadata,
		propagators: new Map(),
		extraHead: [],
		scope: 0,
		cookies,
		/** This function returns the `Astro` faux-global */
		createAstro(
			astroGlobal: AstroGlobalPartial,
			props: Record<string, any>,
			slots: Record<string, any> | null
		) {
			const astroSlots = new Slots(result, slots, args.logging);

			const Astro: AstroGlobal = {
				// @ts-expect-error
				__proto__: astroGlobal,
				get clientAddress() {
					if (!(clientAddressSymbol in request)) {
						if (args.adapterName) {
							throw new AstroError({
								...AstroErrorData.ClientAddressNotAvailable,
								message: AstroErrorData.ClientAddressNotAvailable.message(args.adapterName),
							});
						} else {
							throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
						}
					}

					return Reflect.get(request, clientAddressSymbol) as string;
				},
				get cookies() {
					if (cookies) {
						return cookies;
					}
					cookies = new AstroCookies(request);
					result.cookies = cookies;
					return cookies;
				},
				params,
				props,
				request,
				url,
				redirect: args.ssr
					? (path, status) => {
							// If the response is already sent, error as we cannot proceed with the redirect.
							if ((request as any)[responseSentSymbol]) {
								throw new AstroError({
									...AstroErrorData.ResponseSentError,
								});
							}

							return new Response(null, {
								status: status || 302,
								headers: {
									Location: path,
								},
							});
					  }
					: onlyAvailableInSSR('Astro.redirect'),
				response: response as AstroGlobal['response'],
				slots: astroSlots as unknown as AstroGlobal['slots'],
			};

			Object.defineProperty(Astro, '__renderMarkdown', {
				// Ensure this API is not exposed to users
				enumerable: false,
				writable: false,
				// TODO: Remove this hole "Deno" logic once our plugin gets Deno support
				value: async function (content: string, opts: MarkdownRenderingOptions) {
					// @ts-expect-error
					if (typeof Deno !== 'undefined') {
						throw new Error('Markdown is not supported in Deno SSR');
					}

					if (!renderMarkdown) {
						// The package is saved in this variable because Vite is too smart
						// and will try to inline it in buildtime
						let astroRemark = '@astrojs/';
						astroRemark += 'markdown-remark';

						renderMarkdown = (await import(astroRemark)).renderMarkdown;
					}

					const { code } = await renderMarkdown(content, { ...markdown, ...(opts ?? {}) });
					return code;
				},
			});

			return Astro;
		},
		resolve,
		_metadata: {
			renderers,
			pathname,
			hasHydrationScript: false,
			hasRenderedHead: false,
			hasDirectives: new Set(),
			headInTree: false,
		},
		response,
	};

	return result;
}
