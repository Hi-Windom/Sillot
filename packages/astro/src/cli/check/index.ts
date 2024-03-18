import path from 'node:path';
import type { Arguments } from 'yargs-parser';
import { ensureProcessNodeEnv } from '../../core/util.js';
import { createLoggerFromFlags, flagsToAstroInlineConfig } from '../flags.js';
import { getPackage } from '../install-package.js';

export async function check(flags: Arguments) {
	ensureProcessNodeEnv('production');
	const logger = createLoggerFromFlags(flags);
	const getPackageOpts = { skipAsk: flags.yes || flags.y, cwd: flags.root };
	const checkPackage = await getPackage<typeof import('@astrojs/check')>(
		'@astrojs/check',
		logger,
		getPackageOpts,
		['typescript']
	);
	const typescript = await getPackage('typescript', logger, getPackageOpts);

	if (!checkPackage || !typescript) {
		logger.error(
			'check',
			'The `@astrojs/check` and `typescript` packages are required for this command to work. Please manually install them into your project and try again.'
		);
		return;
	}

	// Run sync before check to make sure types are generated.
	// NOTE: In the future, `@astrojs/check` can expose a `before lint` hook so that this works during `astro check --watch` too.
	// For now, we run this once as usually `astro check --watch` is ran alongside `astro dev` which also calls `astro sync`.
	const { default: sync } = await import('../../core/sync/index.js');
	const inlineConfig = flagsToAstroInlineConfig(flags);
	const exitCode = await sync(inlineConfig);
	if (exitCode !== 0) {
		process.exit(exitCode);
	}

	const { check: checker, parseArgsAsCheckConfig } = checkPackage;

	const config = parseArgsAsCheckConfig(process.argv);

	logger.info('check', `Getting diagnostics for Astro files in ${path.resolve(config.root)}...`);
	return await checker(config);
}
