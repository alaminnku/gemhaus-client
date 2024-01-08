import ArticleCards from './ArticleCards';
import { fetchInstance } from '@lib/utils';
import Error from '@components/layout/Error';
import styles from './Articles.module.css';

export default async function Articles() {
  const { data, error } = await fetchInstance('/articles');

  return (
    <section className={styles.container}>
      {error ? <Error error={error} /> : <ArticleCards articles={data} />}
    </section>
  );
}
