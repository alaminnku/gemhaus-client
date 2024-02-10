import Image from 'next/image';
import styles from './PropertyCard.module.css';
import { FaBath, FaBed, FaStar } from 'react-icons/fa6';
import { Property } from 'types';
import Link from 'next/link';
import { manrope } from '@lib/utils';

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  const {
    _id,
    name,
    price,
    bedrooms,
    bathrooms,
    guests,
    rating,
    images,
    isFeatured,
  } = property;

  return (
    <Link
      href={`/vacation-rental/${_id}`}
      className={`${styles.container} ${manrope.className}`}
    >
      <div className={styles.image_and_featured}>
        <Image src={images[0]} width={800} height={450} alt='Property image' />

        {isFeatured && (
          <div className={styles.featured}>
            <p>Featured</p>
            <img src='/home/heart.png' />
          </div>
        )}
      </div>

      <div className={styles.content_and_details}>
        <div className={styles.content}>
          <h3>{name}</h3>
          <p>Professional Host</p>
          <p>
            <span>From ${price}</span> Per Night
          </p>
        </div>

        <div className={styles.details}>
          <div className={styles.detail}>
            <FaBed /> {bedrooms}
          </div>
          <div className={styles.detail}>
            <FaBath /> {bathrooms}
          </div>
          <div className={styles.detail}>
            <FaStar /> {rating}
          </div>
        </div>
      </div>
    </Link>
  );
}
