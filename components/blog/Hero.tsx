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

      <div className={styles.subscribe}>
        <form>
          <input type='email' placeholder='Email' />
          <button type='submit'>
            Subscribe{' '}
            <img src='/blog/white-right-arrow.png' alt='White right arrow' />
          </button>
        </form>
        <div className={styles.agreement}>
          <input id='agreement' type='checkbox' />
          <label htmlFor='agreement'>Keep me updated for every new sale</label>
        </div>
      </div>
    </section>
  );
}
