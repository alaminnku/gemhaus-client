import { Property } from 'types';
import styles from './PropertyCard.module.css';
import Image from 'next/image';
import LinkButton from '@components/layout/LinkButton';
import { manrope } from '@lib/utils';
import { FaHeart } from 'react-icons/fa6';

type Props = { property: Property };

export default function PropertyCard({ property }: Props) {
  return (
    <div className={`${styles.container} ${manrope.className}`}>
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
          <p>
            {property.beds}beds {property.baths} baths
          </p>
        </div>

        <div></div>
      </div>

      <div>
        <p className={styles.price}>
          <strong>From ${property.price}</strong> Per Night
        </p>
        <LinkButton
          text='Book Now'
          href={`/vacation-rental/${property._id}`}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}
