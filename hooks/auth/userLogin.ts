import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(8).required('Password is required'),
});

export const useLoginForm = () => {
  return useForm({
    resolver: yupResolver(loginSchema),
  });
};
