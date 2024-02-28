'use client';

import { signIn } from 'next-auth/react';
import styles from './Form.module.css';

export default function Form() {
  async function handleSignUp(formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    if (!name || !email || !password) return;
    signIn('credentials', { email, password });
  }

  return (
    <section className={styles.container}>
      <h2>Sign up</h2>
      <form action={handleSignUp}>
        <input type='text' name='name' placeholder='Full name' />
        <input type='email' name='email' placeholder='john@example.com' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>

      <div className={styles.divider}>
        <span></span>
        <p>or</p>
        <span></span>
      </div>

      <div className={styles.o_auth} onClick={() => signIn('google')}>
        <img src='/sign-up/google-icon.png' />
        <p>Continue with Google</p>
      </div>
    </section>
  );
}
