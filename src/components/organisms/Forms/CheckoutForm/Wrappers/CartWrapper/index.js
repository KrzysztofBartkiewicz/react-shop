import React, { useContext } from 'react';
import List from '../../../../../molecules/List';
import CartProduct from '../../../../../molecules/CartProduct';
import RootContext from '../../../../../../context/RootContext';
import {
  StyledCartWrapper,
  StyledHeading,
  StyledCart,
  StyledTotalCost,
  StyledFreeShippingInfo,
  StyledFreeShippingInfoWrapper,
  StyledEmptyInfo,
} from './StyledCartWrapper';
import { iconsTypes } from '../../../../../../helpers/iconsTypes';

const FREE_DELIVERY = 3000;

const CartWrapper = () => {
  const context = useContext(RootContext);
  const { cart, cartTotalPrice } = context;

  const freeDeliveryInfo =
    cartTotalPrice < FREE_DELIVERY ? (
      <>
        `You are <span>${FREE_DELIVERY - cartTotalPrice}$</span> away from free
        delivery.`
      </>
    ) : (
      'Your delivery is free!'
    );

  return (
    <StyledCartWrapper>
      <StyledHeading headingType="h6">Your cart</StyledHeading>
      {cartTotalPrice !== 0 ? (
        <>
          {' '}
          <StyledCart>
            <List array={cart} listComponent={<CartProduct basic />} />
          </StyledCart>
          <StyledTotalCost weight="bold">
            <span>Total cost: </span>
            {cartTotalPrice}$
          </StyledTotalCost>
          <StyledFreeShippingInfoWrapper icon={iconsTypes.car}>
            <img src={iconsTypes.car} alt="free delivery" />
            <StyledFreeShippingInfo>{freeDeliveryInfo}</StyledFreeShippingInfo>
          </StyledFreeShippingInfoWrapper>{' '}
        </>
      ) : (
        <StyledEmptyInfo>Your cart is empty</StyledEmptyInfo>
      )}
    </StyledCartWrapper>
  );
};

export default CartWrapper;
