import React, { useRef, useEffect, useContext } from 'react';
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
  const paymentRef = useRef();
  const { cartTotalPrice } = useContext(RootContext);
  console.log(cartTotalPrice);

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: `${cartTotalPrice}`,
                },
              },
            ],
          });
        },
      })
      .render(paymentRef.current);
  }, []);

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
        <StyledPaymentWrapper ref={paymentRef}></StyledPaymentWrapper>
      </StyledSummaryWrapper>
    </StyledPayment>
  );
};

export default Payment;
