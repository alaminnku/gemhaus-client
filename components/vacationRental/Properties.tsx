import styles from './Properties.module.css';
import { fetchGemhausData } from '@lib/utils';
import Error from '@components/layout/Error';
import PropertiesAndFilters from './PropertiesAndFilters';

export default async function Properties() {
  const { data: properties, error: propertiesError } = await fetchGemhausData(
    '/properties',
    {
      next: {
        tags: ['properties'],
      },
    }
  );
  const { data: offerings, error: offeringsError } = await fetchGemhausData(
    '/properties/offerings',
    { next: { tags: ['offerings'] } }
  );

  return (
    <section className={styles.container}>
      {propertiesError || offeringsError ? (
        <Error error={propertiesError || offeringsError} />
      ) : (
        <PropertiesAndFilters properties={properties} offerings={offerings} />
      )}
    </section>
  );
}
