import ArticleCards from '@components/blog/ArticleCards';
import styles from '@components/home/Blog.module.css';
import Error from '@components/layout/Error';
import { getData } from '@lib/utils';

export default async function Blog() {
  const { data, error } = await getData('/articles');
  const articles = data.slice(0, 3);

  return (
    <section className={styles.container}>
      <span>GemHaus Blog</span>
      <h2>
        From Our <br /> Latest Articles
      </h2>

      {error ? <Error error={error} /> : <ArticleCards articles={articles} />}
    </section>
  );
}
