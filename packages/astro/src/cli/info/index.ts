import { execSync } from 'node:child_process';
import { arch, platform } from 'node:os';
/* eslint-disable no-console */
import * as colors from 'kleur/colors';
import prompts from 'prompts';
import type yargs from 'yargs-parser';
import type { AstroConfig, AstroUserConfig } from '../../@types/astro.js';
import { resolveConfig } from '../../core/config/index.js';
import { ASTRO_VERSION } from '../../core/constants.js';
import { apply as applyPolyfill } from '../../core/polyfill.js';
import { flagsToAstroInlineConfig } from '../flags.js';

interface InfoOptions {
	flags: yargs.Arguments;
}

export async function getInfoOutput({
	userConfig,
	print,
}: {
	userConfig: AstroUserConfig | AstroConfig;
	print: boolean;
}): Promise<string> {
	const rows: Array<[string, string | string[]]> = [
		['Astro', `v${ASTRO_VERSION}`],
		['Node', process.version],
		['System', getSystem()],
		['Package Manager', getPackageManager()],
	];

	try {
		rows.push(['Output', userConfig.output ?? 'static']);
		rows.push(['Adapter', userConfig.adapter?.name ?? 'none']);
		const integrations = (userConfig?.integrations ?? [])
			.filter(Boolean)
			.flat()
			.map((i: any) => i?.name)
			.filter(Boolean);
		rows.push(['Integrations', integrations.length > 0 ? integrations : 'none']);
	} catch {}

	let output = '';
	for (const [label, value] of rows) {
		output += printRow(label, value, print);
	}

	return output.trim();
}

export async function printInfo({ flags }: InfoOptions) {
	applyPolyfill();
	const { userConfig } = await resolveConfig(flagsToAstroInlineConfig(flags), 'info');
	const output = await getInfoOutput({ userConfig, print: true });

	await copyToClipboard(output);
}

async function copyToClipboard(text: string) {
	const system = platform();
	let command = '';
	if (system === 'darwin') {
		command = 'pbcopy';
	} else if (system === 'win32') {
		command = 'clip';
	} else {
		try {
			// Unix: check if `xclip` is installed
			const output = execSync('which xclip', { encoding: 'utf8' });
			if (output[0] !== '/') {
				// Did not find a path for xclip, bail out!
				return;
			}
			command = 'xclip -sel clipboard -l 1';
		} catch (e) {
			// Did not find xclip, bail out!
			return;
		}
	}

	console.log();
	const { shouldCopy } = await prompts({
		type: 'confirm',
		name: 'shouldCopy',
		message: 'Copy to clipboard?',
		initial: true,
	});
	if (!shouldCopy) return;

	try {
		execSync(command, {
			input: text.trim(),
			encoding: 'utf8',
		});
	} catch (e) {
		console.error(
			colors.red(`\nSorry, something went wrong!`) + ` Please copy the text above manually.`
		);
	}
}

const PLATFORM_TO_OS: Partial<Record<ReturnType<typeof platform>, string>> = {
	darwin: 'macOS',
	win32: 'Windows',
	linux: 'Linux',
};

function getSystem() {
	const system = PLATFORM_TO_OS[platform()] ?? platform();
	return `${system} (${arch()})`;
}

function getPackageManager() {
	if (!process.env.npm_config_user_agent) {
		return 'unknown';
	}
	const specifier = process.env.npm_config_user_agent.split(' ')[0];
	const name = specifier.substring(0, specifier.lastIndexOf('/'));
	return name === 'npminstall' ? 'cnpm' : name;
}

const MAX_PADDING = 25;
function printRow(label: string, value: string | string[], print: boolean) {
	const padding = MAX_PADDING - label.length;
	const [first, ...rest] = Array.isArray(value) ? value : [value];
	let plaintext = `${label}${' '.repeat(padding)}${first}`;
	let richtext = `${colors.bold(label)}${' '.repeat(padding)}${colors.green(first)}`;
	if (rest.length > 0) {
		for (const entry of rest) {
			plaintext += `\n${' '.repeat(MAX_PADDING)}${entry}`;
			richtext += `\n${' '.repeat(MAX_PADDING)}${colors.green(entry)}`;
		}
	}
	plaintext += '\n';
	if (print) {
		console.log(richtext);
	}
	return plaintext;
}
