import { fetchGemhausData, fetchHostawayData } from '@lib/utils';
import styles from './PropertyDetails.module.css';
import Image from 'next/image';
import Price from '@components/vacationRental/Price';

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
        revalidate: 60 * 60 * 24,
      },
    }
  );
  const { data: calendar, error: calendarError } = await fetchHostawayData(
    `/listings/${property.hostawayId}/calendar`
  );

  return (
    <div className={styles.property_details}>
      <div className={styles.property_header_and_price}>
        <div className={styles.property_header}>
          <Image
            src={property.images[0]}
            width={400}
            height={300}
            alt={`${property.name} image`}
          />
          <div className={styles.property_name_and_beds}>
            <p>{property.name}</p>
            <p>{property.beds} bedrooms</p>
          </div>
        </div>

        <div className={styles.price_details}>
          <p className={styles.price_details_title}>Price Details</p>
          <Price
            calendar={calendar.result}
            property={property}
            arrivalDate={arrivalDate}
            departureDate={departureDate}
          />
        </div>
      </div>

      <div className={styles.cancellation_policy}>
        <p className={styles.cancellation_policy_title}>Cancellation Policy</p>
        <p className={styles.cancellation_policy_item}>
          <strong>100% Refund</strong> up to 60 days before arrival
        </p>
        <p className={styles.cancellation_policy_item}>
          <strong>50% Refund</strong> up to 30 days before arrival
        </p>
      </div>

      <div className={styles.house_rules}>
        <p className={styles.house_rules_title}>House Rules</p>
        <div className={styles.house_rules_item}>
          <img src='/checkout/clock-icon.png' />
          <p>Check-in 4 pm</p>
        </div>
        <div className={styles.house_rules_item}>
          <img src='/checkout/clock-icon.png' />
          <p>Check-out 11 am</p>
        </div>
        <div className={styles.house_rules_item}>
          <img src='/checkout/child-icon.png' />
          <p>Children allowed</p>
        </div>
        <div className={styles.house_rules_item}>
          <img src='/checkout/pet-icon.png' />
          <p>Pets allowed</p>
        </div>
        <div className={styles.house_rules_item}>
          <img src='/checkout/no-smoke-icon.png' />
          <p>Smoke not allowed</p>
        </div>
      </div>
    </div>
  );
}
