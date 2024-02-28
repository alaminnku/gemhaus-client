'use client';

import { signIn } from 'next-auth/react';
import styles from './Form.module.css';
import Link from 'next/link';
import { useAlert } from 'contexts/Alert';
import { useRouter } from 'next/navigation';
import { fetchGemhausData, isValidEmail } from '@lib/utils';

export default function SignUpForm() {
  const router = useRouter();
  const { setAlert } = useAlert();

  async function credentialSignUp(formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    if (!name || !email || !password)
      return setAlert({
        message: 'Name, email or password is missing',
        type: 'failed',
      });
    if (!isValidEmail(email as string))
      return setAlert({
        message: 'Please provide a valid email',
        type: 'failed',
      });

    // Add the user details to db
    const { error } = await fetchGemhausData('/user/sign-up', {
      method: 'POST',
      body: formData,
    });
    if (error) return setAlert({ message: error.message, type: 'failed' });

    // Create session
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
      <img src='/layout/logo.png' className={styles.logo} alt='GemHaus logo' />
      <h2 className={styles.mobile_header}>Sign up</h2>
      <h2 className={styles.desktop_header}>
        Welcome to <br />
        GemHaus
      </h2>
      <form action={credentialSignUp}>
        <input type='text' name='name' placeholder='Full name' />
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>

      <p className={styles.sign_in}>
        Already have an account? <Link href='/sign-in'>Sign in</Link>
      </p>

      <div className={styles.divider}>
        <span></span>
        <p>or</p>
        <span></span>
      </div>

      <div className={styles.o_auth} onClick={googleSignIn}>
        <img src='/sign-up/google-icon.png' alt='Google icon' />
        <p>Continue with Google</p>
      </div>
    </div>
  );
}
