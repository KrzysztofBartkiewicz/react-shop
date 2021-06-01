import React, { useState, useEffect } from 'react';
import { Form, Formik, ErrorMessage } from 'formik';
import Button from '../../../atoms/Button';
import Heading from '../../../atoms/Heading';
import FormInput from '../../FormInput';
import Select from '../../../molecules/Select';
import useAxiosRequest from '../../../../hooks/api/useAxiosRequest';
import { url } from '../../../../helpers/urls';
import * as yup from 'yup';
import {
  StyledCheckoutForm,
  StyledButtonsWrapper,
  StyledShippingInfoWrapper,
  StyledPaymentWrapper,
} from './StyledCheckoutForm';
import RadioButton from '../../../atoms/RadioButton';
import { iconsTypes } from '../../../../helpers/iconsTypes';

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Name is a required field')
    .min(3, 'Name must be at least 3 characters'),
  lastName: yup
    .string()
    .required('Last name is a required field')
    .min(3, 'Last name must be at least 3 characters'),
  email: yup.string().email().required('Email is a required field'),
  city: yup
    .string()
    .required('City is required field')
    .min(3, 'City must be at least 3 characters'),
  phoneNumber: yup
    .string()
    .required('Phone number is required field')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    ),
});

const CheckoutForm = () => {
  const [countries, setCountries] = useState([]);
  const { data } = useAxiosRequest(url.countries);

  useEffect(() => {
    if (data) {
      const countriesArr = data.map((country) => country.name);
      setCountries(countriesArr);
    }
  }, [data]);

  return (
    <StyledCheckoutForm>
      <Heading>Shipping and Payment</Heading>
      <StyledButtonsWrapper>
        <Button>LOG IN</Button>
        <Button secondary>SIGN IN</Button>
      </StyledButtonsWrapper>
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
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange }) => (
          <Form>
            <StyledShippingInfoWrapper>
              <FormInput
                label="Email"
                type="email"
                name="email"
                value={values.email}
                onChangeFn={handleChange}
                errorMsg={<ErrorMessage name="email" />}
              />
              <FormInput
                label="Address"
                name="address"
                value={values.address}
                onChangeFn={handleChange}
                errorMsg={<ErrorMessage name="address" />}
              />
              <FormInput
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChangeFn={handleChange}
                errorMsg={<ErrorMessage name="firstName" />}
              />
              <FormInput
                label="City"
                name="city"
                value={values.city}
                onChangeFn={handleChange}
                errorMsg={<ErrorMessage name="city" />}
              />
              <FormInput
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChangeFn={handleChange}
                errorMsg={<ErrorMessage name="lastName" />}
              />
              <FormInput
                label="Postal Code"
                name="postalCode"
                value={values.postalCode}
                onChangeFn={handleChange}
                errorMsg={<ErrorMessage name="postalCode" />}
              />
              <FormInput
                type="tel"
                label="Phone Number"
                name="phoneNumber"
                value={values.phoneNumber}
                onChangeFn={handleChange}
                errorMsg={<ErrorMessage name="phoneNumber" />}
              />
              <Select
                name="country"
                selectValue={values.country}
                optionArray={countries}
                onChangeFn={handleChange}
              />
            </StyledShippingInfoWrapper>
            <StyledPaymentWrapper>
              <RadioButton
                name="payment"
                value="paypal"
                icon={iconsTypes.paypal}
                onChangeFn={handleChange}
              />
              <RadioButton
                name="payment"
                value="visa"
                icon={iconsTypes.visa}
                onChangeFn={handleChange}
              />
            </StyledPaymentWrapper>

            <Button type="submit">SEND</Button>
          </Form>
        )}
      </Formik>
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
