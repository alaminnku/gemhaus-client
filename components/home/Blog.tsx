import ArticleCard from '@components/blog/ArticleCard';
import styles from '@components/home/Blog.module.css';
import Error from '@components/layout/Error';
import { fetchGemhausData } from '@lib/utils';
import { Article } from 'types';

export default async function Blog() {
  const { data, error } = await fetchGemhausData('/articles', {
    next: { tags: ['articles'] },
  });

  return (
    <section className={styles.container}>
      <h2>
        Latest From <br /> Our Blog
      </h2>

      {error ? (
        <Error error={error} />
      ) : (
        <div className={styles.article_cards}>
          {data.map((article: Article) => (
            <ArticleCard article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
