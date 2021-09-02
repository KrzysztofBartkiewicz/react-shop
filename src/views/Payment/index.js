import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Heading from '../../components/atoms/Heading';
import Paragraph from '../../components/atoms/Paragraph';
import CartWrapper from '../../components/organisms/Forms/CheckoutForm/Wrappers/CartWrapper';
import AuthContext from '../../context/AuthContext';
import RootContext from '../../context/RootContext';
import {
  usersCollections,
  allOrdersCollection,
} from '../../firebase/firestoreUtils';
import swalAlert from '../../utils/sweetalert2';
import {
  StyledPayment,
  StyledSummaryWrapper,
  StyledPaymentWrapper,
} from './StyledPayment';
import { proceedPayment } from './utils';

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

  const { cartTotalPrice, cart, deleteAllItemsFromCart } =
    useContext(RootContext);
  const { currentUser } = useContext(AuthContext);

  const createOrder = (undefined, actions) => {
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

  const onCancel = () => {
    swalAlert('Payment', 'Payment canceled', 'warning');
  };

  const onError = () => {
    swalAlert('Payment', 'Some error occured', 'error');
  };

  const onApprove = (data, actions) => {
    proceedPayment({
      actions,
      currentUser,
      usersCollections,
      cart,
      cartTotalPrice,
      allOrdersCollection,
      email,
      firstName,
      deleteAllItemsFromCart,
      lastName,
    });
  };

  return (
    <StyledPayment>
      <Heading headingType="h5">Summary</Heading>
      <StyledSummaryWrapper>
        <div>
          <Heading headingType="h6">Delivery address:</Heading>
          <Paragraph>{`${firstName} ${lastName}`}</Paragraph>
          <Paragraph>{`${address}, ${city}`}</Paragraph>
          <Paragraph>{postalCode}</Paragraph>
          <Paragraph>{country}</Paragraph>
          <Paragraph>{phoneNumber}</Paragraph>
          <Paragraph>{email}</Paragraph>
        </div>

        <div>
          <Heading headingType="h6">Delivery method</Heading>
        </div>

        <div>
          <CartWrapper />
        </div>

        <StyledPaymentWrapper>
          <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            onCancel={onCancel}
            onError={onError}
          />
        </StyledPaymentWrapper>
      </StyledSummaryWrapper>
    </StyledPayment>
  );
};

export default Payment;
