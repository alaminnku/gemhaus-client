import styles from './Properties.module.css';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import Error from '@components/layout/Error';
import PropertiesAndFilters from './PropertiesAndFilters';

type Props = {
  arrivalDate: string;
  departureDate: string;
};

export default async function Properties({
  arrivalDate,
  departureDate,
}: Props) {
  const { data: properties, error: propertiesError } = await fetchGemhausData(
    '/properties',
    {
      cache: 'no-store',
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
        <PropertiesAndFilters
          properties={properties}
          offerings={offerings}
          arrivalDate={arrivalDate}
          departureDate={departureDate}
        />
      )}
    </section>
  );
}
