import MuiDivider from '@mui/material/Divider';

import { styled } from '../../styles';

export const Divider = styled(MuiDivider)(({ theme }) => {
  return {
    borderColor: 'var(--affine-border-color)',
  };
});
