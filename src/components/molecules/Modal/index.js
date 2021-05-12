import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal as MaterialModal } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RootContext from '../../../context/RootContext';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Modal = () => {
  const classes = useStyles();
  const context = useContext(RootContext);
  const { cartModalOpen, handleCartModalClose } = context;

  return (
    <MaterialModal
      aria-labelledby="transition-MaterialModal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={cartModalOpen}
      onClose={handleCartModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={cartModalOpen}>
        <div className={classes.paper}>
          <h2>Your cart</h2>
        </div>
      </Fade>
    </MaterialModal>
  );
};

export default Modal;
