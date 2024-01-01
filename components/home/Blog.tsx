import ArticleCards from '@components/blog/ArticleCards';
import styles from '@components/home/Blog.module.css';

export default function Blog() {
  return (
    <section className={styles.container}>
      <span>GemHaus Blog</span>
      <h2>
        From Our <br /> Latest Articles
      </h2>
      <ArticleCards />
    </section>
  );
}
