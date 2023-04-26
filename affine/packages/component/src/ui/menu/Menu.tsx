import type { TooltipProps } from '@mui/material';
import type { CSSProperties } from 'react';

import { Popper, type PopperProps } from '../popper';
import { StyledMenuWrapper } from './styles';

export type MenuProps = {
  width?: CSSProperties['width'];
} & PopperProps &
  Omit<TooltipProps, 'title' | 'content'>;
export const Menu = (props: MenuProps) => {
  const { width, content, placement = 'bottom-start', children } = props;
  return content ? (
    <Popper
      {...props}
      showArrow={false}
      content={
        <StyledMenuWrapper width={width} placement={placement}>
          {content}
        </StyledMenuWrapper>
      }
    >
      {children}
    </Popper>
  ) : null;
};

export default Menu;
