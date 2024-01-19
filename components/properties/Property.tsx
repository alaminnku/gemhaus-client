import Error from '@components/layout/Error';
import { getGemhausData, getHostawayData } from '@lib/utils';
import styles from './Property.module.css';
import Reservation from './Reservation';

type Props = {
  id: string;
};

export default async function Property({ id }: Props) {
  const { data: property, error: propertyError } = await getGemhausData(
    `/properties/${id}`,
    {
      next: {
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const { data: calendar, error: calendarError } = await getHostawayData(
    `/listings/${property.hostawayId}/calendar`
  );

  return (
    <section className={styles.container}>
      {propertyError ? (
        <Error error={propertyError} />
      ) : (
        <>
          <h1>{property.name}</h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: property.description }}
          ></div>

          {calendarError ? (
            <Error error={calendarError} />
          ) : (
            <Reservation calendar={calendar} />
          )}
        </>
      )}
    </section>
  );
}
