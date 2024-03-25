import { fetchGemhausData, fetchHostawayData, revalidateIn } from '@lib/utils';
import styles from './PropertyDetails.module.css';
import Image from 'next/image';
import Price from '@components/vacationRental/Price';
import Error from '@components/layout/Error';
import HouseRules from './HouseRules';

type Props = {
  propertyId: string;
  arrivalDate: string;
  departureDate: string;
};

export default async function PropertyDetails({
  propertyId,
  arrivalDate,
  departureDate,
}: Props) {
  const { data: property, error: propertyError } = await fetchGemhausData(
    `/properties/${propertyId}`,
    {
      next: {
        revalidate: revalidateIn,
        tags: [`property-${propertyId}`],
      },
    }
  );
  const { data: calendar, error: calendarError } = await fetchHostawayData(
    `/listings/${property.hostawayId}/calendar`
  );
  const { data: hostawayProperty, error: hostawayPropertyError } =
    await fetchHostawayData(`/listings/${property.hostawayId}`);

  return (
    <>
      {propertyError || calendarError || hostawayPropertyError ? (
        <Error
          error={propertyError || calendarError || hostawayPropertyError}
        />
      ) : (
        <div className={styles.container}>
          <div className={styles.header_and_price}>
            <div className={styles.header}>
              <Image
                src={property.images[0]}
                width={400}
                height={300}
                alt={`${property.name} image`}
              />
              <div className={styles.name_and_bedrooms}>
                <p>{property.name}</p>
                <p>{property.bedrooms} bedrooms</p>
              </div>
            </div>

            <div className={styles.price_details}>
              <p className={styles.price_details_title}>Price Details</p>
              <Price
                calendar={calendar.result}
                property={property}
                arrivalDate={arrivalDate}
                departureDate={departureDate}
                style={{ paddingTop: '26px', paddingBottom: '29px' }}
              />
            </div>
          </div>

          <div className={styles.cancellation_policy}>
            <p className={styles.cancellation_policy_title}>
              Cancellation Policy
            </p>
            <p className={styles.cancellation_policy_item}>
              <strong>100% Refund</strong> up to 60 days before arrival
            </p>
            <p className={styles.cancellation_policy_item}>
              <strong>50% Refund</strong> up to 30 days before arrival
            </p>
          </div>

          <HouseRules houseRulesContent={hostawayProperty.result.houseRules} />
        </div>
      )}
    </>
  );
}
