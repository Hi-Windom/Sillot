import { editorContainerModuleAtom } from '@affine/jotai';
import type { BlockHub } from '@blocksuite/blocks';
import type { EditorContainer } from '@blocksuite/editor';
import { assertExists } from '@blocksuite/global/utils';
import type { Page } from '@blocksuite/store';
import { useAtomValue } from 'jotai';
import type { CSSProperties, ReactElement } from 'react';
import { memo, Suspense, useCallback, useEffect, useRef } from 'react';
import type { FallbackProps } from 'react-error-boundary';
import { ErrorBoundary } from 'react-error-boundary';

export type EditorProps = {
  page: Page;
  mode: 'page' | 'edgeless';
  onInit: (page: Page, editor: Readonly<EditorContainer>) => void;
  onLoad?: (page: Page, editor: EditorContainer) => void;
  style?: CSSProperties;
};

export type ErrorBoundaryProps = {
  onReset?: () => void;
};

declare global {
  // eslint-disable-next-line no-var
  var currentPage: Page | undefined;
  // eslint-disable-next-line no-var
  var currentEditor: EditorContainer | undefined;
}

const BlockSuiteEditorImpl = (props: EditorProps): ReactElement => {
  const JotaiEditorContainer = useAtomValue(
    editorContainerModuleAtom
  ) as typeof EditorContainer;
  const page = props.page;
  assertExists(page, 'page should not be null');
  const editorRef = useRef<EditorContainer | null>(null);
  const blockHubRef = useRef<BlockHub | null>(null);
  if (editorRef.current === null) {
    editorRef.current = new JotaiEditorContainer();
    editorRef.current.autofocus = true;
    globalThis.currentEditor = editorRef.current;
  }
  const editor = editorRef.current;
  assertExists(editorRef, 'editorRef.current should not be null');
  if (editor.mode !== props.mode) {
    editor.mode = props.mode;
  }

  useEffect(() => {
    if (editor.page !== props.page) {
      editor.page = props.page;
      if (page.root === null) {
        props.onInit(page, editor);
      }
      props.onLoad?.(page, editor);
    }
  }, [props.page, props.onInit, props.onLoad, editor, props, page]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const editor = editorRef.current;
    assertExists(editor);
    const container = ref.current;
    if (!container) {
      return;
    }
    if (page.awarenessStore.getFlag('enable_block_hub')) {
      editor.createBlockHub().then(blockHub => {
        if (blockHubRef.current) {
          blockHubRef.current.remove();
        }
        blockHubRef.current = blockHub;
        const toolWrapper = document.querySelector('#toolWrapper');
        if (!toolWrapper) {
          console.warn(
            'toolWrapper not found, block hub feature will not be available.'
          );
        } else {
          toolWrapper.appendChild(blockHub);
        }
      });
    }

    container.appendChild(editor);
    return () => {
      blockHubRef.current?.remove();
      container.removeChild(editor);
    };
  }, [editor, page]);

  // issue: https://github.com/toeverything/AFFiNE/issues/2004
  const className = `editor-wrapper ${editor.mode}-mode`;
  return (
    <div
      data-testid={`editor-${props.page.id}`}
      className={className}
      style={props.style}
      ref={ref}
    />
  );
};

const BlockSuiteErrorFallback = (
  props: FallbackProps & ErrorBoundaryProps
): ReactElement => {
  return (
    <div>
      <h1>Sorry.. there was an error</h1>
      <div>{props.error.message}</div>
      <button
        data-testid="error-fallback-reset-button"
        onClick={() => {
          props.onReset?.();
          props.resetErrorBoundary();
        }}
      >
        Try again
      </button>
    </div>
  );
};

export const BlockSuiteEditor = memo(function BlockSuiteEditor(
  props: EditorProps & ErrorBoundaryProps
): ReactElement {
  return (
    <ErrorBoundary
      fallbackRender={useCallback(
        (fallbackProps: FallbackProps) => (
          <BlockSuiteErrorFallback {...fallbackProps} onReset={props.onReset} />
        ),
        [props.onReset]
      )}
    >
      <Suspense fallback={null}>
        <BlockSuiteEditorImpl {...props} />
      </Suspense>
    </ErrorBoundary>
  );
});

BlockSuiteEditor.displayName = 'BlockSuiteEditor';
