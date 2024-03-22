import { fetchGemhausData, revalidateIn } from '@lib/utils';
import Error from '@components/layout/Error';
import styles from './RecentArticles.module.css';
import RecentArticleCards from './RecentArticleCards';

export default async function RecentArticles() {
  const { data, error } = await fetchGemhausData('/articles', {
    next: {
      tags: ['articles'],
      revalidate: revalidateIn,
    },
  });

  return (
    <section className={styles.container}>
      <h2>Recent Blog Posts</h2>
      {error ? (
        <Error error={error} />
      ) : (
        <RecentArticleCards articles={data.slice(0, 3)} />
      )}
    </section>
  );
}
