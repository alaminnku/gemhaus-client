import Image from 'next/image';
import styles from './Hero.module.css';
import SearchField from './SearchFiled';

export default function Hero() {
  return (
    <section className={styles.container}>
      <h1>
        <span>Meet our Agents</span> <br /> Who You Work With to Buy or Sell
        Your Home Matters
      </h1>

      <SearchField />

      <Image
        src='/agents/mobile-background.png'
        width={800}
        height={500}
        alt='Agents icon'
        className={styles.mobile_background}
      />

      <Image
        src='/agents/desktop-background.png'
        width={800}
        height={500}
        alt='Agents icon'
        className={styles.desktop_background}
      />
    </section>
  );
}
