import type { SQLiteProvider } from '@affine/workspace/type';
import { __unstableSchemas, AffineSchemas } from '@blocksuite/blocks/models';
import type { Y as YType } from '@blocksuite/store';
import { uuidv4, Workspace } from '@blocksuite/store';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { createSQLiteProvider } from '../index';

const Y = Workspace.Y;

let id: string;
let workspace: Workspace;
let provider: SQLiteProvider;

let offlineYdoc: YType.Doc;

let triggerDBUpdate: ((_: string) => void) | null = null;

const mockedAddBlob = vi.fn();

vi.stubGlobal('window', {
  apis: {
    db: {
      getDoc: async (id: string) => {
        return Y.encodeStateAsUpdate(offlineYdoc);
      },
      applyDocUpdate: async (id: string, update: Uint8Array) => {
        Y.applyUpdate(offlineYdoc, update, 'sqlite');
      },
      getPersistedBlobs: async (id: string) => {
        // todo: may need to hack the way to get hash keys of blobs
        return [];
      },
      onDBUpdate: (fn: (id: string) => void) => {
        triggerDBUpdate = fn;
        return () => {
          triggerDBUpdate = null;
        };
      },
      addBlob: mockedAddBlob,
    } satisfies Partial<typeof window.apis.db>,
  },
});

vi.stubGlobal('environment', {
  isDesktop: true,
});

beforeEach(() => {
  id = uuidv4();
  workspace = new Workspace({
    id,
    isSSR: true,
  });
  workspace.register(AffineSchemas).register(__unstableSchemas);
  provider = createSQLiteProvider(workspace);
  offlineYdoc = new Y.Doc();
  offlineYdoc.getText('text').insert(0, 'sqlite-hello');
});

describe('SQLite provider', () => {
  test('connect', async () => {
    // on connect, the updates from sqlite should be sync'ed to the existing ydoc
    // and ydoc should be sync'ed back to sqlite
    // Workspace.Y.applyUpdate(workspace.doc);
    workspace.doc.getText('text').insert(0, 'mem-hello');

    expect(offlineYdoc.getText('text').toString()).toBe('sqlite-hello');

    await provider.connect();

    // depending on the nature of the sync, the data can be sync'ed in either direction
    const options = ['mem-hellosqlite-hello', 'sqlite-hellomem-hello'];
    const synced = options.filter(
      o => o === offlineYdoc.getText('text').toString()
    );
    expect(synced.length).toBe(1);
    expect(workspace.doc.getText('text').toString()).toBe(synced[0]);

    workspace.doc.getText('text').insert(0, 'world');

    // check if the data are sync'ed
    expect(offlineYdoc.getText('text').toString()).toBe('world' + synced[0]);
  });

  test('blobs will be synced to sqlite on connect', async () => {
    // mock bs.list
    const bin = new Uint8Array([1, 2, 3]);
    const blob = new Blob([bin]);
    workspace.blobs.list = vi.fn(async () => ['blob1']);
    workspace.blobs.get = vi.fn(async (key: string) => {
      return blob;
    });

    await provider.connect();
    await new Promise(resolve => setTimeout(resolve, 100));

    expect(mockedAddBlob).toBeCalledWith(id, 'blob1', bin);
  });

  test('on db update', async () => {
    vi.useFakeTimers();
    await provider.connect();

    offlineYdoc.getText('text').insert(0, 'sqlite-world');

    triggerDBUpdate?.(id);

    // not yet updated
    expect(workspace.doc.getText('text').toString()).toBe('sqlite-hello');

    // wait for the update to be sync'ed
    await vi.advanceTimersByTimeAsync(1000);

    expect(workspace.doc.getText('text').toString()).toBe(
      'sqlite-worldsqlite-hello'
    );
    vi.useRealTimers();
  });

  test('disconnect handlers', async () => {
    const offHandler = vi.fn();
    let handleUpdate = () => {};
    workspace.doc.on = (_: string, fn: () => void) => {
      handleUpdate = fn;
    };
    workspace.doc.off = offHandler;
    await provider.connect();

    provider.disconnect();

    expect(triggerDBUpdate).toBe(null);
    expect(offHandler).toBeCalledWith('update', handleUpdate);
  });
});
