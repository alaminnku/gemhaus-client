import { Property } from 'types';
import PropertyCard from './PropertyCard';
import styles from './PropertyCards.module.css';

type Props = {
  properties: Property[];
};

export default function PropertyCards({ properties }: Props) {
  return (
    <div className={styles.container}>
      {properties.map((property) => (
        <PropertyCard property={property} />
      ))}
    </div>
  );
}
