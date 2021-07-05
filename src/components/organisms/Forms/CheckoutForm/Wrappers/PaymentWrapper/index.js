import React from 'react';
import { ErrorMessage } from 'formik';
import Heading from '../../../../../atoms/Heading';
import RadioButton from '../../../../../atoms/RadioButton';
import { iconsTypes } from '../../../../../../helpers/iconsTypes';
import {
  StyledPaymentWrapper,
  StyledErrorMessage,
} from './StyledPaymentWrapper';

const PaymentWrapper = ({ handleChangeFn }) => {
  return (
    <StyledPaymentWrapper>
      <Heading headingType="h6">Payment method</Heading>
      <RadioButton
        name="payment"
        value="paypal"
        icon={iconsTypes.paypal}
        onChangeFn={handleChangeFn}
      />
      <RadioButton
        name="payment"
        value="visa"
        icon={iconsTypes.visa}
        onChangeFn={handleChangeFn}
      />
      <RadioButton
        name="payment"
        value="mastercard"
        icon={iconsTypes.mastercard}
        onChangeFn={handleChangeFn}
      />
      <RadioButton
        name="payment"
        value="westernunion"
        icon={iconsTypes.westernunion}
        onChangeFn={handleChangeFn}
      />
      <RadioButton
        name="payment"
        value="discover"
        icon={iconsTypes.discover}
        onChangeFn={handleChangeFn}
      />
      <RadioButton
        name="payment"
        value="ideal"
        icon={iconsTypes.ideal}
        onChangeFn={handleChangeFn}
      />
      <StyledErrorMessage>
        <ErrorMessage name="payment" />
      </StyledErrorMessage>
    </StyledPaymentWrapper>
  );
};

export default PaymentWrapper;
