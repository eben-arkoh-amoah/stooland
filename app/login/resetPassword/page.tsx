import { Metadata } from 'next';
import Resetpassword from '@/components/auth/resetPassword';
 
export const metadata: Metadata = {
  title: 'Reset password',
};


export default function UserLogin() {

    return (
        <>
        <Resetpassword />
        </>
 )   
}

