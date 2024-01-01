import styles from '@components/blog/ArticleCards.module.css';
import ArticleCard from './ArticleCard';

export default function ArticleCards() {
  return (
    <div className={styles.container}>
      <ArticleCard />
      <ArticleCard />
      <ArticleCard />
    </div>
  );
}
