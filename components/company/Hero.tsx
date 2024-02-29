import styles from './Hero.module.css';
import Header from '@components/layout/Header';
import Image from 'next/image';

export default function GenericHero() {
  return (
    <section className={styles.container}>
      <Header
        isDarkBackground={true}
        withDarkBackground={true}
        isYellowSignIn={true}
      />
      <h1>Company</h1>
      <Image
        priority
        width={800}
        height={500}
        quality={100}
        src='/company/hero-bg.png'
        alt='Background image'
        className={styles.background_image}
      />
    </section>
  );
}
