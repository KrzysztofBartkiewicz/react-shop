import React, { useContext } from 'react';
import { Formik, ErrorMessage, Form } from 'formik';
import AuthContext from '../../../../context/AuthContext';
import contactSchema from '../../../../utils/validation/contactFormSchema';
import FormInput from '../../../molecules/FormInput';
import Textarea from '../../../atoms/Textarea';
import Heading from '../../../atoms/Heading';
import emailjs from 'emailjs-com';
import {
  StyledContactForm,
  StyledParagraph,
  StyledSubmitBtn,
} from './StyledContactForm';

const ContactForm = () => {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);

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
        validationSchema={contactSchema}
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
              label="Name and surname"
              name="nameAndSurname"
              value={
                currentUser
                  ? `${currentUser.firstName} ${currentUser.lastName}`
                  : values.nameAndSurname
              }
              onChangeFn={handleChange}
              errorMsg={!currentUser && <ErrorMessage name="nameAndSurname" />}
              disabled={currentUser}
            />

            <FormInput
              label="Email"
              type="email"
              name="email"
              value={currentUser ? currentUser.email : values.email}
              onChangeFn={handleChange}
              errorMsg={!currentUser && <ErrorMessage name="email" />}
              disabled={currentUser}
            />

            <FormInput
              label="Subject"
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