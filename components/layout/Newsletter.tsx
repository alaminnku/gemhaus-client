import styles from '@components/layout/Newsletter.module.css';
import SubmitButton from '@components/layout/SubmitButton';
import newsletter from '@public/layout/newsletter.png';
import Image from 'next/image';

export default function Newsletter() {
  async function handleSubscribe(formData: FormData) {
    'use server';
  }
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <Image src={newsletter} alt='Property images' />

        <form action={handleSubscribe}>
          <h2>
            Subscribe To Our <br /> Newsletter
          </h2>
          <div className={styles.input_and_button}>
            <input type='email' name='email' placeholder='Write your email' />
            <SubmitButton text='Submit' style={{ padding: '.75rem 2rem' }} />
          </div>
        </form>
      </div>
    </section>
  );
}