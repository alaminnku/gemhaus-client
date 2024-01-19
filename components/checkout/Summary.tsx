import { getGemhausData, getHostawayData, getISODate } from '@lib/utils';
import styles from './Summary.module.css';
import Error from '@components/layout/Error';
import Property from './Property';
import Price from './Price';

type Props = {
  id: string;
  startDate: string;
  endDate: string;
  guests: string;
};

export default async function Summary({
  id,
  startDate,
  endDate,
  guests,
}: Props) {
  // Get property
  const { data: property, error: propertyError } = await getGemhausData(
    `/properties/${id}`,
    {
      next: {
        revalidate: 1,
      },
    }
  );

  // Get calendar
  const { data: calendar, error: calendarError } = await getHostawayData(
    `/listings/${property.hostawayId}/calendar`
  );

  return (
    <section className={styles.container}>
      {propertyError || calendarError ? (
        <Error error={propertyError || calendarError} />
      ) : (
        <>
          <Property property={property} />
          <Price
            startDate={startDate}
            endDate={endDate}
            property={property}
            calendar={calendar.result}
          />
        </>
      )}
    </section>
  );
}
