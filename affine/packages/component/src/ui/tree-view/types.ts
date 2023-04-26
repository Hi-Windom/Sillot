import type { CSSProperties, ReactNode } from 'react';

export type DropPosition = {
  topLine: boolean;
  bottomLine: boolean;
  internal: boolean;
};
export type OnDrop = (
  dragId: string,
  dropId: string,
  position: DropPosition
) => void;

export type Node<RenderProps = unknown> = {
  id: string;
  children?: Node<RenderProps>[];
  render: (
    node: Node<RenderProps>,
    eventsAndStatus: {
      isOver: boolean;
      onAdd: () => void;
      onDelete: () => void;
      collapsed: boolean;
      setCollapsed: (id: string, collapsed: boolean) => void;
      isSelected: boolean;
      disableCollapse?: ReactNode;
    },
    renderProps?: RenderProps
  ) => ReactNode;
  renderTopLine?: boolean;
  renderBottomLine?: boolean;
};

type CommonProps<RenderProps = unknown> = {
  enableDnd?: boolean;
  enableKeyboardSelection?: boolean;
  indent?: CSSProperties['paddingLeft'];
  onAdd?: (parentId: string) => void;
  onDelete?: (deleteId: string) => void;
  onDrop?: OnDrop;
  // Only trigger when the enableKeyboardSelection is true
  onSelect?: (id: string) => void;
  disableCollapse?: ReactNode;
};

export type TreeNodeProps<RenderProps = unknown> = {
  node: Node<RenderProps>;
  index: number;
  collapsedIds: string[];
  setCollapsed: (id: string, collapsed: boolean) => void;
  allowDrop?: boolean;
  selectedId?: string;
  draggingId?: string;
} & CommonProps<RenderProps>;

export type TreeNodeItemProps<RenderProps = unknown> = {
  collapsed: boolean;
  setCollapsed: (id: string, collapsed: boolean) => void;

  isOver?: boolean;
} & TreeNodeProps<RenderProps>;

export type TreeViewProps<RenderProps = unknown> = {
  data: Node<RenderProps>[];
  initialCollapsedIds?: string[];
  disableCollapse?: boolean;
} & CommonProps<RenderProps>;

export type NodeLIneProps<RenderProps = unknown> = {
  allowDrop: boolean;
  isTop?: boolean;
} & Pick<TreeNodeProps<RenderProps>, 'node'>;
