import Link from 'next/link';
import styles from '@components/home/HolidayDestinations.module.css';
import PropertyCards from './PropertyCards';
import { getGemhausData } from '@lib/utils';
import Error from '@components/layout/Error';

export default async function HolidayDestinations() {
  const { data, error } = await getGemhausData('/properties', {
    cache: 'no-cache',
  });

  return (
    <section className={styles.container}>
      <span>Featured Gems</span>
      <h2>
        Trending Holiday <br /> Destinations
      </h2>

      {error ? (
        <Error error={error} />
      ) : (
        <PropertyCards properties={data.slice(0, 3)} />
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
