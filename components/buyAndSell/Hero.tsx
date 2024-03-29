import styles from './Hero.module.css';
import Link from 'next/link';

export default function GenericHero() {
  return (
    <section className={styles.container}>
      <h1>Buy & Sell Property</h1>
      <p> Navigating Your Real Estate Journey with Expertise and Ease</p>
      <Link href='/agents'>
        Take me to Agent page <img src='/layout/white-right-arrow.png' />
      </Link>
      <img
        src='/buy-and-sell/hero-art.png'
        className={styles.art_image}
        alt='Money vector image'
      />
    </section>
  );
}
