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
} from './StyledCheckoutForm';

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
        }}
        validationSchema={validationSchema}
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
          </Form>
        )}
      </Formik>
    </StyledCheckoutForm>
  );
};

export default CheckoutForm;
