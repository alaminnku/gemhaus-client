import Image from 'next/image';
import { Property } from 'types';
import styles from './Property.module.css';

type Props = {
  property: Property;
};

export default function Property({ property }: Props) {
  return (
    <div className={styles.container}>
      <Image
        width={120}
        height={75}
        src={property.images[0]}
        alt={`${property.name} image`}
      />

      <div className={styles.content}>
        <h2>{property.name}</h2>
        <p>
          <span>{property.beds} Bedrooms</span> .{' '}
          <span>{property.baths} Baths</span>{' '}
        </p>
      </div>
    </div>
  );
}
