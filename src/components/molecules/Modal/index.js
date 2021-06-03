import React, { useContext } from 'react';
import {
  StyledModal,
  StyledPaper,
  StyledHeading,
  StyledCartHead,
  StyledSummaryWrapper,
  StyledParagraph,
} from './StyledModal';
import { listTypes } from '../../../helpers/listTypes';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RootContext from '../../../context/RootContext';
import List from '../List';
import Paragraph from '../../atoms/Paragraph';
import Button from '../../atoms/Button';
import CartProduct from '../CartProduct';
import { Link } from 'react-router-dom';
import { routes } from '../../../helpers/routes';

const Modal = () => {
  const context = useContext(RootContext);
  const { cartModalOpen, handleCartModalClose, cart, cartTotalPrice } = context;

  const renderCheckout = () => (
    <>
      <StyledParagraph weight="bold">
        <span>Total cost: </span>
        {cartTotalPrice}$
      </StyledParagraph>
      <Link to={routes.checkout}>
        <Button onClickFn={() => handleCartModalClose()}>CHECKOUT</Button>
      </Link>
    </>
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
          <List
            array={cart}
            listType={listTypes.cartList}
            listComponent={CartProduct}
          />
          <StyledSummaryWrapper>
            {cartTotalPrice !== 0 ? renderCheckout() : null}
          </StyledSummaryWrapper>
        </StyledPaper>
      </Fade>
    </StyledModal>
  );
};

export default Modal;
