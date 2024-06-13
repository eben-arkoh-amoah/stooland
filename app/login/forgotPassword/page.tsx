import { Metadata } from 'next';
import ForgotPasswordComponent from '@/components/auth/forgotPassword';
 
export const metadata: Metadata = {
  title: 'Forgot password',
};


export default function UserLogin() {

    return (
        <>
        <ForgotPasswordComponent />
        </>
 )   
}

