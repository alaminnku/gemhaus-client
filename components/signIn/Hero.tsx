import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.container}>
      <Image
        src='/sign-in/hero-bg.png'
        width={1600}
        height={1600}
        quality={100}
        alt='Hero background'
        className={styles.background}
      />

      <div className={styles.content}>
        <h1>Discover the GemHaus difference.</h1>
        <p>Find your place, or hire industry leading housing experts.</p>
        <img src='/sign-in/promotion.png' className={styles.promotion} />
      </div>
    </div>
  );
}
