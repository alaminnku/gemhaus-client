import ArticleCard from '@components/home/ArticleCard';
import styles from '@components/home/Blog.module.css';
import Error from '@components/layout/Error';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import { Article } from 'types';

export default async function Blog() {
  const { data, error } = await fetchGemhausData('/articles', {
    // next: {
    //   tags: ['articles'],
    //   revalidate: revalidateIn,
    // },
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
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
