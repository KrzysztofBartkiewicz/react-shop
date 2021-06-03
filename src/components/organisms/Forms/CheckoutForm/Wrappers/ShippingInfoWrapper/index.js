import React, { useState, useEffect } from 'react';
import { ErrorMessage } from 'formik';
import useAxiosRequest from '../../../../../../hooks/api/useAxiosRequest';
import { url } from '../../../../../../helpers/urls';
import Heading from '../../../../../atoms/Heading';
import Select from '../../../../../molecules/Select';
import {
  StyledShippingInfoWrapper,
  StyledFormInput,
} from './StyledShippingInfoWrapper';

const ShippingInfoWrapper = ({ values, handleChangeFn }) => {
  const [countries, setCountries] = useState([]);
  const { data } = useAxiosRequest(url.countries);

  useEffect(() => {
    if (data) {
      const countriesArr = data.map((country) => country.name);
      setCountries(countriesArr);
    }
  }, [data]);

  return (
    <StyledShippingInfoWrapper>
      <Heading headingType="h6">Shipping information</Heading>
      <StyledFormInput
        label="Email"
        type="email"
        name="email"
        value={values.email}
        onChangeFn={handleChangeFn}
        errorMsg={<ErrorMessage name="email" />}
      />
      <StyledFormInput
        label="Address"
        name="address"
        value={values.address}
        onChangeFn={handleChangeFn}
        errorMsg={<ErrorMessage name="address" />}
      />
      <StyledFormInput
        label="First Name"
        name="firstName"
        value={values.firstName}
        onChangeFn={handleChangeFn}
        errorMsg={<ErrorMessage name="firstName" />}
      />
      <StyledFormInput
        label="City"
        name="city"
        value={values.city}
        onChangeFn={handleChangeFn}
        errorMsg={<ErrorMessage name="city" />}
      />
      <StyledFormInput
        label="Last Name"
        name="lastName"
        value={values.lastName}
        onChangeFn={handleChangeFn}
        errorMsg={<ErrorMessage name="lastName" />}
      />
      <StyledFormInput
        label="Postal Code"
        name="postalCode"
        value={values.postalCode}
        onChangeFn={handleChangeFn}
        errorMsg={<ErrorMessage name="postalCode" />}
      />
      <StyledFormInput
        type="tel"
        label="Phone Number"
        name="phoneNumber"
        value={values.phoneNumber}
        onChangeFn={handleChangeFn}
        errorMsg={<ErrorMessage name="phoneNumber" />}
      />
      <Select
        name="country"
        selectValue={values.country}
        optionArray={countries}
        onChangeFn={handleChangeFn}
      />
    </StyledShippingInfoWrapper>
  );
};

export default ShippingInfoWrapper;
