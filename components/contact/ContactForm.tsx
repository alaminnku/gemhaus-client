'use client';

import styles from './ContactForm.module.css';
import SubmitButton from '../layout/SubmitButton';
import { fetchGemhausData, inter } from '@lib/utils';

export default function ContactForm() {
  async function handleSubmit(formData: FormData) {
    const { data, error } = await fetchGemhausData('/mail/query', {
      method: 'POST',
      body: formData,
    });

    if (error) return console.log(error);

    console.log(data);
  }
  return (
    <form
      className={`${styles.container} ${inter.className}`}
      action={handleSubmit}
    >
      <div className={styles.item}>
        <label htmlFor='name'>Full name</label>
        <input type='text' id='name' name='name' placeholder='Full name' />
      </div>
      <div className={styles.item}>
        <label htmlFor='email'>Email address</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Email address'
        />
      </div>
      <div className={styles.item}>
        <label htmlFor='subject'>Subject</label>
        <input type='text' id='subject' name='subject' placeholder='Subject' />
      </div>
      <div className={`${styles.item} ${styles.message}`}>
        <label htmlFor='message'>Message</label>
        <textarea
          rows={10}
          cols={60}
          id='message'
          name='message'
          placeholder='Message'
        />
      </div>

      <SubmitButton text='Submit Form' style={{ width: '100%' }} />
    </form>
  );
}
