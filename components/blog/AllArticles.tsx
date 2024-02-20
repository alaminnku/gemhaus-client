import { fetchGemhausData, revalidateIn } from '@lib/utils';
import AllArticleCards from './AllArticleCards';
import styles from './AllArticles.module.css';

export default async function AllArticles() {
  const { data, error } = await fetchGemhausData('/articles', {
    next: {
      tags: ['articles'],
      revalidate: revalidateIn,
    },
  });
  return (
    <section className={styles.container}>
      <h2>All Blog Posts</h2>
      <AllArticleCards articles={data} />
    </section>
  );
}
