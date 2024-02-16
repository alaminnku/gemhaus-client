import Header from '@components/layout/Header';
import styles from '@components/home/Hero.module.css';
import Image from 'next/image';
import SearchField from './SearchField';
import SearchTypes from './SearchTypes';
import AgentButton from './AgentButton';

export default function Hero() {
  return (
    <section className={styles.container}>
      <Header isYellowSignIn={true} withDarkBackground={true} />

      <div className={styles.mobile}>
        <div className={styles.search}>
          <SearchTypes />
          <SearchField />
        </div>

        <div className={styles.mobile_cta}>
          <span>Sign up for management today, 1st month on GemHaus</span>
          <p>Find your place, or hire industry experts.</p>
          <AgentButton />
        </div>
      </div>

      <div className={styles.desktop}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h1>Discover the GemHaus difference.</h1>
            <p>Find your place, or hire industry leading management experts.</p>
          </div>

          <div className={styles.search}>
            <div className={styles.desktop_cta_and_search_types}>
              <div className={styles.desktop_cta}>
                <p className={styles.desktop_cta_title}>What's next?</p>
                <p className={styles.desktop_cta_subtitle}>
                  Enter in your trip dates, or find a new place.
                </p>
              </div>
              <SearchTypes />
            </div>
            <SearchField />
          </div>
        </div>
        <Image
          src='/home/hero-bg.jpg'
          width={400}
          height={400}
          alt='Family image'
          className={styles.background_image}
        />
      </div>
    </section>
  );
}
