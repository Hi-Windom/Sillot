import MuiBreadcrumbs from '@mui/material/Breadcrumbs';

import { styled } from '../../styles';

export const Breadcrumbs = styled(MuiBreadcrumbs)(({ theme }) => {
  return {
    color: 'var(--affine-text-primary-color)',
  };
});
