'use client';

import styles from './ContactForm.module.css';
import SubmitButton from '../layout/SubmitButton';
import {
  fetchGemhausData,
  inter,
  showErrorAlert,
  showSuccessAlert,
} from '@lib/utils';
import { useAlert } from 'contexts/Alert';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

type Props = {
  title?: string;
  showSubject?: boolean;
  showOptions?: boolean;
  buttonFontSize?: string;
  setShowModal?: Dispatch<SetStateAction<boolean>>;
};

export default function ContactForm({
  title,
  setShowModal,
  buttonFontSize,
  showSubject = true,
  showOptions = false,
}: Props) {
  const { setAlerts } = useAlert();
  const [services, setServices] = useState<string[]>([]);

  function handleServicesChange(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    setServices((prevState) =>
      !e.target.checked && prevState.includes(name)
        ? prevState.filter((offering) => offering !== name)
        : [...prevState, name]
    );
  }

  async function handleSubmit(formData: FormData) {
    formData.append('services', services.join(', '));
    const { data, error } = await fetchGemhausData('/mail/query', {
      method: 'POST',
      body: formData,
    });

    if (error) return showErrorAlert(error, setAlerts);
    if (setShowModal) setShowModal(false);
    showSuccessAlert(data, setAlerts);
  }
  return (
    <form
      action={handleSubmit}
      className={`${styles.container} ${inter.className}`}
    >
      {title && <p className={styles.title}>{title}</p>}

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
      {showOptions && (
        <div className={styles.options}>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='shortTermRental'
              name='Short term rental management'
              checked={services.includes('Short term rental management')}
              onChange={handleServicesChange}
            />
            <label htmlFor='shortTermRental'>
              Short term rental management
            </label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='longTermRental'
              name='Long term rental management'
              onChange={handleServicesChange}
              checked={services.includes('Long term rental management')}
            />
            <label htmlFor='longTermRental'>Long term rental management</label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='buyAndSell'
              name='Buy and sell'
              onChange={handleServicesChange}
              checked={services.includes('Buy and sell')}
            />
            <label htmlFor='buyAndSell'>Buying and selling</label>
          </div>
        </div>
      )}
      {showSubject && (
        <div className={styles.item}>
          <label htmlFor='subject'>Subject</label>
          <input
            type='text'
            id='subject'
            name='subject'
            placeholder='Subject'
          />
        </div>
      )}
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

      <SubmitButton
        text='Submit Form'
        style={{ width: '100%', fontSize: buttonFontSize }}
      />
    </form>
  );
}
