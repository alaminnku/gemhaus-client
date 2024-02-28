import SignIn from '@components/signIn/SignIn';
import { getServerSession } from 'next-auth';
import { authOptions } from '@lib/auth';
import { redirect } from 'next/navigation';

export default async function SignInPage() {
  const session = await getServerSession(authOptions);
  if (session && session.user) redirect('/');

  return (
    <main>
      <SignIn />
    </main>
  );
}
