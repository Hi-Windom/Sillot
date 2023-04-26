import { displayFlex, IconButton, styled, Tooltip } from '@affine/component';
import { config } from '@affine/env';
import { useTranslation } from '@affine/i18n';
import {
  getLoginStorage,
  setLoginStorage,
  SignMethod,
} from '@affine/workspace/affine/login';
import type { LocalWorkspace } from '@affine/workspace/type';
import { WorkspaceFlavour } from '@affine/workspace/type';
import {
  CloudWorkspaceIcon,
  LocalWorkspaceIcon,
  NoNetworkIcon,
} from '@blocksuite/icons';
import { assertEquals, assertExists } from '@blocksuite/store';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useCurrentWorkspace } from '../../../../hooks/current/use-current-workspace';
import { useTransformWorkspace } from '../../../../hooks/use-transform-workspace';
import { affineAuth } from '../../../../plugins/affine';
import type { AffineOfficialWorkspace } from '../../../../shared';
import { TransformWorkspaceToAffineModal } from '../../../affine/transform-workspace-to-affine-modal';

const IconWrapper = styled('div')(({ theme }) => {
  return {
    width: '32px',
    height: '32px',
    marginRight: '12px',
    fontSize: '24px',
    color: 'var(--affine-icon-color)',
    ...displayFlex('center', 'center'),
  };
});

const getStatus = (workspace: AffineOfficialWorkspace) => {
  if (!navigator.onLine) {
    return 'offline';
  }
  if (workspace.flavour === 'local') {
    return 'local';
  }
  return 'cloud';
};

export const SyncUser = () => {
  //#region fixme(himself65): remove these hooks ASAP
  const [workspace] = useCurrentWorkspace();
  assertExists(workspace);
  const router = useRouter();

  const [status, setStatus] = useState<'offline' | 'local' | 'cloud'>(
    getStatus(workspace)
  );
  const [prevWorkspace, setPrevWorkspace] = useState(workspace);
  if (prevWorkspace !== workspace) {
    setPrevWorkspace(workspace);
    setStatus(getStatus(workspace));
  }

  useEffect(() => {
    const online = () => {
      setStatus(getStatus(workspace));
    };

    const offline = () => {
      setStatus('offline');
    };
    window.addEventListener('online', online);
    window.addEventListener('offline', offline);
    return () => {
      window.removeEventListener('online', online);
      window.removeEventListener('offline', offline);
    };
  }, [workspace]);
  //#endregion

  const [open, setOpen] = useState(false);

  const { t } = useTranslation();
  const transformWorkspace = useTransformWorkspace();

  if (!config.enableLegacyCloud) {
    return null;
  }

  if (status === 'offline') {
    return (
      <Tooltip
        content={t('Please make sure you are online')}
        placement="bottom-end"
      >
        <IconWrapper>
          <NoNetworkIcon />
        </IconWrapper>
      </Tooltip>
    );
  }

  if (status === 'local') {
    return (
      <>
        <Tooltip
          content={t('Saved then enable AFFiNE Cloud')}
          placement="bottom-end"
        >
          <IconButton
            onClick={() => {
              setOpen(true);
            }}
            style={{ marginRight: '12px' }}
          >
            <LocalWorkspaceIcon />
          </IconButton>
        </Tooltip>
        <TransformWorkspaceToAffineModal
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          onConform={async () => {
            if (!getLoginStorage()) {
              const response = await affineAuth.generateToken(
                SignMethod.Google
              );
              if (response) {
                setLoginStorage(response);
              }
              router.reload();
              return;
            }
            assertEquals(workspace.flavour, WorkspaceFlavour.LOCAL);
            const id = await transformWorkspace(
              WorkspaceFlavour.LOCAL,
              WorkspaceFlavour.AFFINE,
              workspace as LocalWorkspace
            );
            // fixme(himself65): refactor this
            router
              .replace({
                pathname: `/workspace/[workspaceId]/all`,
                query: {
                  workspaceId: id,
                },
              })
              .then(() => {
                router.reload();
              });
            setOpen(false);
          }}
        />
      </>
    );
  }

  return (
    <Tooltip content={t('Synced with AFFiNE Cloud')} placement="bottom-end">
      <IconWrapper>
        <CloudWorkspaceIcon />
      </IconWrapper>
    </Tooltip>
  );
};

export default SyncUser;
