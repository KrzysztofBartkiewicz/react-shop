import React from 'react';
import Heading from '../../components/atoms/Heading';
import SignUpForm from '../../components/molecules/Forms/SignUpForm';
import ContactForm from '../../components/molecules/Forms/ContactForm';
import { StyledContact } from './StyledContact';
import CheckoutForm from '../../components/molecules/Forms/CheckoutForm';

const Contact = () => {
  return (
    <StyledContact>
      {/* <SignUpForm /> */}
      {/* <ContactForm /> */}
      <CheckoutForm />
    </StyledContact>
  );
};

export default Contact;
