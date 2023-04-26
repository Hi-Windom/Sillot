import { displayFlex, styled } from '@affine/component';
import { Input } from '@affine/component';

export const StyledInput = styled(Input)(({ theme }) => {
  return {
    border: '1px solid var(--affine-border-color)',
    borderRadius: '10px',
    fontSize: 'var(--affine-font-sm)',
  };
});

export const StyledWorkspaceInfo = styled('div')(({ theme }) => {
  return {
    ...displayFlex('flex-start', 'center'),
    fontSize: '20px',
    span: {
      fontSize: 'var(--affine-font-base)',
      marginLeft: '15px',
    },
  };
});

export const StyledAvatar = styled('div')(
  ({ disabled }: { disabled: boolean }) => {
    return {
      position: 'relative',
      marginRight: '20px',
      cursor: disabled ? 'default' : 'pointer',
      ':hover': {
        '.camera-icon': {
          display: 'flex',
        },
      },
      '.camera-icon': {
        position: 'absolute',
        top: 0,
        left: 0,
        display: 'none',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: 'rgba(60, 61, 63, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10,
      },
    };
  }
);

export const StyledEditButton = styled('div')(({ theme }) => {
  return {
    color: 'var(--affine-primary-color)',
    cursor: 'pointer',
    marginLeft: '36px',
  };
});
