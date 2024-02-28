'use client';

import { signIn } from 'next-auth/react';
import styles from './Form.module.css';
import Link from 'next/link';
import { useAlert } from '@contexts/Alert';
import { isValidEmail } from '@lib/utils';
import { useRouter } from 'next/navigation';

export default function SignInForm() {
  const router = useRouter();
  const { setAlert } = useAlert();

  async function credentialSignIn(formData: FormData) {
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password)
      return setAlert({
        message: 'Email or password is missing',
        type: 'failed',
      });
    if (!isValidEmail(email as string))
      return setAlert({
        message: 'Please provide a valid email',
        type: 'failed',
      });

    const response = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    if (response?.error)
      return setAlert({ message: response.error, type: 'failed' });

    router.push('/');
  }

  async function googleSignIn() {
    signIn('google', { redirect: false, callbackUrl: '/' });
  }

  return (
    <div className={styles.container}>
      <Link href='/'>
        <img src='/layout/logo.png' className={styles.logo} />
      </Link>
      <h2 className={styles.mobile_header}>Log in</h2>
      <h2 className={styles.desktop_header}>
        Welcome to <br />
        GemHaus
      </h2>
      <form action={credentialSignIn}>
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

      <div className={styles.o_auth} onClick={googleSignIn}>
        <img src='/sign-in/google-icon.png' />
        <p>Continue with Google</p>
      </div>

      <p className={styles.sign_up}>
        Not a member? <Link href='/sign-up'>Sign up now</Link>
      </p>
    </div>
  );
}
