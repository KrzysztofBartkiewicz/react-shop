import * as yup from 'yup';

const checkoutSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('Name is a required field')
    .min(3, 'Name must be at least 3 characters'),
  lastName: yup
    .string()
    .required('Last name is a required field')
    .min(3, 'Last name must be at least 3 characters'),
  email: yup.string().email().required('Email is a required field'),
  address: yup.string().required('Address is a required field'),
  city: yup
    .string()
    .required('City is a required field')
    .min(3, 'City must be at least 3 characters'),
  postalCode: yup.string().required('Postal code is a required field'),
  phoneNumber: yup
    .string()
    .required('Phone number is a required field')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'Phone number is not valid'
    ),
});

export default checkoutSchema;
