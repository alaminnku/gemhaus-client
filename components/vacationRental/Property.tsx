import Error from '@components/layout/Error';
import { fetchGemhausData, fetchHostawayData, revalidateIn } from '@lib/utils';
import styles from './Property.module.css';
import Reservation from './Reservation';
import PropertyImages from './PropertyImages';
import { Offering } from 'types';
import Map from './Map';

type Props = {
  id: string;
};

export default async function Property({ id }: Props) {
  const { data: property, error: propertyError } = await fetchGemhausData(
    `/properties/${id}`,
    {
      // next: {
      //   tags: [`property-${id}`],
      //   revalidate: revalidateIn,
      // },
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
              <h1>{property.name}</h1>
              <div className={styles.property_offerings}>
                <h2>What this place offers</h2>
                <div className={styles.offerings}>
                  {property.offerings.map(
                    (offering: Offering, index: number) => (
                      <div key={index} className={styles.offering}>
                        <img src={offering.icon} />
                        <p>{offering.name}</p>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: property.description }}
              ></div>

              <Map
                name={property.name}
                latitude={property.latitude}
                longitude={property.longitude}
              />
            </div>

            <Reservation calendar={calendar.result} property={property} />
          </div>
        </>
      )}
    </section>
  );
}
