import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../../../atoms/Input/CustomInput';
import Textarea from '../../../atoms/Textarea';
import Paragraph from '../../../atoms/Paragraph';
import Button from '../../../atoms/Button';
import emailjs from 'emailjs-com';

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
          <Input
            placeholder="Name and Surname"
            name="nameAndSurname"
            value={values.nameAndSurname}
            onChangeFn={handleChange}
          />
          <div style={{ color: 'yellow' }}>
            <ErrorMessage name="nameAndSurname" />
          </div>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            onChangeFn={handleChange}
          />
          <ErrorMessage name="email" />
          <Input
            placeholder="Subject"
            name="subject"
            value={values.subject}
            onChangeFn={handleChange}
          />
          <ErrorMessage name="subject" />
          <Textarea
            placeholder="Message"
            name="message"
            value={values.message}
            onChangeFn={handleChange}
          />
          <ErrorMessage name="message" />
          <Paragraph>Accept terms: </Paragraph>
          <Input
            name="acceptTerms"
            type="checkbox"
            checked={values.acceptTerms}
            onChangeFn={handleChange}
          />
          <ErrorMessage name="acceptTerms" />
          <Button type="submit">Send</Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
