'use client';

import { signIn } from 'next-auth/react';
import styles from './Form.module.css';
import Link from 'next/link';

export default function Form() {
  async function handleSignUp(formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) return;
    signIn('credentials', { email, password });
  }

  return (
    <div className={styles.container}>
      <img src='/layout/logo.png' className={styles.logo} />
      <h2 className={styles.mobile_header}>Log in</h2>
      <h2 className={styles.desktop_header}>
        Welcome to <br />
        GemHaus
      </h2>
      <form action={handleSignUp}>
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <div>
          <input type='checkbox' id='remember' />
          <label htmlFor='remember'>Remember me</label>
        </div>
        <button type='submit'>Sign in</button>
      </form>

      <div className={styles.divider}>
        <span></span>
        <p>or</p>
        <span></span>
      </div>

      <div className={styles.o_auth} onClick={() => signIn('google')}>
        <img src='/sign-in/google-icon.png' />
        <p>Continue with Google</p>
      </div>

      <p className={styles.sign_up}>
        Not a member? <Link href='/sign-up'>Sign up now</Link>
      </p>
    </div>
  );
}
