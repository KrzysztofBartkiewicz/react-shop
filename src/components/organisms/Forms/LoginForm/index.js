import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { routes } from '../../../../helpers/routes';
import loginSchema from '../../../../utils/validation/loginFormSchema';
import Heading from '../../../atoms/Heading';
import FormInput from '../../../molecules/FormInput';
import Button from '../../../atoms/Button';
import { useContext } from 'react';
import AuthContext from '../../../../context/AuthContext';
import {
  StyledLoginForm,
  StyledParagraph,
  StyledInnerWrapper,
  StyledButtonsWrapper,
  StyledSignupLink,
  StyledSubmitBtn,
} from './StyledLoginForm';

const SignUpForm = () => {
  const { signUpWithGoogle, logIn } = useContext(AuthContext);

  return (
    <StyledLoginForm>
      <Heading headingType="h5">Log in</Heading>
      <StyledParagraph size="xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry'
      </StyledParagraph>

      <Formik
        initialValues={{
          email: '',
          password: '',
          keepSignedin: false,
        }}
        onSubmit={(values, { resetForm }) => {
          const { email, password } = values;
          logIn(email, password);
          resetForm();
        }}
        validationSchema={loginSchema}
      >
        {({ values, handleChange }) => (
          <Form>
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
            <StyledInnerWrapper>
              <FormInput
                label="Keep me signed in"
                type="checkbox"
                name="keepSignedin"
                value={values.keepSignedin}
                onChangeFn={handleChange}
                errorMsg={<ErrorMessage name="keepSignedin" />}
              />
              <p>Forgot password?</p>
            </StyledInnerWrapper>
            <StyledButtonsWrapper>
              <Button facebook>Facebook</Button>
              <Button onClickFn={signUpWithGoogle} gmail>
                Gmail
              </Button>
            </StyledButtonsWrapper>
            <StyledSubmitBtn type="submit">Log in</StyledSubmitBtn>

            <StyledSignupLink to={routes.signup}>
              Not a member yet?
              <span>Sign up</span>
            </StyledSignupLink>
          </Form>
        )}
      </Formik>
    </StyledLoginForm>
  );
};

export default SignUpForm;
