import { Metadata } from 'next';

import UserLoginComponent from '@/components/auth/userLogin';
 
export const metadata: Metadata = {
  title: 'User Login',
};


export default function UserLogin() {

    return (
        <>
        <UserLoginComponent />
        </>
 )   
}

