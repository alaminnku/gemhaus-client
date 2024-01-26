import PropertyCards from './PropertyCards';
import styles from './Properties.module.css';
import { fetchGemhausData } from '@lib/utils';
import Error from '@components/layout/Error';
import PropertyFilters from './PropertyFilters';

export default async function Properties() {
  const { data, error } = await fetchGemhausData('/properties', {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  return (
    <section className={styles.container}>
      <PropertyFilters properties={data} />
      {error ? <Error error={error} /> : <PropertyCards properties={data} />}
    </section>
  );
}
