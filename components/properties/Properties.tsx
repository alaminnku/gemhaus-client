import PropertyCards from '@components/home/PropertyCards';
import { Property } from 'types';
import styles from './Properties.module.css';

type Props = {
  properties: Property[];
};

export default function Properties({ properties }: Props) {
  return (
    <section className={styles.container}>
      <PropertyCards properties={properties} />
    </section>
  );
}
