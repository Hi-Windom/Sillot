import type { Context } from './context.js';

import fs from 'node:fs';
import path from 'node:path';
import { color } from '@astrojs/cli-kit';
import { downloadTemplate } from 'giget';
import { error, info, title } from '../messages.js';

export async function template(
	ctx: Pick<Context, 'template' | 'prompt' | 'yes' | 'dryRun' | 'exit' | 'tasks'>
) {
	if (!ctx.template && ctx.yes) ctx.template = 'basics';

	if (ctx.template) {
		await info('tmpl', `Using ${color.reset(ctx.template)}${color.dim(' as project template')}`);
	} else {
		const { template: tmpl } = await ctx.prompt({
			name: 'template',
			type: 'select',
			label: title('tmpl'),
			message: 'How would you like to start your new project?',
			initial: 'basics',
			choices: [
				{ value: 'basics', label: 'Include sample files', hint: '(recommended)' },
				{ value: 'blog', label: 'Use blog template' },
				{ value: 'minimal', label: 'Empty' },
			],
		});
		ctx.template = tmpl;
	}

	if (ctx.dryRun) {
		await info('--dry-run', `Skipping template copying`);
	} else if (ctx.template) {
		ctx.tasks.push({
			pending: 'Template',
			start: 'Template copying...',
			end: 'Template copied',
			while: () =>
				copyTemplate(ctx.template!, ctx as Context).catch((e) => {
					if (e instanceof Error) {
						error('error', e.message);
						process.exit(1);
					} else {
						error('error', 'Unable to clone template.');
						process.exit(1);
					}
				}),
		});
	} else {
		ctx.exit(1);
	}
}

// some files are only needed for online editors when using astro.new. Remove for create-astro installs.
const FILES_TO_REMOVE = ['CHANGELOG.md', '.codesandbox'];
const FILES_TO_UPDATE = {
	'package.json': (file: string, overrides: { name: string }) =>
		fs.promises.readFile(file, 'utf-8').then((value) => {
			// Match first indent in the file or fallback to `\t`
			const indent = /(^\s+)/m.exec(value)?.[1] ?? '\t';
			fs.promises.writeFile(
				file,
				JSON.stringify(
					Object.assign(JSON.parse(value), Object.assign(overrides, { private: undefined })),
					null,
					indent
				),
				'utf-8'
			);
		}),
};

export function getTemplateTarget(tmpl: string, ref = 'latest') {
	if (tmpl.startsWith('starlight')) {
		const [, starter = 'basics'] = tmpl.split('/');
		return `withastro/starlight/examples/${starter}`;
	}
	const isThirdParty = tmpl.includes('/');
	if (isThirdParty) return tmpl;
	return `github:withastro/astro/examples/${tmpl}#${ref}`;
}

export default async function copyTemplate(tmpl: string, ctx: Context) {
	const templateTarget = getTemplateTarget(tmpl, ctx.ref);

	// Copy
	if (!ctx.dryRun) {
		try {
			await downloadTemplate(templateTarget, {
				force: true,
				provider: 'github',
				cwd: ctx.cwd,
				dir: '.',
			});
		} catch (err: any) {
			// Only remove the directory if it's most likely created by us.
			if (ctx.cwd !== '.' && ctx.cwd !== './' && !ctx.cwd.startsWith('../')) {
				try {
					fs.rmdirSync(ctx.cwd);
				} catch (_) {
					// Ignore any errors from removing the directory,
					// make sure we throw and display the original error.
				}
			}

			if (err.message.includes('404')) {
				throw new Error(`Template ${color.reset(tmpl)} ${color.dim('does not exist!')}`);
			} else {
				throw new Error(err.message);
			}
		}

		// It's possible the repo exists (ex. `withastro/astro`),
		// But the template route is invalid (ex. `withastro/astro/examples/DNE`).
		// `giget` doesn't throw for this case,
		// so check if the directory is still empty as a heuristic.
		if (fs.readdirSync(ctx.cwd).length === 0) {
			throw new Error(`Template ${color.reset(tmpl)} ${color.dim('is empty!')}`);
		}

		// Post-process in parallel
		const removeFiles = FILES_TO_REMOVE.map(async (file) => {
			const fileLoc = path.resolve(path.join(ctx.cwd, file));
			if (fs.existsSync(fileLoc)) {
				return fs.promises.rm(fileLoc, { recursive: true });
			}
		});
		const updateFiles = Object.entries(FILES_TO_UPDATE).map(async ([file, update]) => {
			const fileLoc = path.resolve(path.join(ctx.cwd, file));
			if (fs.existsSync(fileLoc)) {
				return update(fileLoc, { name: ctx.projectName! });
			}
		});

		await Promise.all([...removeFiles, ...updateFiles]);
	}
}
