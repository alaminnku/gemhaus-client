import styles from './Properties.module.css';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import Error from '@components/layout/Error';
import PropertiesAndFilters from './PropertiesAndFilters';

export default async function Properties() {
  const { data: properties, error: propertiesError } = await fetchGemhausData(
    '/properties',
    {
      next: {
        tags: ['offerings'],
        revalidate: revalidateIn,
      },
    }
  );
  const { data: offerings, error: offeringsError } = await fetchGemhausData(
    '/properties/offerings',
    {
      next: {
        tags: ['offerings'],
        revalidate: revalidateIn,
      },
    }
  );

  return (
    <section className={styles.container}>
      {propertiesError || offeringsError ? (
        <Error error={propertiesError || offeringsError} />
      ) : (
        <PropertiesAndFilters offerings={offerings} properties={properties} />
      )}
    </section>
  );
}
