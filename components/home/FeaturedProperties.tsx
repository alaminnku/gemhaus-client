import FeaturedProperty from './FeaturedProperty';
import Link from 'next/link';
import styles from '@components/home/FeaturedProperties.module.css';

export default function FeaturedProperties() {
  return (
    <section className={styles.container}>
      <span>Featured Gems</span>
      <h2>
        Trending Holiday <br /> Destinations
      </h2>

      <div className={styles.properties}>
        <FeaturedProperty />
        <FeaturedProperty />
        <FeaturedProperty />
      </div>

      <p className={styles.explore_text}>
        Continue Exploring Trending HOliday Destinations
      </p>

      <Link className={styles.explore_button} href='/'>
        Explore More
      </Link>
    </section>
  );
}
