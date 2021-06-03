import React from 'react';

import { StyledContact } from './StyledContact';
import CheckoutForm from '../../components/organisms/Forms/CheckoutForm';
import LoginForm from '../../components/organisms/Forms/LoginForm';

const Contact = () => {
  return (
    <StyledContact>
      {/* <SignUpForm /> */}
      {/* <ContactForm /> */}
      {/* <CheckoutForm /> */}
      <LoginForm />
    </StyledContact>
  );
};

export default Contact;
