import { displayFlex, styled } from '@affine/component';
import { Button } from '@affine/component';
import type { Permission } from '@affine/workspace/affine/api';
import {
  SucessfulDuotoneIcon,
  UnsucessfulDuotoneIcon,
} from '@blocksuite/icons';
import { NoSsr } from '@mui/material';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { Suspense } from 'react';
import useSWR from 'swr';

import { PageLoading } from '../../components/pure/loading';
import { RouteLogic, useRouterHelper } from '../../hooks/use-router-helper';
import { QueryKey } from '../../plugins/affine/fetcher';
import type { NextPageWithLayout } from '../../shared';
import { WorkspaceSubPath } from '../../shared';

const InvitePage: NextPageWithLayout = () => {
  const router = useRouter();
  const { jumpToSubPath } = useRouterHelper(router);
  const { data: inviteData } = useSWR<Permission>(
    typeof router.query.invite_code === 'string'
      ? [QueryKey.acceptInvite, router.query.invite_code]
      : null
  );

  if (inviteData?.accepted) {
    return (
      <StyledContainer>
        <Image
          src="/imgs/invite-success.svg"
          alt=""
          layout="fill"
          width={300}
          height={300}
        />
        <Button
          type="primary"
          shape="round"
          onClick={() => {
            jumpToSubPath(
              inviteData.workspace_id,
              WorkspaceSubPath.ALL,
              RouteLogic.REPLACE
            );
          }}
        >
          Go to Workspace
        </Button>
        <p>
          <SucessfulDuotoneIcon />
          Successfully joined
        </p>
      </StyledContainer>
    );
  }

  if (inviteData?.accepted === false) {
    return (
      <StyledContainer>
        <Image src="/imgs/invite-error.svg" alt="" />
        <Button
          shape="round"
          onClick={() => {
            router.replace(`/`);
          }}
        >
          Back to Home
        </Button>
        <p>
          <UnsucessfulDuotoneIcon />
          The link has expired
        </p>
      </StyledContainer>
    );
  }
  throw new Error('Invalid invite code');
};

export default InvitePage;

InvitePage.getLayout = page => {
  return (
    <Suspense fallback={<PageLoading />}>
      <NoSsr>{page}</NoSsr>
    </Suspense>
  );
};

const StyledContainer = styled('div')(({ theme }) => {
  return {
    height: '100vh',
    ...displayFlex('center', 'center'),
    flexDirection: 'column',
    backgroundColor: 'var(--affine-background-primary-color)',
    img: {
      width: '300px',
      height: '300px',
    },
    p: {
      ...displayFlex('center', 'center'),
      marginTop: '24px',
      svg: {
        color: 'var(--affine-primary-color)',
        fontSize: '24px',
        marginRight: '12px',
      },
    },
  };
});
