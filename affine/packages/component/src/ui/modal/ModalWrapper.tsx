import type { CSSProperties } from 'react';

import { styled } from '../../styles';

export const ModalWrapper = styled('div')<{
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  minHeight?: CSSProperties['minHeight'];
}>(({ theme, width, height, minHeight }) => {
  return {
    width,
    height,
    minHeight,
    backgroundColor: 'var(--affine-white)',
    borderRadius: '16px',
    position: 'relative',
    maxHeight: 'calc(100vh - 32px)',
  };
});

export default ModalWrapper;
