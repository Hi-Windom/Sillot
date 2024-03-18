import type { APIContext, MiddlewareHandler, Params } from '../../@types/astro.js';
import {
	computeCurrentLocale,
	computePreferredLocale,
	computePreferredLocaleList,
} from '../../i18n/utils.js';
import { ASTRO_VERSION } from '../constants.js';
import { AstroCookies } from '../cookies/index.js';
import { AstroError, AstroErrorData } from '../errors/index.js';
import { sequence } from './sequence.js';

const clientAddressSymbol = Symbol.for('astro.clientAddress');
const clientLocalsSymbol = Symbol.for('astro.locals');

function defineMiddleware(fn: MiddlewareHandler) {
	return fn;
}

/**
 * Payload for creating a context to be passed to Astro middleware
 */
export type CreateContext = {
	/**
	 * The incoming request
	 */
	request: Request;
	/**
	 * Optional parameters
	 */
	params?: Params;

	/**
	 * A list of locales that are supported by the user
	 */
	userDefinedLocales?: string[];
};

/**
 * Creates a context to be passed to Astro middleware `onRequest` function.
 */
function createContext({
	request,
	params = {},
	userDefinedLocales = [],
}: CreateContext): APIContext {
	let preferredLocale: string | undefined = undefined;
	let preferredLocaleList: string[] | undefined = undefined;
	let currentLocale: string | undefined = undefined;
	const url = new URL(request.url);
	const route = url.pathname;

	return {
		cookies: new AstroCookies(request),
		request,
		params,
		site: undefined,
		generator: `Astro v${ASTRO_VERSION}`,
		props: {},
		redirect(path, status) {
			return new Response(null, {
				status: status || 302,
				headers: {
					Location: path,
				},
			});
		},
		get preferredLocale(): string | undefined {
			return (preferredLocale ??= computePreferredLocale(request, userDefinedLocales));
		},
		get preferredLocaleList(): string[] | undefined {
			return (preferredLocaleList ??= computePreferredLocaleList(request, userDefinedLocales));
		},
		get currentLocale(): string | undefined {
			return (currentLocale ??= computeCurrentLocale(route, userDefinedLocales));
		},
		url,
		get clientAddress() {
			if (clientAddressSymbol in request) {
				return Reflect.get(request, clientAddressSymbol) as string;
			}
			throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
		},
		get locals() {
			let locals = Reflect.get(request, clientLocalsSymbol);
			if (locals === undefined) {
				locals = {};
				Reflect.set(request, clientLocalsSymbol, locals);
			}
			if (typeof locals !== 'object') {
				throw new AstroError(AstroErrorData.LocalsNotAnObject);
			}
			return locals;
		},
		// We define a custom property, so we can check the value passed to locals
		set locals(val) {
			if (typeof val !== 'object') {
				throw new AstroError(AstroErrorData.LocalsNotAnObject);
			} else {
				Reflect.set(request, clientLocalsSymbol, val);
			}
		},
	};
}

/**
 * Checks whether the passed `value` is serializable.
 *
 * A serializable value contains plain values. For example, `Proxy`, `Set`, `Map`, functions, etc.
 * are not accepted because they can't be serialized.
 */
function isLocalsSerializable(value: unknown): boolean {
	let type = typeof value;
	let plainObject = true;
	if (type === 'object' && isPlainObject(value)) {
		for (const [, nestedValue] of Object.entries(value)) {
			if (!isLocalsSerializable(nestedValue)) {
				plainObject = false;
				break;
			}
		}
	} else {
		plainObject = false;
	}
	let result =
		value === null ||
		type === 'string' ||
		type === 'number' ||
		type === 'boolean' ||
		Array.isArray(value) ||
		plainObject;

	return result;
}

/**
 *
 * From [redux-toolkit](https://github.com/reduxjs/redux-toolkit/blob/master/packages/toolkit/src/isPlainObject.ts)
 *
 * Returns true if the passed value is "plain" object, i.e. an object whose
 * prototype is the root `Object.prototype`. This includes objects created
 * using object literals, but not for instance for class instances.
 */
function isPlainObject(value: unknown): value is object {
	if (typeof value !== 'object' || value === null) return false;

	let proto = Object.getPrototypeOf(value);
	if (proto === null) return true;

	let baseProto = proto;
	while (Object.getPrototypeOf(baseProto) !== null) {
		baseProto = Object.getPrototypeOf(baseProto);
	}

	return proto === baseProto;
}

/**
 * It attempts to serialize `value` and return it as a string.
 *
 * ## Errors
 *  If the `value` is not serializable if the function will throw a runtime error.
 *
 * Something is **not serializable** when it contains properties/values like functions, `Map`, `Set`, `Date`,
 * and other types that can't be made a string.
 *
 * @param value
 */
function trySerializeLocals(value: unknown) {
	if (isLocalsSerializable(value)) {
		return JSON.stringify(value);
	} else {
		throw new Error("The passed value can't be serialized.");
	}
}

// NOTE: this export must export only the functions that will be exposed to user-land as officials APIs
export { createContext, defineMiddleware, sequence, trySerializeLocals };
