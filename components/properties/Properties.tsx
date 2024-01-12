import PropertyCards from '@components/home/PropertyCards';
import styles from './Properties.module.css';
import { getData } from '@lib/utils';
import Error from '@components/layout/Error';

export default async function Properties() {
  const { data, error } = await getData('/properties', {
    cache: 'no-cache',
  });

  return (
    <section className={styles.container}>
      {error ? <Error error={error} /> : <PropertyCards properties={data} />}
    </section>
  );
}
