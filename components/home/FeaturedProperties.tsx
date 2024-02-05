import styles from '@components/home/FeaturedProperties.module.css';
import PropertyCards from './PropertyCards';
import { fetchGemhausData } from '@lib/utils';
import Error from '@components/layout/Error';
import ExploreProperties from '@components/layout/ExploreProperties';

export default async function FeaturedProperties() {
  const { data, error } = await fetchGemhausData('/properties', {
    next: { tags: ['properties'] },
  });

  return (
    <section className={styles.container}>
      <h2>
        Featured <br /> Properties
      </h2>
      {error ? <Error error={error} /> : <PropertyCards properties={data} />}
      <ExploreProperties />
    </section>
  );
}
