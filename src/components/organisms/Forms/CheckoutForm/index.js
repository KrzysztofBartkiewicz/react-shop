import React, { useContext, useState } from 'react';
import { Formik } from 'formik';
import { iconsTypes } from '../../../../helpers/iconsTypes';
import { useHistory } from 'react-router';
import { Link, Redirect } from 'react-router-dom';
import { routes } from '../../../../helpers/routes';
import checkoutSchema from '../../../../utils/validation/checkoutFormSchema';
import Button from '../../../atoms/Button';
import ShippingInfoWrapper from './Wrappers/ShippingInfoWrapper';
import DeliveryWrapper from './Wrappers/DeliveryWrapper';
import PaymentWrapper from './Wrappers/PaymentWrapper';
import CartWrapper from './Wrappers/CartWrapper';
import AuthContext from '../../../../context/AuthContext';
import {
  StyledFormWrapper,
  StyledButtonsWrapper,
  StyledForm,
  StyledFormFooter,
  StyledHeading,
  StyledSubmitBtn,
  StyledContinueBtn,
  StyledLoginLink,
  StyledSigninLink,
  StyledUserButtonsWrapper,
} from './StyledCheckoutForm';

const CheckoutForm = () => {
  const { goBack } = useHistory();
  const { currentUser, logOut } = useContext(AuthContext);
  const [redirectToPayment, setRedirectToPayment] = useState(false);

  return (
    <StyledFormWrapper>
      <StyledHeading>Shipping and Payment</StyledHeading>

      <Formik
        initialValues={{
          email: currentUser ? currentUser.email : '',
          address: '',
          firstName: currentUser ? currentUser.firstName : '',
          city: '',
          lastName: currentUser ? currentUser.lastName : '',
          postalCode: '',
          phoneNumber: '',
          country: 'Poland',
          payment: '',
          delivery: '',
        }}
        enableReinitialize
        validationSchema={checkoutSchema}
        onSubmit={() => {
          setRedirectToPayment(true);
        }}
      >
        {({ values, handleChange }) => (
          <StyledForm>
            {redirectToPayment && (
              <Redirect
                to={{ pathname: routes.payment, state: { ...values } }}
              />
            )}
            <StyledUserButtonsWrapper>
              {currentUser ? (
                <Button onClickFn={logOut}>LOG OUT</Button>
              ) : (
                <>
                  <StyledLoginLink to={routes.login}>LOG IN</StyledLoginLink>
                  <StyledSigninLink to={routes.signup}>
                    SIGN IN
                  </StyledSigninLink>
                </>
              )}
            </StyledUserButtonsWrapper>

            <ShippingInfoWrapper
              values={values}
              handleChangeFn={handleChange}
            />

            <PaymentWrapper handleChangeFn={handleChange} />

            <DeliveryWrapper handleChangeFn={handleChange} />

            <CartWrapper />

            <StyledFormFooter>
              <Button onClickFn={goBack} icon={iconsTypes.arrowLeft} goBack>
                Back
              </Button>
              <StyledButtonsWrapper>
                <Link to={routes.products}>
                  <StyledContinueBtn secondary>
                    CONTINUE SHOPPING
                  </StyledContinueBtn>
                </Link>
                <StyledSubmitBtn type="submit">
                  PROCEED TO PAYMENT
                </StyledSubmitBtn>
              </StyledButtonsWrapper>
            </StyledFormFooter>
          </StyledForm>
        )}
      </Formik>
    </StyledFormWrapper>
  );
};

export default CheckoutForm;
