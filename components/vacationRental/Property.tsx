import Error from '@components/layout/Error';
import { fetchGemhausData, fetchHostawayData } from '@lib/utils';
import styles from './Property.module.css';
import Reservation from './Reservation';
import PropertyImages from './PropertyImages';

type Props = {
  id: string;
};

export default async function Property({ id }: Props) {
  const { data: property, error: propertyError } = await fetchGemhausData(
    `/properties/${id}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const { data: calendar, error: calendarError } = await fetchHostawayData(
    `/listings/${property.hostawayId}/calendar`
  );

  return (
    <section className={styles.container}>
      {propertyError || calendarError ? (
        <Error error={propertyError || calendar} />
      ) : (
        <>
          <PropertyImages images={property.images} />

          <div className={styles.content_and_reservation}>
            <div className={styles.content}>
              <div className={styles.title}>
                <h1>{property.name}</h1>
              </div>
              <div className={styles.offerings}>
                <h2>What this place offers</h2>
              </div>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: property.description }}
              ></div>
            </div>

            <Reservation calendar={calendar.result} property={property} />
          </div>
        </>
      )}
    </section>
  );
}
