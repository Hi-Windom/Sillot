import type { CSSProperties, HTMLAttributes, ReactElement } from 'react';
import { forwardRef } from 'react';

import { StyledIconButton } from './styles';
const SIZE_SMALL = 'small' as const;
const SIZE_MIDDLE = 'middle' as const;
const SIZE_NORMAL = 'normal' as const;
// TODO: IconButton should merge into Button, but it has not been designed yet
const SIZE_CONFIG = {
  [SIZE_SMALL]: {
    iconSize: 16,
    areaSize: 20,
  },
  [SIZE_MIDDLE]: {
    iconSize: 20,
    areaSize: 24,
  },
  [SIZE_NORMAL]: {
    iconSize: 24,
    areaSize: 32,
  },
} as const;

export type IconButtonProps = {
  size?:
    | typeof SIZE_SMALL
    | typeof SIZE_MIDDLE
    | typeof SIZE_NORMAL
    | [number, number];
  iconSize?:
    | typeof SIZE_SMALL
    | typeof SIZE_MIDDLE
    | typeof SIZE_NORMAL
    | [number, number];
  disabled?: boolean;
  hoverBackground?: CSSProperties['background'];
  hoverColor?: string;
  hoverStyle?: CSSProperties;
  children: ReactElement<HTMLAttributes<SVGElement>, 'svg'>;
  darker?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { size = 'normal', iconSize, disabled = false, children, ...props },
    ref
  ) => {
    iconSize = size;
    const [width, height] = Array.isArray(size)
      ? size
      : [SIZE_CONFIG[size]['areaSize'], SIZE_CONFIG[size]['areaSize']];
    const [iconWidth] = Array.isArray(iconSize)
      ? iconSize
      : [SIZE_CONFIG[iconSize]['iconSize'], SIZE_CONFIG[iconSize]['iconSize']];

    return (
      <StyledIconButton
        ref={ref}
        disabled={disabled}
        width={width}
        height={height}
        borderRadius={iconWidth / 4}
        fontSize={iconWidth}
        {...props}
      >
        {children}
      </StyledIconButton>
    );
  }
);
IconButton.displayName = 'IconButton';

export default IconButton;
