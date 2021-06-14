import * as Yup from 'yup';

const contactSchema = Yup.object().shape({
  nameAndSurname: Yup.string()
    .required('Enter Name and Surname')
    .min(6, 'Name and surname must be 6 letters'),
  email: Yup.string().email('Invalid email!').required('Enter your email'),
  subject: Yup.string().required('Enter subject'),
  message: Yup.string().required('Enter message').min(25, 'Message too short'),
  acceptTerms: Yup.bool().oneOf([true], 'You must accept terms'),
});

export default contactSchema;
