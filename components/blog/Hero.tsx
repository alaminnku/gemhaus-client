import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.container}>
      <p>Our Blog</p>
      <h1>Stories and Interview</h1>
      <p>
        Subscribe to learn about new sales, the lastes rental houses, and
        updates
      </p>

      <form className={styles.subscribe}>
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
