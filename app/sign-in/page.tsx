'use client';

import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return <div onClick={() => signIn('google')}>Sign in</div>;
}
