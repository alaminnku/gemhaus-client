import styles from '@components/home/FeaturedProperties.module.css';
import PropertyCards from './PropertyCards';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import Error from '@components/layout/Error';
import ExploreProperties from '@components/layout/ExploreProperties';

export default async function FeaturedProperties() {
  const { data, error } = await fetchGemhausData('/properties', {
    // next: {
    //   tags: ['properties'],
    //   revalidate: revalidateIn,
    // },
  });

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Featured Getaways</h2>
        <p>We have curated the best gems for you.</p>
      </div>
      {error ? <Error error={error} /> : <PropertyCards properties={data} />}
      <div className={styles.explore_properties_container}>
        <ExploreProperties />
      </div>
    </section>
  );
}
