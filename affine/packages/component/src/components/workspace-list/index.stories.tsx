import { WorkspaceFlavour } from '@affine/workspace/type';
import { createEmptyBlockSuiteWorkspace } from '@affine/workspace/utils';
import { arrayMove } from '@dnd-kit/sortable';
import type { Meta } from '@storybook/react';
import { useState } from 'react';

import type { WorkspaceListProps } from './index';
import { WorkspaceList } from './index';

export default {
  title: 'AFFiNE/WorkspaceList',
  component: WorkspaceList,
} satisfies Meta<WorkspaceListProps>;

export const Default = () => {
  const [items, setItems] = useState(() => {
    const items = [
      {
        id: '1',
        flavour: WorkspaceFlavour.LOCAL,
        blockSuiteWorkspace: createEmptyBlockSuiteWorkspace(
          '1',
          WorkspaceFlavour.LOCAL
        ),
        providers: [],
      },
      {
        id: '2',
        flavour: WorkspaceFlavour.LOCAL,
        blockSuiteWorkspace: createEmptyBlockSuiteWorkspace(
          '2',
          WorkspaceFlavour.LOCAL
        ),
        providers: [],
      },
      {
        id: '3',
        flavour: WorkspaceFlavour.LOCAL,
        blockSuiteWorkspace: createEmptyBlockSuiteWorkspace(
          '3',
          WorkspaceFlavour.LOCAL
        ),
        providers: [],
      },
    ] satisfies WorkspaceListProps['items'];

    items.forEach(item => {
      item.blockSuiteWorkspace.meta.setName(item.id);
    });

    return items;
  });
  return (
    <WorkspaceList
      currentWorkspaceId={null}
      items={items}
      onClick={() => {}}
      onSettingClick={() => {}}
      onDragEnd={event => {
        const { active, over } = event;

        if (active.id !== over?.id) {
          setItems(items => {
            const oldIndex = items.findIndex(item => item.id === active.id);
            const newIndex = items.findIndex(item => item.id === over?.id);

            return arrayMove(items, oldIndex, newIndex);
          });
        }
      }}
    />
  );
};
