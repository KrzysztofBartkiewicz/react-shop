import React from 'react';
import CheckoutForm from '../../components/organisms/Forms/CheckoutForm';
import { StyledCheckout } from './StyledCheckout';

const Checkout = ({ history: { goBack } }) => {
  return (
    <StyledCheckout>
      <CheckoutForm />
      <button onClick={goBack}>go back btn</button>
    </StyledCheckout>
  );
};

export default Checkout;
