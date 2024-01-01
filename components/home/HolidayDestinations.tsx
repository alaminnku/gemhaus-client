import Link from 'next/link';
import styles from '@components/home/HolidayDestinations.module.css';
import Properties from './Properties';

export default function HolidayDestinations() {
  return (
    <section className={styles.container}>
      <span>Featured Gems</span>
      <h2>
        Trending Holiday <br /> Destinations
      </h2>

      <Properties />

      <p className={styles.explore_text}>
        Continue Exploring Trending HOliday Destinations
      </p>

      <Link className={styles.explore_button} href='/'>
        Explore More
      </Link>
    </section>
  );
}
