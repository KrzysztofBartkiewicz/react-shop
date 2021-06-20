import React, { useContext } from 'react';
import { Formik } from 'formik';
import { iconsTypes } from '../../../../helpers/iconsTypes';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
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
} from './StyledCheckoutForm';

const CheckoutForm = () => {
  const { goBack } = useHistory();
  const { currentUser, logOut } = useContext(AuthContext);

  return (
    <StyledFormWrapper>
      <StyledHeading>Shipping and Payment</StyledHeading>

      <Formik
        initialValues={{
          email: '',
          address: '',
          firstName: '',
          city: '',
          lastName: '',
          postalCode: '',
          phoneNumber: '',
          country: 'Poland',
          payment: '',
          delivery: '',
        }}
        validationSchema={checkoutSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange }) => (
          <StyledForm>
            <StyledButtonsWrapper>
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
            </StyledButtonsWrapper>

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