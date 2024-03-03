import { fetchGemhausData, revalidateIn } from '@lib/utils';
import AllArticleCards from './AllArticleCards';
import styles from './AllArticles.module.css';
import Error from '@components/layout/Error';

export default async function AllArticles() {
  const { data, error } = await fetchGemhausData('/articles', {
    // next: {
    //   tags: ['articles'],
    //   revalidate: revalidateIn,
    // },
  });

  return (
    <section className={styles.container}>
      <h2>All Blog Posts</h2>
      {error ? <Error error={error} /> : <AllArticleCards articles={data} />}
    </section>
  );
}
