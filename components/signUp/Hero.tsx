import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.container}>
      <Image
        src='/sign-up/hero-bg-mobile.png'
        width={500}
        height={500}
        alt='Hero background'
        className={styles.background_mobile}
      />
      <Image
        src='/sign-up/hero-bg-desktop.png'
        width={500}
        height={500}
        alt='Hero background'
        className={styles.background_desktop}
      />

      <div className={styles.content}>
        <h1>Discover the GemHaus difference.</h1>
        <p>Find your place, or hire industry leading housing experts.</p>
        <img src='/sign-up/promo-mobile.png' className={styles.promo_mobile} />
        <img
          src='/sign-up/promo-desktop.png'
          className={styles.promo_desktop}
        />
      </div>
    </div>
  );
}
