'use client';

import { fetchGemhausData } from '@lib/utils';
import styles from './Hero.module.css';
import { useAlert } from '@contexts/Alert';

export default function Hero() {
  const { setAlert } = useAlert();

  async function handleSubmit(formData: FormData) {
    const { data, error } = await fetchGemhausData('/subscribers', {
      method: 'POST',
      body: formData,
    });

    if (error) return setAlert({ message: error.message, type: 'failed' });
    setAlert({ message: data.message, type: 'success' });
  }

  return (
    <section className={styles.container}>
      <p>Our Blog</p>
      <h1>Stories and Interview</h1>
      <p>
        Subscribe to learn about new sales, the latest rental houses, and
        updates
      </p>

      <form className={styles.subscribe} action={handleSubmit}>
        <div className={styles.input_agreement}>
          <input type='email' placeholder='Email' />
          <div className={styles.agreement}>
            <div className={styles.agreement}>
              <input id='agreement' type='checkbox' />
              <label htmlFor='agreement'>
                Keep me updated for every new sale
              </label>
            </div>
          </div>
        </div>

        <button type='submit'>
          Subscribe{' '}
          <img src='/blog/white-right-arrow.png' alt='White right arrow' />
        </button>
      </form>
    </section>
  );
}
