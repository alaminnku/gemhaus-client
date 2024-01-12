import Link from 'next/link';
import styles from '@components/home/HolidayDestinations.module.css';
import PropertyCards from './PropertyCards';
import { getData } from '@lib/utils';
import Error from '@components/layout/Error';

export default async function HolidayDestinations() {
  const { data, error } = await getData('/properties', {
    cache: 'no-cache',
  });
  const properties = data.slice(0, 3);

  return (
    <section className={styles.container}>
      <span>Featured Gems</span>
      <h2>
        Trending Holiday <br /> Destinations
      </h2>

      {error ? (
        <Error error={error} />
      ) : (
        <PropertyCards properties={properties} />
      )}

      <p className={styles.explore_text}>
        Continue Exploring Trending Holiday Destinations
      </p>

      <Link className={styles.explore_button} href='/properties'>
        Explore More
      </Link>
    </section>
  );
}
