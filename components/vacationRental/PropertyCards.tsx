import { PropertiesView, Property } from 'types';
import PropertyCard from './PropertyCard';
import styles from './PropertyCards.module.css';

type Props = {
  view: PropertiesView;
  properties: Property[];
};

export default function PropertyCards({ view, properties }: Props) {
  return (
    <div
      className={`${styles.container} ${
        view === 'multipleColumns' && styles.multiple_columns
      }`}
    >
      {properties.map((property) => (
        <PropertyCard view={view} key={property._id} property={property} />
      ))}
    </div>
  );
}
