import React from 'react';
import Heading from '../../../../../atoms/Heading';
import RadioButton from '../../../../../atoms/RadioButton';
import { iconsTypes } from '../../../../../../helpers/iconsTypes';
import {
  StyledDeliveryWrapper,
  StyledErrorMessage,
} from './StyledDeliverWrapper';
import { ErrorMessage } from 'formik';

const DeliveryWrapper = ({ handleChangeFn }) => {
  return (
    <StyledDeliveryWrapper>
      <Heading headingType="h6">Delivery method</Heading>
      <RadioButton
        name="delivery"
        value="fedex"
        icon={iconsTypes.fedex}
        onChangeFn={handleChangeFn}
      >
        $20.00
      </RadioButton>
      <RadioButton
        name="delivery"
        value="dhl"
        icon={iconsTypes.dhl}
        onChangeFn={handleChangeFn}
      >
        $12.00
      </RadioButton>
      <RadioButton
        name="delivery"
        value="inpost"
        icon={iconsTypes.inpost}
        onChangeFn={handleChangeFn}
      >
        $15.00
      </RadioButton>
      <RadioButton
        name="delivery"
        value="dpd"
        icon={iconsTypes.dpd}
        onChangeFn={handleChangeFn}
      >
        $10.00
      </RadioButton>

      <StyledErrorMessage>
        <ErrorMessage name="delivery" />
      </StyledErrorMessage>
    </StyledDeliveryWrapper>
  );
};

export default DeliveryWrapper;
