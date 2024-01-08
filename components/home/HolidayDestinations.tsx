import Link from 'next/link';
import styles from '@components/home/HolidayDestinations.module.css';
import Properties from './PropertyCards';
import { fetchInstance } from '@lib/utils';
import Error from '@components/layout/Error';

export default async function HolidayDestinations() {
  const { data, error } = await fetchInstance('/properties');

  return (
    <section className={styles.container}>
      <span>Featured Gems</span>
      <h2>
        Trending Holiday <br /> Destinations
      </h2>

      {error ? <Error error={error} /> : <Properties properties={data} />}

      <p className={styles.explore_text}>
        Continue Exploring Trending HOliday Destinations
      </p>

      <Link className={styles.explore_button} href='/'>
        Explore More
      </Link>
    </section>
  );
}
