import React from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import FormInput from '../../../molecules/FormInput';
import Textarea from '../../../atoms/Textarea';
import Heading from '../../../atoms/Heading';
import emailjs from 'emailjs-com';
import {
  StyledContactForm,
  StyledParagraph,
  StyledSubmitBtn,
} from './StyledContactForm';

const contactValidSchema = Yup.object().shape({
  nameAndSurname: Yup.string()
    .required('Enter Name and Surname')
    .min(6, 'Name and surname must be 6 letters'),
  email: Yup.string().email('Invalid email!').required('Enter your email'),
  subject: Yup.string().required('Enter subject'),
  message: Yup.string().required('Enter message').min(25, 'Message too short'),
  acceptTerms: Yup.bool().oneOf([true], 'You must accept terms'),
});

const ContactForm = () => {
  return (
    <StyledContactForm>
      <Heading headingType="h5">Contact</Heading>
      <StyledParagraph size="xs">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry'
      </StyledParagraph>
      <Formik
        initialValues={{
          nameAndSurname: '',
          email: '',
          subject: '',
          message: '',
          acceptTerms: false,
        }}
        validationSchema={contactValidSchema}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              values,
              process.env.REACT_APP_USER_ID
            )
            .then((res) => {
              console.log(res);
              alert('EMAIL SENT');
            })
            .catch((err) => console.log(err));

          resetForm();
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <FormInput
              label="Email"
              type="email"
              name="nameAndSurname"
              value={values.nameAndSurname}
              onChangeFn={handleChange}
              errorMsg={<ErrorMessage name="nameAndSurname" />}
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
              label="Subject"
              type="subject"
              name="subject"
              value={values.subject}
              onChangeFn={handleChange}
              errorMsg={<ErrorMessage name="subject" />}
            />

            <Textarea
              placeholder="Message"
              name="message"
              value={values.message}
              onChangeFn={handleChange}
            />
            <ErrorMessage name="message" />

            <FormInput
              label="Accept terms"
              type="checkbox"
              name="acceptTerms"
              value={values.acceptTerms}
              onChangeFn={handleChange}
              errorMsg={<ErrorMessage name="acceptTerms" />}
            />

            <StyledSubmitBtn type="submit">Send</StyledSubmitBtn>
          </Form>
        )}
      </Formik>
    </StyledContactForm>
  );
};

export default ContactForm;
