import { Metadata } from 'next';
import ApplicantLoginComponent from '@/components/auth/applicantLogin';
 
export const metadata: Metadata = {
  title: 'Applicant Login',
};


export default function ApplicantLogin() {

    return (
        <>
        <ApplicantLoginComponent />
        </>
 )   
}