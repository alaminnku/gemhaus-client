import { PropertiesView, Property } from 'types';
import styles from './PropertyCard.module.css';
import Image from 'next/image';
import { manrope } from '@lib/utils';
import { FaHeart } from 'react-icons/fa6';
import Link from 'next/link';

type Props = { view: PropertiesView; property: Property };

export default function PropertyCard({ view, property }: Props) {
  return (
    <div
      className={`${styles.container} ${manrope.className} ${
        view === 'singleColumn' && styles.multiple_columns
      }`}
    >
      <div className={styles.content}>
        <div className={styles.image}>
          <Image
            src={property.images[0]}
            width={400}
            height={400}
            alt={`${property.name} image`}
          />
          {property.isFeatured && (
            <div className={styles.featured}>
              <p>Featured</p>
              <FaHeart />
            </div>
          )}
        </div>

        <div>
          <p className={styles.name}>{property.name}</p>
          <div className={styles.offering_icons}>
            {property.offerings.map((offering, index) => (
              <img key={index} src={offering.icon} alt='Offering icon' />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.price_and_button}>
        <p className={styles.price}>
          <strong>From ${property.price}</strong> Per Night
        </p>
        <Link href={`/vacation-rental/${property._id}`}> Book Now</Link>
      </div>
    </div>
  );
}
