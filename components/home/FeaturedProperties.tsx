import styles from '@components/home/FeaturedProperties.module.css';
import PropertyCards from './PropertyCards';
import { getGemhausData } from '@lib/utils';
import Error from '@components/layout/Error';
import LinkButton from '@components/layout/LinkButton';

export default async function FeaturedProperties() {
  const { data, error } = await getGemhausData('/properties', {
    next: { revalidate: 60 * 60 * 24 },
  });

  return (
    <section className={styles.container}>
      <h2>
        Featured <br /> Properties
      </h2>

      {error ? (
        <Error error={error} />
      ) : (
        <PropertyCards properties={data.slice(0, 3)} />
      )}

      <p className={styles.explore_text}>Continue Exploring Properties</p>
      <LinkButton
        href='/properties'
        text='Show more'
        style={{ alignSelf: 'center' }}
      />
    </section>
  );
}
