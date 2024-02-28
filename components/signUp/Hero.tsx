import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.container}>
      <Image
        src='/sign-up/hero-bg-mobile.png'
        width={500}
        height={500}
        alt='Hero background'
        className={styles.background_image}
      />

      <div className={styles.content}>
        <h1>Discover the GemHaus difference.</h1>
        <p>Find your place, or hire industry leading housing experts.</p>
        <img src='/sign-up/promo-mobile.png' />
      </div>
    </section>
  );
}
