'use client';

import styles from './ContactForm.module.css';
import SubmitButton from '../layout/SubmitButton';
import { fetchGemhausData } from '@lib/utils';
import { useAlert } from 'contexts/Alert';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  id: string;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function ContactForm({ id, setShowModal }: Props) {
  const { setAlert } = useAlert();

  async function handleSubmit(formData: FormData) {
    const { data, error } = await fetchGemhausData(`/mail/agent/${id}`, {
      method: 'POST',
      body: formData,
    });

    if (error) return setAlert({ message: error.message, type: 'failed' });

    setAlert({ message: data.message, type: 'success' });
    setShowModal(false);
  }

  return (
    <form action={handleSubmit} className={styles.container}>
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
      <SubmitButton text='Submit Form' />
    </form>
  );
}
