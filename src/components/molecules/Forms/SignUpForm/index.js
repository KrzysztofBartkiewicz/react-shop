import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Heading from '../../../atoms/Heading';
import FormInput from '../../FormInput';
import {
  StyledSignUpForm,
  StyledParagraph,
  StyledButton,
} from './StyledSignUpForm';

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
  password: yup
    .string()
    .required('Please enter your password')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    ),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .when('password', {
      is: (password) => (password && password.length > 0 ? true : false),
      then: yup.string().oneOf([yup.ref('password')], "Password doesn't match"),
    }),
  acceptTerms: yup.bool().oneOf([true], 'You must accept terms'),
});

const SignUpForm = () => {
  return (
    <StyledSignUpForm>
      <Heading headingType="h5">
        Create an account and <br /> discover the benefits
      </Heading>
      <StyledParagraph size="xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s
      </StyledParagraph>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false,
        }}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
        }}
        validationSchema={validationSchema}
      >
        {({ values, handleChange }) => (
          <Form>
            <FormInput
              label="First Name"
              name="firstName"
              value={values.firstName}
              onChangeFn={handleChange}
              errorMsg={<ErrorMessage name="firstName" />}
            />
            <FormInput
              label="Last Name"
              name="lastName"
              value={values.lastName}
              onChangeFn={handleChange}
              errorMsg={<ErrorMessage name="lastName" />}
            />
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={values.email}
              onChangeFn={handleChange}
              errorMsg={<ErrorMessage name="email" />}
            />
            <FormInput
              label="Password"
              type="password"
              name="password"
              value={values.password}
              onChangeFn={handleChange}
              errorMsg={<ErrorMessage name="password" />}
            />
            <FormInput
              label="Repeat Password"
              type="password"
              name="confirmPassword"
              value={values.confirmPassword}
              onChangeFn={handleChange}
              errorMsg={<ErrorMessage name="confirmPassword" />}
            />
            <StyledButton type="submit">Sign up</StyledButton>
            <FormInput
              label="I agree to the Google Terms of Service and Privacy Policy"
              type="checkbox"
              name="acceptTerms"
              value={values.acceptTerms}
              onChangeFn={handleChange}
              errorMsg={<ErrorMessage name="acceptTerms" />}
            />
          </Form>
        )}
      </Formik>
    </StyledSignUpForm>
  );
};

export default SignUpForm;
