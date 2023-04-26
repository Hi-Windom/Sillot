/**
 * @vitest-environment happy-dom
 */
import 'fake-indexeddb/auto';

import { initPage } from '@affine/env/blocksuite';
import { __unstableSchemas, AffineSchemas } from '@blocksuite/blocks/models';
import { Workspace } from '@blocksuite/store';
import { renderHook } from '@testing-library/react';
import { useBlockSuitePageMeta } from '@toeverything/hooks/use-block-suite-page-meta';
import { useBlockSuiteWorkspaceHelper } from '@toeverything/hooks/use-block-suite-workspace-helper';
import { beforeEach, describe, expect, test } from 'vitest';

let blockSuiteWorkspace: Workspace;

beforeEach(() => {
  blockSuiteWorkspace = new Workspace({
    id: 'test',
  })
    .register(AffineSchemas)
    .register(__unstableSchemas);
  initPage(blockSuiteWorkspace.createPage('page0'));
  initPage(blockSuiteWorkspace.createPage('page1'));
  initPage(blockSuiteWorkspace.createPage('page2'));
});

describe('useBlockSuiteWorkspaceHelper', () => {
  test('should create page', () => {
    expect(blockSuiteWorkspace.meta.pageMetas.length).toBe(3);
    const helperHook = renderHook(() =>
      useBlockSuiteWorkspaceHelper(blockSuiteWorkspace)
    );
    const pageMetaHook = renderHook(() =>
      useBlockSuitePageMeta(blockSuiteWorkspace)
    );
    expect(pageMetaHook.result.current.length).toBe(3);
    expect(blockSuiteWorkspace.meta.pageMetas.length).toBe(3);
    const page = helperHook.result.current.createPage('page4');
    expect(page.id).toBe('page4');
    expect(blockSuiteWorkspace.meta.pageMetas.length).toBe(4);
    pageMetaHook.rerender();
    expect(pageMetaHook.result.current.length).toBe(4);
  });

  test('milestone', async () => {
    expect(blockSuiteWorkspace.meta.pageMetas.length).toBe(3);
    const helperHook = renderHook(() =>
      useBlockSuiteWorkspaceHelper(blockSuiteWorkspace)
    );
    await helperHook.result.current.markMilestone('test');
    expect(blockSuiteWorkspace.meta.pageMetas.length).toBe(3);
    initPage(helperHook.result.current.createPage('page4'));
    expect(blockSuiteWorkspace.meta.pageMetas.length).toBe(4);
    expect(await helperHook.result.current.listMilestone()).toHaveProperty(
      'test'
    );
    await helperHook.result.current.revertMilestone('test');
    expect(blockSuiteWorkspace.meta.pageMetas.length).toBe(3);
  });
});
