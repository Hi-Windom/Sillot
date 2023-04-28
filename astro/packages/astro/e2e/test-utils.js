import { test as testBase, expect } from '@playwright/test';
import { loadFixture as baseLoadFixture } from '../test/test-utils.js';

export const isWindows = process.platform === 'win32';

export function loadFixture(inlineConfig) {
	if (!inlineConfig || !inlineConfig.root)
		throw new Error("Must provide { root: './fixtures/...' }");

	// resolve the relative root (i.e. "./fixtures/tailwindcss") to a full filepath
	// without this, the main `loadFixture` helper will resolve relative to `packages/astro/test`
	return baseLoadFixture({
		...inlineConfig,
		root: new URL(inlineConfig.root, import.meta.url).toString(),
	});
}

export function testFactory(inlineConfig) {
	let fixture;

	const test = testBase.extend({
		astro: async ({}, use) => {
			fixture = fixture || (await loadFixture(inlineConfig));
			await use(fixture);
		},
	});

	test.afterEach(() => {
		fixture.resetAllFiles();
	});

	return test;
}

/**
 *
 * @param {string} page
 * @returns {Promise<{message: string, hint: string, absoluteFileLocation: string, fileLocation: string}>}
 */
export async function getErrorOverlayContent(page) {
	const overlay = await page.waitForSelector('vite-error-overlay', {
		strict: true,
		timeout: 10 * 1000,
	});

	expect(overlay).toBeTruthy();

	const message = await overlay.$$eval('#message-content', (m) => m[0].textContent);
	const hint = await overlay.$$eval('#hint-content', (m) => m[0].textContent);
	const [absoluteFileLocation, fileLocation] = await overlay.$$eval('#code header h2', (m) => [
		m[0].title,
		m[0].textContent,
	]);
	return { message, hint, absoluteFileLocation, fileLocation };
}

/**
 * @param {import('@playwright/test').Locator} el
 * @returns {Promise<string>}
 */
export async function getColor(el) {
	return await el.evaluate((e) => getComputedStyle(e).color);
}
