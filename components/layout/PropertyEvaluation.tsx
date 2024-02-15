'use client';

import styles from '@components/layout/PropertyEvaluation.module.css';
import { ReactNode } from 'react';
import SubmitButton from './SubmitButton';
import { fetchGemhausData, showErrorAlert, showSuccessAlert } from '@lib/utils';
import { useAlert } from 'contexts/Alert';

type Props = {
  children?: ReactNode;
};

export default function PropertyEvaluation({ children }: Props) {
  const { setAlerts } = useAlert();

  async function handleSubmit(formData: FormData) {
    const { data, error } = await fetchGemhausData(
      '/mail/property-evaluation',
      {
        method: 'POST',
        body: formData,
      }
    );

    if (error) return showErrorAlert(error, setAlerts);
    showSuccessAlert(data, setAlerts);
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>
          Property <br /> Evaluation
        </h2>
        <p>
          Unlock the Power of Flexibility. We specialize in turning your
          property into a lucrative short-term rental, optimizing your returns
          without the long-term commitment. We specialize in delivering seamless
          and profitable short-term rental experiences for property owners and
          guests alike
        </p>
      </div>

      <div className={styles.property_evaluation} id='evaluation'>
        <form action={handleSubmit}>
          <h3>It Takes Just Few Minutes!</h3>

          <div className={styles.evaluation_inputs}>
            <div className={styles.evaluation_input}>
              <label htmlFor='name'>Full name</label>
              <input
                id='name'
                name='name'
                type='text'
                placeholder='Enter your name'
              />
            </div>
            <div className={styles.evaluation_input}>
              <label htmlFor='phone'>Phone number</label>
              <input
                id='phone'
                name='phone'
                type='number'
                inputMode='numeric'
                placeholder='Enter your phone number'
              />
            </div>
            <div className={styles.evaluation_input}>
              <label htmlFor='email'>Email</label>
              <input
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email'
              />
            </div>
            <div className={styles.evaluation_input}>
              <label htmlFor='city'>City</label>
              <input
                id='city'
                name='city'
                type='text'
                placeholder='Enter your city'
              />
            </div>
            <div className={styles.evaluation_input}>
              <label htmlFor='address'>Address</label>
              <input
                id='address'
                name='address'
                type='text'
                placeholder='Enter your address'
              />
            </div>

            <div className={styles.evaluation_input}>
              <label htmlFor='state'>State</label>
              <input
                id='state'
                name='state'
                type='text'
                placeholder='Enter your state'
              />
            </div>

            {children}
          </div>

          <SubmitButton
            text='Submit Form'
            style={{
              width: 'fit-content',
              alignSelf: 'center',
              padding: '19px 32px',
            }}
          />
        </form>
      </div>
    </section>
  );
}
