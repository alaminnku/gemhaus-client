import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.container}>
      <Image
        src='/sign-in/hero-bg-desktop.png'
        width={1600}
        height={1600}
        quality={100}
        alt='Hero background'
        className={styles.background_desktop}
      />

      <div className={styles.content}>
        <h1>Discover the GemHaus difference.</h1>
        <p>Find your place, or hire industry leading housing experts.</p>
        <img src='/sign-in/promo.png' className={styles.promo} />
      </div>
    </div>
  );
}
