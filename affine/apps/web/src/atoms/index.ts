import { DebugLogger } from '@affine/debug';
import { atomWithSyncStorage } from '@affine/jotai';
import type { RootWorkspaceMetadata } from '@affine/workspace/atom';
import {
  rootCurrentEditorAtom,
  rootCurrentPageIdAtom,
  rootCurrentWorkspaceIdAtom,
  rootWorkspacesMetadataAtom,
} from '@affine/workspace/atom';
import { WorkspaceFlavour } from '@affine/workspace/type';
import type { Page } from '@blocksuite/store';
import { atom } from 'jotai';

import { WorkspacePlugins } from '../plugins';

const logger = new DebugLogger('web:atoms');

// workspace necessary atoms
/**
 * @deprecated Use `rootCurrentWorkspaceIdAtom` directly instead.
 */
export const currentWorkspaceIdAtom = rootCurrentWorkspaceIdAtom;

// todo(himself65): move this to the workspace package
rootWorkspacesMetadataAtom.onMount = setAtom => {
  function createFirst(): RootWorkspaceMetadata[] {
    const Plugins = Object.values(WorkspacePlugins).sort(
      (a, b) => a.loadPriority - b.loadPriority
    );

    return Plugins.flatMap(Plugin => {
      return Plugin.Events['app:init']?.().map(
        id =>
          ({
            id,
            flavour: Plugin.flavour,
          } satisfies RootWorkspaceMetadata)
      );
    }).filter((ids): ids is RootWorkspaceMetadata => !!ids);
  }

  setAtom(metadata => {
    if (metadata.length === 0) {
      const newMetadata = createFirst();
      logger.info('create first workspace', newMetadata);
      return newMetadata;
    }
    return metadata;
  });

  if (environment.isDesktop) {
    window.apis.workspace.list().then(workspaceIDs => {
      const newMetadata = workspaceIDs.map(w => ({
        id: w,
        flavour: WorkspaceFlavour.LOCAL,
      }));
      setAtom(metadata => {
        return [
          ...metadata,
          ...newMetadata.filter(m => !metadata.find(m2 => m2.id === m.id)),
        ];
      });
    });
  }
};

/**
 * @deprecated Use `rootCurrentPageIdAtom` directly instead.
 */
export const currentPageIdAtom = rootCurrentPageIdAtom;
/**
 * @deprecated Use `rootCurrentEditorAtom` directly instead.
 */
export const currentEditorAtom = rootCurrentEditorAtom;

// modal atoms
export const openWorkspacesModalAtom = atom(false);
export const openCreateWorkspaceModalAtom = atom(false);
export const openQuickSearchModalAtom = atom(false);

export { workspacesAtom } from './root';

type View = { id: string; mode: 'page' | 'edgeless' };

export type WorkspaceRecentViews = Record<string, View[]>;

export const workspaceRecentViewsAtom =
  atomWithSyncStorage<WorkspaceRecentViews>('recentViews', {});

export type PreferredModeRecord = Record<Page['id'], 'page' | 'edgeless'>;
export const workspacePreferredModeAtom =
  atomWithSyncStorage<PreferredModeRecord>('preferredMode', {});

export const workspaceRecentViresWriteAtom = atom<null, [string, View], View[]>(
  null,
  (get, set, id, value) => {
    const record = get(workspaceRecentViewsAtom);
    if (Array.isArray(record[id])) {
      const idx = record[id].findIndex(view => view.id === value.id);
      if (idx !== -1) {
        record[id].splice(idx, 1);
      }
      record[id] = [value, ...record[id]];
    } else {
      record[id] = [value];
    }

    record[id] = record[id].slice(0, 3);
    set(workspaceRecentViewsAtom, { ...record });
    return record[id];
  }
);
