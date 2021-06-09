import React from 'react';
import CheckoutForm from '../../components/organisms/Forms/CheckoutForm';
import { StyledCheckout } from './StyledCheckout';

const Checkout = () => {
  return (
    <StyledCheckout>
      <CheckoutForm />
    </StyledCheckout>
  );
};

export default Checkout;
