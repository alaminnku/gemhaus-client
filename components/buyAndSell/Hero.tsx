import styles from '@components/buyAndSell/Hero.module.css';
import Header from '@components/layout/Header';

export default function Hero() {
  return (
    <section className={styles.container}>
      <Header />

      <h1>
        Buy & Sell <br /> Property
      </h1>
    </section>
  );
}
