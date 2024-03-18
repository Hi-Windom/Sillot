import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizePath } from 'vite';
import type { AstroConfig, AstroSettings, RouteType } from '../@types/astro.js';
import { isServerLikeOutput } from '../prerender/utils.js';
import { SUPPORTED_MARKDOWN_FILE_EXTENSIONS } from './constants.js';
import type { ModuleLoader } from './module-loader/index.js';
import { prependForwardSlash, removeTrailingForwardSlash, slash } from './path.js';

/** Returns true if argument is an object of any prototype/class (but not null). */
export function isObject(value: unknown): value is Record<string, any> {
	return typeof value === 'object' && value != null;
}

/** Cross-realm compatible URL */
export function isURL(value: unknown): value is URL {
	return Object.prototype.toString.call(value) === '[object URL]';
}
/** Check if a file is a markdown file based on its extension */
export function isMarkdownFile(fileId: string, option?: { suffix?: string }): boolean {
	const _suffix = option?.suffix ?? '';
	for (let markdownFileExtension of SUPPORTED_MARKDOWN_FILE_EXTENSIONS) {
		if (fileId.endsWith(`${markdownFileExtension}${_suffix}`)) return true;
	}
	return false;
}

/** Wraps an object in an array. If an array is passed, ignore it. */
export function arraify<T>(target: T | T[]): T[] {
	return Array.isArray(target) ? target : [target];
}

export function padMultilineString(source: string, n = 2) {
	const lines = source.split(/\r?\n/);
	return lines.map((l) => ` `.repeat(n) + l).join(`\n`);
}

const STATUS_CODE_PAGES = new Set(['/404', '/500']);

/**
 * Get the correct output filename for a route, based on your config.
 * Handles both "/foo" and "foo" `name` formats.
 * Handles `/404` and `/` correctly.
 */
export function getOutputFilename(astroConfig: AstroConfig, name: string, type: RouteType) {
	if (type === 'endpoint') {
		return name;
	}
	if (name === '/' || name === '') {
		return path.posix.join(name, 'index.html');
	}
	if (astroConfig.build.format === 'file' || STATUS_CODE_PAGES.has(name)) {
		return `${removeTrailingForwardSlash(name || 'index')}.html`;
	}
	return path.posix.join(name, 'index.html');
}

/** is a specifier an npm package? */
export function parseNpmName(
	spec: string
): { scope?: string; name: string; subpath?: string } | undefined {
	// not an npm package
	if (!spec || spec[0] === '.' || spec[0] === '/') return undefined;

	let scope: string | undefined;
	let name = '';

	let parts = spec.split('/');
	if (parts[0][0] === '@') {
		scope = parts[0];
		name = parts.shift() + '/';
	}
	name += parts.shift();

	let subpath = parts.length ? `./${parts.join('/')}` : undefined;

	return {
		scope,
		name,
		subpath,
	};
}

/**
 * Convert file URL to ID for viteServer.moduleGraph.idToModuleMap.get(:viteID)
 * Format:
 *   Linux/Mac:  /Users/astro/code/my-project/src/pages/index.astro
 *   Windows:    C:/Users/astro/code/my-project/src/pages/index.astro
 */
export function viteID(filePath: URL): string {
	return slash(fileURLToPath(filePath) + filePath.search);
}

export const VALID_ID_PREFIX = `/@id/`;
export const NULL_BYTE_PLACEHOLDER = `__x00__`;

// Strip valid id prefix and replace null byte placeholder. Both are prepended to resolved ids
// as they are not valid browser import specifiers (by the Vite's importAnalysis plugin)
export function unwrapId(id: string): string {
	return id.startsWith(VALID_ID_PREFIX)
		? id.slice(VALID_ID_PREFIX.length).replace(NULL_BYTE_PLACEHOLDER, '\0')
		: id;
}

export function resolvePages(config: AstroConfig) {
	return new URL('./pages', config.srcDir);
}

function isInPagesDir(file: URL, config: AstroConfig): boolean {
	const pagesDir = resolvePages(config);
	return file.toString().startsWith(pagesDir.toString());
}

function isInjectedRoute(file: URL, settings: AstroSettings) {
	let fileURL = file.toString();
	for (const route of settings.resolvedInjectedRoutes) {
		if (route.resolvedEntryPoint && fileURL === route.resolvedEntryPoint.toString()) return true;
	}
	return false;
}

