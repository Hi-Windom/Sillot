import type { Member } from '@affine/workspace/affine/api';
import { useCallback } from 'react';
import useSWR from 'swr';

import { QueryKey } from '../../plugins/affine/fetcher';
import { affineApis } from '../../shared/apis';

export function useMembers(workspaceId: string) {
  const { data, mutate } = useSWR<Member[]>(
    [QueryKey.getMembers, workspaceId],
    {
      fallbackData: [],
    }
  );

  const inviteMember = useCallback(
    async (email: string) => {
      await affineApis.inviteMember({
        id: workspaceId,
        email,
      });
      return mutate();
    },
    [mutate, workspaceId]
  );

  const removeMember = useCallback(
    async (permissionId: number) => {
      await affineApis.removeMember({
        permissionId,
      });
      return mutate();
    },
    [mutate]
  );

  return {
    members: data ?? [],
    inviteMember,
    removeMember,
  };
}
