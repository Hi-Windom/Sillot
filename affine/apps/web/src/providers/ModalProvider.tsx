import { rootWorkspacesMetadataAtom } from '@affine/workspace/atom';
import { arrayMove } from '@dnd-kit/sortable';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { lazy, Suspense, useCallback, useTransition } from 'react';

import {
  currentWorkspaceIdAtom,
  openCreateWorkspaceModalAtom,
  openWorkspacesModalAtom,
} from '../atoms';
import { useAffineLogIn } from '../hooks/affine/use-affine-log-in';
import { useAffineLogOut } from '../hooks/affine/use-affine-log-out';
import { useCurrentUser } from '../hooks/current/use-current-user';
import { useCurrentWorkspace } from '../hooks/current/use-current-workspace';
import { useRouterHelper } from '../hooks/use-router-helper';
import { useAppHelper, useWorkspaces } from '../hooks/use-workspaces';
import { WorkspaceSubPath } from '../shared';

const WorkspaceListModal = lazy(() =>
  import('../components/pure/workspace-list-modal').then(module => ({
    default: module.WorkspaceListModal,
  }))
);
const CreateWorkspaceModal = lazy(() =>
  import('../components/pure/create-workspace-modal').then(module => ({
    default: module.CreateWorkspaceModal,
  }))
);

export function Modals() {
  const [openWorkspacesModal, setOpenWorkspacesModal] = useAtom(
    openWorkspacesModalAtom
  );
  const [openCreateWorkspaceModal, setOpenCreateWorkspaceModal] = useAtom(
    openCreateWorkspaceModalAtom
  );

  const router = useRouter();
  const { jumpToSubPath } = useRouterHelper(router);
  const user = useCurrentUser();
  const workspaces = useWorkspaces();
  const setWorkspaces = useSetAtom(rootWorkspacesMetadataAtom);
  const currentWorkspaceId = useAtomValue(currentWorkspaceIdAtom);
  const [, setCurrentWorkspace] = useCurrentWorkspace();
  const { createLocalWorkspace } = useAppHelper();
  const [transitioning, transition] = useTransition();

  return (
    <>
      <Suspense>
        <WorkspaceListModal
          disabled={transitioning}
          user={user}
          workspaces={workspaces}
          currentWorkspaceId={currentWorkspaceId}
          open={openWorkspacesModal || workspaces.length === 0}
          onClose={useCallback(() => {
            setOpenWorkspacesModal(false);
          }, [setOpenWorkspacesModal])}
          onMoveWorkspace={useCallback(
            (activeId, overId) => {
              const oldIndex = workspaces.findIndex(w => w.id === activeId);
              const newIndex = workspaces.findIndex(w => w.id === overId);
              transition(() =>
                setWorkspaces(workspaces =>
                  arrayMove(workspaces, oldIndex, newIndex)
                )
              );
            },
            [setWorkspaces, workspaces]
          )}
          onClickWorkspace={useCallback(
            workspace => {
              setOpenWorkspacesModal(false);
              setCurrentWorkspace(workspace.id);
              jumpToSubPath(workspace.id, WorkspaceSubPath.ALL);
            },
            [jumpToSubPath, setCurrentWorkspace, setOpenWorkspacesModal]
          )}
          onClickWorkspaceSetting={useCallback(
            workspace => {
              setOpenWorkspacesModal(false);
              setCurrentWorkspace(workspace.id);
              jumpToSubPath(workspace.id, WorkspaceSubPath.SETTING);
            },
            [jumpToSubPath, setCurrentWorkspace, setOpenWorkspacesModal]
          )}
          onClickLogin={useAffineLogIn()}
          onClickLogout={useAffineLogOut()}
          onCreateWorkspace={useCallback(() => {
            setOpenCreateWorkspaceModal(true);
          }, [setOpenCreateWorkspaceModal])}
        />
      </Suspense>
      <Suspense>
        <CreateWorkspaceModal
          open={openCreateWorkspaceModal}
          onClose={useCallback(() => {
            setOpenCreateWorkspaceModal(false);
          }, [setOpenCreateWorkspaceModal])}
          onCreate={useCallback(
            async name => {
              const id = await createLocalWorkspace(name);
              setOpenCreateWorkspaceModal(false);
              setOpenWorkspacesModal(false);
              setCurrentWorkspace(id);
              return jumpToSubPath(id, WorkspaceSubPath.ALL);
            },
            [
              createLocalWorkspace,
              jumpToSubPath,
              setCurrentWorkspace,
              setOpenCreateWorkspaceModal,
              setOpenWorkspacesModal,
            ]
          )}
        />
      </Suspense>
    </>
  );
}

export const ModalProvider = (): ReactElement => {
  return (
    <>
      <Modals />
    </>
  );
};
