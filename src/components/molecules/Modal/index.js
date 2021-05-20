import React, { useContext } from 'react';
import {
  StyledModal,
  StyledPaper,
  StyledHeading,
  StyledCartHead,
} from './StyledModal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RootContext from '../../../context/RootContext';
import List from '../List';
import { listTypes } from '../../../helpers/listTypes';
import Heading from '../../atoms/Heading';

const Modal = () => {
  const context = useContext(RootContext);
  const { cartModalOpen, handleCartModalClose, cart, cartTotalPrice } = context;

  const renderTotalPrice = () => (
    <Heading headingType="h1">
      <span style={{ fontWeight: '400' }}>Total cost: </span>
      {cartTotalPrice}$
    </Heading>
  );

  return (
    <StyledModal
      aria-labelledby="transition-MaterialModal-title"
      aria-describedby="transition-modal-description"
      open={cartModalOpen}
      onClose={handleCartModalClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={cartModalOpen}>
        <StyledPaper>
          <StyledHeading headingType="h1">Shopping Cart</StyledHeading>
          <StyledCartHead>
            <Heading secondary headingType="h2">
              Product
            </Heading>
            <Heading secondary headingType="h2">
              Category
            </Heading>
            <Heading secondary headingType="h2">
              Amount
            </Heading>
            <Heading secondary headingType="h2">
              Price
            </Heading>
          </StyledCartHead>
          <List array={cart} listType={listTypes.cartList} />
          {cartTotalPrice !== 0 ? renderTotalPrice() : null}
        </StyledPaper>
      </Fade>
    </StyledModal>
  );
};

export default Modal;
