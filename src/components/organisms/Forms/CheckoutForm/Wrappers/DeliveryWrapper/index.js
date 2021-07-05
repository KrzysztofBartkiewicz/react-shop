import React, { useContext } from 'react';
import Heading from '../../../../../atoms/Heading';
import RadioButton from '../../../../../atoms/RadioButton';
import RootContext from '../../../../../../context/RootContext';
import {
  StyledDeliveryWrapper,
  StyledErrorMessage,
} from './StyledDeliverWrapper';
import { ErrorMessage } from 'formik';

const DeliveryWrapper = ({ handleChangeFn }) => {
  const { deliveryMethods } = useContext(RootContext);

  return (
    <StyledDeliveryWrapper>
      <Heading headingType="h6">Delivery method</Heading>

      <ul>
        {deliveryMethods.map(({ id, name, icon, price }) => (
          <li key={id}>
            <RadioButton
              name="delivery"
              value={name}
              icon={icon}
              onChangeFn={handleChangeFn}
            >
              ${price}
            </RadioButton>
          </li>
        ))}
      </ul>

      <StyledErrorMessage>
        <ErrorMessage name="delivery" />
      </StyledErrorMessage>
    </StyledDeliveryWrapper>
  );
};

export default DeliveryWrapper;
