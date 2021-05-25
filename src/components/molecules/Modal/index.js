import React, { useContext } from 'react';
import {
  StyledModal,
  StyledPaper,
  StyledHeading,
  StyledCartHead,
  StyledSummaryWrapper,
} from './StyledModal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RootContext from '../../../context/RootContext';
import List from '../List';
import { listTypes } from '../../../helpers/listTypes';
import Paragraph from '../../atoms/Paragraph';

const Modal = () => {
  const context = useContext(RootContext);
  const { cartModalOpen, handleCartModalClose, cart, cartTotalPrice } = context;

  const renderTotalPrice = () => (
    <Paragraph weight="bold">
      <span style={{ fontWeight: '300' }}>Total cost: </span>
      {cartTotalPrice}$
    </Paragraph>
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
          <StyledHeading headingType="h6">Shopping Cart</StyledHeading>
          <StyledCartHead>
            <Paragraph secondary size="xs">
              Product
            </Paragraph>
            <Paragraph secondary size="xs">
              Category
            </Paragraph>
            <Paragraph secondary size="xs">
              Amount
            </Paragraph>
            <Paragraph secondary size="xs">
              Price
            </Paragraph>
          </StyledCartHead>
          <List array={cart} listType={listTypes.cartList} />
          <StyledSummaryWrapper>
            {cartTotalPrice !== 0 ? renderTotalPrice() : null}
          </StyledSummaryWrapper>
        </StyledPaper>
      </Fade>
    </StyledModal>
  );
};

export default Modal;
