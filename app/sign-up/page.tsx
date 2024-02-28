import SignUp from '@components/signUp/SignUp';
import { getServerSession } from 'next-auth';
import { authOptions } from '@lib/auth';
import { redirect } from 'next/navigation';

export default async function page() {
  const session = await getServerSession(authOptions);
  if (session && session.user) redirect('/');

  return (
    <main>
      <SignUp />
    </main>
  );
}
