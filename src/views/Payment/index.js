import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
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
import emailjs from 'emailjs-com';
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

  const { cartTotalPrice, cart, deleteAllItemsFromCart } =
    useContext(RootContext);
  const { currentUser } = useContext(AuthContext);

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
    actions.order.capture().then((res) => {
      const formattedTime = moment(res.create_time).format(
        'MM/DD/YYYY h:mm:ss'
      );

      if (currentUser) {
        usersCollections
          .doc(currentUser.id)
          .get()
          .then((doc) => {
            const userData = doc.data();

            const newOrder = {
              createTime: formattedTime,
              id: res.id,
              status: res.status,
              items: cart,
              price: cartTotalPrice,
            };

            const updatedUserData = {
              ...userData,
              orders: [...userData.orders, newOrder],
            };

            usersCollections
              .doc(currentUser.id)
              .set(updatedUserData)
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      }

      allOrdersCollection
        .doc(res.id)
        .set(
          {
            email,
            firstName,
            lastName,
            createTime: formattedTime,
            status: res.status,
            items: cart,
            price: cartTotalPrice,
          },
          { merge: true }
        )
        .catch((err) => console.log(err));

      const emailDetails = {
        email,
        details: cart.reduce((acc, curr, index) => {
          acc = acc.concat(`${index + 1}. ${curr.name} ${curr.price}<br />`);
          return acc;
        }, ''),
        totalPrice: `${cartTotalPrice}$`,
      };

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_EMAIL_CONFIRMATION_TEMPLATE_ID,
          emailDetails,
          process.env.REACT_APP_USER_ID
        )
        .catch((err) => console.log(err));

      swalAlert('Payment', 'Success!');
      deleteAllItemsFromCart();
    });
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
