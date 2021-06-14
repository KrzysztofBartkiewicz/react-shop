import React, { useContext } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import AuthContext from '../../../../context/AuthContext';
import Heading from '../../../atoms/Heading';
import FormInput from '../../../molecules/FormInput';
import signUpSchema from '../../../../utils/validation/signUpFormSchema';
import {
  StyledSignUpForm,
  StyledParagraph,
  StyledButton,
} from './StyledSignUpForm';

const SignUpForm = () => {
  const { signUp } = useContext(AuthContext);

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
          const { firstName, lastName, email, password } = values;
          signUp(email, password, firstName, lastName);
          resetForm();
        }}
        validationSchema={signUpSchema}
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
