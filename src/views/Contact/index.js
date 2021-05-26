import React from 'react';
import Heading from '../../components/atoms/Heading';
import SignUpForm from '../../components/molecules/Forms/SignUpForm';
import ContactForm from '../../components/molecules/Forms/ContactForm';
import { StyledContact } from './StyledContact';

const Contact = () => {
  return (
    <StyledContact>
      <Heading headingType="h6">Contact</Heading>
      <SignUpForm />
    </StyledContact>
  );
};

export default Contact;
