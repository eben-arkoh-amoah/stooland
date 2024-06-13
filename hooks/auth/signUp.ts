import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const signUpSchema = yup.object().shape({
    name: yup.string().min(3).required('Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),
    phone: yup.string().matches(/^\d{10}$/).required('Phone is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Confirm password is required'),
});
export const useSignUpForm = () => {
    return useForm({
        resolver: yupResolver(signUpSchema),
    });
};