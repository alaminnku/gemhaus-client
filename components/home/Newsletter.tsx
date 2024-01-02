'use client';

import styles from '@components/home/Newsletter.module.css';
import newsletter from '@public/property.jpg';
import Image from 'next/image';
import { FormEvent } from 'react';

export default function Newsletter() {
  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();
  }
  return (
    <section className={styles.container}>
      <Image src={newsletter} alt='Property image' />

      <form onSubmit={handleSubscribe}>
        <h2>Subscribe To Our Newsletter</h2>
        <div className={styles.inputs}>
          <input type='email' placeholder='Enter your email' />
          <input type='submit' value='Subscribe Us' />
        </div>
      </form>
    </section>
  );
}
