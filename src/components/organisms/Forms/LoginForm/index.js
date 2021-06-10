import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Heading from '../../../atoms/Heading';
import FormInput from '../../../molecules/FormInput';
import Button from '../../../atoms/Button';
import {
  StyledLoginForm,
  StyledParagraph,
  StyledInnerWrapper,
  StyledButtonsWrapper,
  StyledBottomWrapper,
  StyledSubmitBtn,
} from './StyledLoginForm';
import { auth, provider } from '../../../../firebase/firebaseConfig';
import { usersCollections } from '../../../../firebase/firestoreUtils';

const validationSchema = yup.object().shape({
  email: yup.string().email().required('Email is a required field'),
});

const googleSignUp = () => {
  auth
    .signInWithPopup(provider)
    .then((user) => {
      if (user.additionalUserInfo.isNewUser) {
        const { email, given_name, family_name } =
          user.additionalUserInfo.profile;
        usersCollections.doc(user.user.uid).set({
          email: email,
          firstName: given_name,
          lastName: family_name,
          orders: [],
        });
      }
    })
    .catch((error) => console.log(error));
};

const SignUpForm = () => {
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
          // alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={validationSchema}
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
              <Button onClickFn={googleSignUp} gmail>
                Gmail
              </Button>
            </StyledButtonsWrapper>
            <StyledSubmitBtn type="submit">Sign up</StyledSubmitBtn>
            <StyledBottomWrapper>
              <p>Not a member yet?</p>
              <p>Sign up</p>
            </StyledBottomWrapper>
          </Form>
        )}
      </Formik>
    </StyledLoginForm>
  );
};

export default SignUpForm;
