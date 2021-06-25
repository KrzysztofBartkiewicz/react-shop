import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { StyledModal } from './StyledModal';

const MaterialModal = ({ children, isOpen, toggleOpenFn }) => {
  return (
    <StyledModal
      aria-labelledby="transition-MaterialModal-title"
      aria-describedby="transition-modal-description"
      open={isOpen}
      onClose={() => toggleOpenFn(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>{children}</Fade>
    </StyledModal>
  );
};

export default MaterialModal;
