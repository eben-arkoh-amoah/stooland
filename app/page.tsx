import { Metadata } from 'next';
import SignUp from '@/components/auth/signUp';
 
export const metadata: Metadata = {
  title: 'Stool Land',
  description: 'Traditionally official ways of owning a land',
};

export default function Home() {

  return (
    <>
      <SignUp />
    </>
  );
}
