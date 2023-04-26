import { useTranslation } from '@affine/i18n';

import { Button } from '../button';
import type { ModalProps } from '../modal';
import { Modal, ModalCloseButton } from '../modal';
import {
  StyledColumnButtonWrapper,
  StyledConfirmContent,
  StyledConfirmTitle,
  StyledModalWrapper,
  StyledRowButtonWrapper,
} from './styles';

export type ConfirmProps = {
  title?: string;
  content?: string;
  confirmText?: string;
  cancelText?: string;
  // TODO: Confirm button's color should depend on confirm type
  confirmType?: 'primary' | 'warning' | 'danger';
  buttonDirection?: 'row' | 'column';
  onConfirm?: () => void;
  onCancel?: () => void;
  cancelButtonTestId?: string;
  confirmButtonTestId?: string;
} & Omit<ModalProps, 'children'>;

export const Confirm = ({
  title,
  content,
  confirmText,
  confirmType,
  onConfirm,
  onCancel,
  buttonDirection = 'row',
  cancelText = 'Cancel',
  open,
  cancelButtonTestId = '',
  confirmButtonTestId = '',
}: ConfirmProps) => {
  const { t } = useTranslation();
  return (
    <Modal open={open} disablePortal={false}>
      <StyledModalWrapper>
        <ModalCloseButton
          onClick={() => {
            onCancel?.();
          }}
        />
        <StyledConfirmTitle>{title}</StyledConfirmTitle>
        <StyledConfirmContent>{content}</StyledConfirmContent>
        {buttonDirection === 'row' ? (
          <StyledRowButtonWrapper>
            <Button
              shape="round"
              bold={true}
              onClick={() => {
                onCancel?.();
              }}
              style={{ marginRight: '24px' }}
              data-testid={cancelButtonTestId}
            >
              {cancelText === 'Cancel' ? t('Cancel') : cancelText}
            </Button>
            <Button
              type={confirmType}
              shape="round"
              bold={true}
              onClick={() => {
                onConfirm?.();
              }}
              data-testid={confirmButtonTestId}
            >
              {confirmText}
            </Button>
          </StyledRowButtonWrapper>
        ) : (
          <StyledColumnButtonWrapper>
            <Button
              type={confirmType}
              shape="round"
              bold={true}
              onClick={() => {
                onConfirm?.();
              }}
              style={{ width: '284px', height: '38px', textAlign: 'center' }}
              data-testid={confirmButtonTestId}
            >
              {confirmText}
            </Button>
            <Button
              shape="round"
              bold={true}
              onClick={() => {
                onCancel?.();
              }}
              style={{
                marginTop: '16px',
                width: '284px',
                height: '38px',
                textAlign: 'center',
              }}
              data-testid={cancelButtonTestId}
            >
              {cancelText === 'Cancel' ? t('Cancel') : cancelText}
            </Button>
          </StyledColumnButtonWrapper>
        )}
      </StyledModalWrapper>
    </Modal>
  );
};

export default Confirm;
