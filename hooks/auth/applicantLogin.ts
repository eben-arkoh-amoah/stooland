import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const phoneRegExp = /^(\+?\d{1,4}|\d{1,4})?\s?\d{7,15}$/;

const loginSchema = yup.object().shape({
  phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone is required'),
  password: yup.string().min(8).required('Password is required'),
});

export const useApplicationLoginForm = () => {
  return useForm({
    resolver: yupResolver(loginSchema),
  });
};
