import { fetchInstance } from '@lib/utils';
import PropertyCards from './PropertyCards';
import styles from '@components/home/LuxuryGems.module.css';
import Error from '@components/layout/Error';

export default async function LuxuryGems() {
  const { data, error } = await fetchInstance('/properties');
  const properties = data.slice(0, 3);

  return (
    <section className={styles.container}>
      <span>Featured Properties</span>
      <h2>Luxury Gems</h2>

      {error ? (
        <Error error={error} />
      ) : (
        <PropertyCards properties={properties} />
      )}
    </section>
  );
}
