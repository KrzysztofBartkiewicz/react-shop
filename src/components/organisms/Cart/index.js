import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../../helpers/routes';
import { listTypes } from '../../../helpers/listTypes';
import Button from '../../atoms/Button';
import RootContext from '../../../context/RootContext';
import Paragraph from '../../atoms/Paragraph';
import List from '../../molecules/List';
import CartProduct from '../../molecules/CartProduct';
import {
  StyledCart,
  StyledParagraph,
  StyledHeading,
  StyledCartHead,
  StyledSummaryWrapper,
} from './StyledCart';

const Cart = () => {
  const { setCartVisibility, cart, cartTotalPrice } = useContext(RootContext);

  const renderCheckout = () => (
    <>
      <StyledParagraph weight="bold">
        <span>Total cost: </span>
        {cartTotalPrice}$
      </StyledParagraph>
      <Link to={routes.checkout}>
        <Button onClickFn={() => setCartVisibility(false)}>CHECKOUT</Button>
      </Link>
    </>
  );

  return (
    <StyledCart>
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
    </StyledCart>
  );
};

export default Cart;
