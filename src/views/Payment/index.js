import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Heading from '../../components/atoms/Heading';
import Paragraph from '../../components/atoms/Paragraph';
import CartWrapper from '../../components/organisms/Forms/CheckoutForm/Wrappers/CartWrapper';
import RootContext from '../../context/RootContext';
import {
  StyledAddress,
  StyledDelivery,
  StyledPayment,
  StyledSummaryWrapper,
  StyledCart,
  StyledPaymentWrapper,
} from './StyledPayment';

const PayPalButton = window.paypal.Buttons.driver('react', { React, ReactDOM });

const Payment = ({ location }) => {
  const {
    address,
    city,
    country,
    delivery,
    email,
    firstName,
    lastName,
    payment,
    phoneNumber,
    postalCode,
  } = location.state;

  const { cartTotalPrice, cart } = useContext(RootContext);

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: cartTotalPrice,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    console.log(data);
    console.log(actions.order.capture());
    return actions.order.capture();
  };

  return (
    <StyledPayment>
      <Heading headingType="h5">Summary</Heading>
      <StyledSummaryWrapper>
        <StyledAddress>
          <Heading headingType="h6">Delivery address:</Heading>
          <Paragraph>{`${firstName} ${lastName}`}</Paragraph>
          <Paragraph>{`${address}, ${city}`}</Paragraph>
          <Paragraph>{postalCode}</Paragraph>
          <Paragraph>{country}</Paragraph>
          <Paragraph>{phoneNumber}</Paragraph>
          <Paragraph>{email}</Paragraph>
        </StyledAddress>
        <StyledDelivery>
          <Heading headingType="h6">{delivery}</Heading>
        </StyledDelivery>
        <StyledCart>
          <CartWrapper />
        </StyledCart>
        <StyledPaymentWrapper>
          {cart.length !== 0 && (
            <PayPalButton
              createOrder={(data, actions) => createOrder(data, actions)}
              onApprove={(data, actions) => onApprove(data, actions)}
            />
          )}
        </StyledPaymentWrapper>
      </StyledSummaryWrapper>
    </StyledPayment>
  );
};

export default Payment;
