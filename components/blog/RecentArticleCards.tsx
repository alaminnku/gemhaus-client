import { Article } from 'types';
import styles from './RecentArticleCards.module.css';
import ArticleCard from './ArticleCard';

type Props = {
  articles: Article[];
};

export default function RecentArticleCards({ articles }: Props) {
  return (
    <div className={styles.container}>
      <ArticleCard singleColumn={true} article={articles[0]} />
      <div className={styles.articles}>
        {articles.slice(1).map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}
