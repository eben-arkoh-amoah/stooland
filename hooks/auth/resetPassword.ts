import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const resetPasswordSchema = yup.object().shape({
  password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required('Confirm Password is required'),
});


export const useResetPasswordForm = () => {
  return useForm({
    resolver: yupResolver(resetPasswordSchema),
  });
};
