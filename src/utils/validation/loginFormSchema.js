import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email().required('Email is a required field'),
});

export default loginSchema;
