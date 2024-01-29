import styles from './Properties.module.css';
import { fetchGemhausData } from '@lib/utils';
import Error from '@components/layout/Error';
import PropertiesAndFilters from './PropertiesAndFilters';

export default async function Properties() {
  const { data, error } = await fetchGemhausData('/properties', {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  return (
    <section className={styles.container}>
      {error ? (
        <Error error={error} />
      ) : (
        <PropertiesAndFilters properties={data} />
      )}
    </section>
  );
}
