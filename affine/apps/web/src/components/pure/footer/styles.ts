import {
  displayFlex,
  displayInlineFlex,
  styled,
  textEllipsis,
} from '@affine/component';
import { Button } from '@affine/component';

export const StyledSplitLine = styled('div')(({ theme }) => {
  return {
    width: '1px',
    height: '20px',
    background: 'var(--affine-border-color)',
    marginRight: '24px',
  };
});

export const StyleWorkspaceInfo = styled('div')(({ theme }) => {
  return {
    marginLeft: '15px',
    width: '202px',
    p: {
      height: '20px',
      fontSize: 'var(--affine-font-sm)',
      ...displayFlex('flex-start', 'center'),
    },
    svg: {
      marginRight: '10px',
      fontSize: '16px',
      flexShrink: 0,
    },
    span: {
      flexGrow: 1,
      ...textEllipsis(1),
    },
  };
});

export const StyleWorkspaceTitle = styled('div')(({ theme }) => {
  return {
    fontSize: 'var(--affine-font-base)',
    fontWeight: 600,
    lineHeight: '24px',
    marginBottom: '10px',
    maxWidth: '200px',
    ...textEllipsis(1),
  };
});

export const StyledCard = styled('div')<{
  active?: boolean;
}>(({ theme, active }) => {
  const borderColor = active ? 'var(--affine-primary-color)' : 'transparent';
  return {
    width: '310px',
    height: '124px',
    cursor: 'pointer',
    padding: '16px',
    boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    border: `1px solid ${borderColor}`,
    ...displayFlex('flex-start', 'flex-start'),
    marginBottom: '24px',
    transition: 'background .2s',
    background: 'var(--affine-background-primary-color)',
    ':hover': {
      background: 'var(--affine-hover-color)',
      '.add-icon': {
        borderColor: 'var(--affine-primary-color)',
        color: 'var(--affine-primary-color)',
      },
    },
  };
});

export const StyledFooter = styled('div')({
  height: '84px',
  padding: '0 40px',
  flexShrink: 0,
  ...displayFlex('space-between', 'center'),
});

export const StyleUserInfo = styled('div')(({ theme }) => {
  return {
    textAlign: 'left',
    marginLeft: '16px',
    flex: 1,
    p: {
      lineHeight: '24px',
      color: 'var(--affine-icon-color)',
    },
    'p:first-of-type': {
      color: 'var(--affine-text-primary-color)',
      fontWeight: 600,
    },
  };
});

export const StyledModalHeaderLeft = styled('div')(() => {
  return { ...displayFlex('flex-start', 'center') };
});
export const StyledModalTitle = styled('div')(({ theme }) => {
  return {
    fontWeight: 600,
    fontSize: 'var(--affine-font-h6)',
  };
});

export const StyledHelperContainer = styled('div')(({ theme }) => {
  return {
    color: 'var(--affine-icon-color)',
    marginLeft: '15px',
    fontWeight: 400,
    fontSize: 'var(--affine-font-h6)',
    ...displayFlex('center', 'center'),
  };
});

export const StyledModalContent = styled('div')({
  height: '534px',
  padding: '8px 40px',
  marginTop: '72px',
  overflow: 'auto',
  ...displayFlex('space-between', 'flex-start', 'flex-start'),
  flexWrap: 'wrap',
});
export const StyledOperationWrapper = styled('div')(() => {
  return {
    ...displayFlex('flex-end', 'center'),
  };
});

export const StyleWorkspaceAdd = styled('div')(() => {
  return {
    width: '58px',
    height: '58px',
    borderRadius: '100%',
    background: '#f4f5fa',
    border: '1.5px dashed #f4f5fa',
    transition: 'background .2s',
    ...displayFlex('center', 'center'),
  };
});
export const StyledModalHeader = styled('div')(() => {
  return {
    width: '100%',
    height: '72px',
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '24px 24px 0 0',
    padding: '0 40px',
    ...displayFlex('space-between', 'center'),
  };
});

export const StyledSignInButton = styled(Button)(({ theme }) => {
  return {
    fontWeight: 600,
    paddingLeft: 0,
    '.circle': {
      width: '40px',
      height: '40px',
      borderRadius: '20px',
      backgroundColor: 'var(--affine-hover-color)',
      color: 'var(--affine-primary-color)',
      fontSize: '24px',
      flexShrink: 0,
      marginRight: '16px',
      ...displayInlineFlex('center', 'center'),
    },
  };
});
