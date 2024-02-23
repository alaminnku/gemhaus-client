'use client';

import styles from '@components/layout/Newsletter.module.css';
import SubmitButton from '@components/layout/SubmitButton';
import { fetchGemhausData, showErrorAlert, showSuccessAlert } from '@lib/utils';
import { useAlert } from 'contexts/Alert';
import Image from 'next/image';
import { CSSProperties } from 'react';

type Props = {
  hasBackground?: boolean;
};

export default function Newsletter({ hasBackground }: Props) {
  const { setAlerts } = useAlert();

  async function handleSubscribe(formData: FormData) {
    const { data, error } = await fetchGemhausData('/subscribers/add', {
      method: 'POST',
      body: formData,
    });

    if (error) return showErrorAlert(error, setAlerts);
    showSuccessAlert(data, setAlerts);
  }
  return (
    <section
      className={styles.container}
      style={
        {
          '--bgColor': hasBackground ? '#f7f7f7' : 'transparent',
        } as CSSProperties
      }
    >
      <div className={styles.content}>
        <Image
          src='/layout/newsletter.png'
          width={800}
          height={500}
          alt='Property images'
        />

        <form action={handleSubscribe}>
          <h2>
            Subscribe To Our <br /> Newsletter
          </h2>
          <div className={styles.input_and_button}>
            <input type='email' name='email' placeholder='Write your email' />
            <SubmitButton
              text='Submit'
              style={{
                fontSize: '14px',
                padding: '16px 28px',
              }}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
