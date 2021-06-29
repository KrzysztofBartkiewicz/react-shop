import React from 'react';
import { StyledBackdrop, StyledWrapper } from './StyledCustomModal';

const CustomModal = ({ children, isOpen, onCloseFn }) => {
  return (
    <StyledBackdrop open={isOpen} onClick={() => onCloseFn(false)}>
      <StyledWrapper onClick={(event) => event.stopPropagation()}>
        {children}
      </StyledWrapper>
    </StyledBackdrop>
  );
};

export default CustomModal;
