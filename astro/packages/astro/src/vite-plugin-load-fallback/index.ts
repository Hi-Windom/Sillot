import nodeFs from 'fs';
import npath from 'path';
import slashify from 'slash';
import type * as vite from 'vite';

type NodeFileSystemModule = typeof nodeFs;

export interface LoadFallbackPluginParams {
	fs?: NodeFileSystemModule;
	root: URL;
}

export default function loadFallbackPlugin({
	fs,
	root,
}: LoadFallbackPluginParams): vite.Plugin[] | false {
	// Only add this plugin if a custom fs implementation is provided.
	// Also check for `fs.default` because `import * as fs from 'fs'` will
	// export as so, which only it's `.default` would === `nodeFs`.
	// @ts-expect-error check default
	if (!fs || fs === nodeFs || fs.default === nodeFs) {
		return false;
	}

	const tryLoadModule = async (id: string) => {
		try {
			// await is necessary for the catch
			return await fs.promises.readFile(cleanUrl(id), 'utf-8');
		} catch (e) {
			try {
				return await fs.promises.readFile(id, 'utf-8');
			} catch (e2) {
				try {
					const fullpath = new URL('.' + id, root);
					return await fs.promises.readFile(fullpath, 'utf-8');
				} catch (e3) {
					// Let fall through to the next
				}
			}
		}
	};

	return [
		{
			name: 'astro:load-fallback',
			enforce: 'post',
			async resolveId(id, parent) {
				// See if this can be loaded from our fs
				if (parent) {
					const candidateId = npath.posix.join(npath.posix.dirname(slashify(parent)), id);
					try {
						// Check to see if this file exists and is not a directory.
						const stats = await fs.promises.stat(candidateId);
						if (!stats.isDirectory()) {
							return candidateId;
						}
					} catch {}
				}
			},
			async load(id) {
				const source = await tryLoadModule(id);
				return source;
			},
		},
		{
			name: 'astro:load-fallback-hmr',
			enforce: 'pre',
			handleHotUpdate(context) {
				// Wrap context.read so it checks our filesystem first.
				const read = context.read;
				context.read = async () => {
					const source = await tryLoadModule(context.file);
					if (source) return source;
					return read.call(context);
				};
			},
		},
	];
}

const queryRE = /\?.*$/s;
const hashRE = /#.*$/s;

const cleanUrl = (url: string): string => url.replace(hashRE, '').replace(queryRE, '');
