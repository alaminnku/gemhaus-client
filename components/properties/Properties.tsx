import PropertyCards from '@components/home/PropertyCards';
import styles from './Properties.module.css';
import { fetchGemhausData } from '@lib/utils';
import Error from '@components/layout/Error';

export default async function Properties() {
  const { data, error } = await fetchGemhausData('/properties', {
    next: {
      revalidate: 60 * 60 * 24,
    },
  });

  return (
    <section className={styles.container}>
      {error ? <Error error={error} /> : <PropertyCards properties={data} />}
    </section>
  );
}