function isPublicRoute(file: URL, config: AstroConfig): boolean {
	const pagesDir = resolvePages(config);
	const parts = file.toString().replace(pagesDir.toString(), '').split('/').slice(1);
	for (const part of parts) {
		if (part.startsWith('_')) return false;
	}
	return true;
}

function endsWithPageExt(file: URL, settings: AstroSettings): boolean {
	for (const ext of settings.pageExtensions) {
		if (file.toString().endsWith(ext)) return true;
	}
	return false;
}

export function isPage(file: URL, settings: AstroSettings): boolean {
	if (!isInPagesDir(file, settings.config) && !isInjectedRoute(file, settings)) return false;
	if (!isPublicRoute(file, settings.config)) return false;
	return endsWithPageExt(file, settings);
}

export function isEndpoint(file: URL, settings: AstroSettings): boolean {
	if (!isInPagesDir(file, settings.config)) return false;
	if (!isPublicRoute(file, settings.config)) return false;
	return !endsWithPageExt(file, settings);
}

export function isModeServerWithNoAdapter(settings: AstroSettings): boolean {
	return isServerLikeOutput(settings.config) && !settings.adapter;
}

export function relativeToSrcDir(config: AstroConfig, idOrUrl: URL | string) {
	let id: string;
	if (typeof idOrUrl !== 'string') {
		id = unwrapId(viteID(idOrUrl));
	} else {
		id = idOrUrl;
	}
	return id.slice(slash(fileURLToPath(config.srcDir)).length);
}

export function rootRelativePath(
	root: URL,
	idOrUrl: URL | string,
	shouldPrependForwardSlash = true
) {
	let id: string;
	if (typeof idOrUrl !== 'string') {
		id = unwrapId(viteID(idOrUrl));
	} else {
		id = idOrUrl;
	}
	const normalizedRoot = normalizePath(fileURLToPath(root));
	if (id.startsWith(normalizedRoot)) {
		id = id.slice(normalizedRoot.length);
	}
	return shouldPrependForwardSlash ? prependForwardSlash(id) : id;
}

export function emoji(char: string, fallback: string) {
	return process.platform !== 'win32' ? char : fallback;
}

/**
 * Simulate Vite's resolve and import analysis so we can import the id as an URL
 * through a script tag or a dynamic import as-is.
 */
// NOTE: `/@id/` should only be used when the id is fully resolved
export async function resolveIdToUrl(loader: ModuleLoader, id: string, root?: URL) {
	let resultId = await loader.resolveId(id, undefined);
	// Try resolve jsx to tsx
	if (!resultId && id.endsWith('.jsx')) {
		resultId = await loader.resolveId(id.slice(0, -4), undefined);
	}
	if (!resultId) {
		return VALID_ID_PREFIX + id;
	}
	if (path.isAbsolute(resultId)) {
		const normalizedRoot = root && normalizePath(fileURLToPath(root));
		// Convert to root-relative path if path is inside root
		if (normalizedRoot && resultId.startsWith(normalizedRoot)) {
			return resultId.slice(normalizedRoot.length - 1);
		} else {
			return '/@fs' + prependForwardSlash(resultId);
		}
	}
	return VALID_ID_PREFIX + resultId;
}

export function resolveJsToTs(filePath: string) {
	if (filePath.endsWith('.jsx') && !fs.existsSync(filePath)) {
		const tryPath = filePath.slice(0, -4) + '.tsx';
		if (fs.existsSync(tryPath)) {
			return tryPath;
		}
	}
	return filePath;
}

/**
 * Resolve the hydration paths so that it can be imported in the client
 */
export function resolvePath(specifier: string, importer: string) {
	if (specifier.startsWith('.')) {
		const absoluteSpecifier = path.resolve(path.dirname(importer), specifier);
		return resolveJsToTs(normalizePath(absoluteSpecifier));
	} else {
		return specifier;
	}
}

/**
 * Set a default NODE_ENV so Vite doesn't set an incorrect default when loading the Astro config
 */
export function ensureProcessNodeEnv(defaultNodeEnv: string) {
	if (!process.env.NODE_ENV) {
		process.env.NODE_ENV = defaultNodeEnv;
	}
}
