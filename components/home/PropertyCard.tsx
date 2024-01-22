import Image from 'next/image';
import styles from '@components/home/PropertyCard.module.css';
import { FaBath, FaBed, FaHeart, FaStar, FaUser } from 'react-icons/fa6';
import { Property } from 'types';
import Link from 'next/link';

type Props = {
  property: Property;
};

export default function PropertyCard({ property }: Props) {
  const { _id, name, price, beds, baths, guests, rating, images, isFeatured } =
    property;

  return (
    <Link href={`/properties/${_id}`} className={styles.container}>
      <div className={styles.image_and_icons}>
        <Image src={images[0]} width={800} height={450} alt='Property image' />

        {isFeatured && (
          <div className={styles.featured}>
            <p>Featured</p>
            <FaHeart />
          </div>
        )}

        <div className={styles.details}>
          <div>
            <FaBed /> {beds}
          </div>
          <div>
            <FaBath /> {baths}
          </div>
          <div>
            <FaUser /> {guests}
          </div>
          <div>
            <FaStar /> {rating}
          </div>
        </div>
      </div>

      <div className={styles.content}>
        <h3>{name}</h3>
        <p>Professional Host</p>
        <p>
          <span>From ${price}</span> Per Night
        </p>
      </div>
    </Link>
  );
}
