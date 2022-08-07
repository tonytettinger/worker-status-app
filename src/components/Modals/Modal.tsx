import React from 'react';
import { StyledModal, StyledModalContent } from './Modal.styled';

export interface IModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: IModalProps) => (
  <StyledModal>
    <StyledModalContent>{children}</StyledModalContent>
  </StyledModal>
);

export default Modal;
