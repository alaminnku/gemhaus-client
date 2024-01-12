import ArticleCards from './ArticleCards';
import { getData } from '@lib/utils';
import Error from '@components/layout/Error';
import styles from './Articles.module.css';

export default async function Articles() {
  const { data, error } = await getData('/articles', {
    cache: 'no-cache',
  });

  return (
    <section className={styles.container}>
      {error ? <Error error={error} /> : <ArticleCards articles={data} />}
    </section>
  );
}
