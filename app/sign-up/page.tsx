'use client';

import { signIn } from 'next-auth/react';

export default function page() {
  async function handleSignUp(formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    if (!name || !email || !password) return;
    signIn('credentials', { email, password });
  }

  return (
    <main>
      <form action={handleSignUp}>
        <input type='text' name='name' placeholder='Full name' />
        <input type='email' name='email' placeholder='john@example.com' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Submit</button>
      </form>
    </main>
  );
}
