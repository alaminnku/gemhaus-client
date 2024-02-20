import { Article } from 'types';
import styles from './AllArticleCards.module.css';
import ArticleCard from './ArticleCard';

type Props = {
  articles: Article[];
};

export default function AllArticleCards({ articles }: Props) {
  return (
    <div className={styles.container}>
      {articles.map((article) => (
        <ArticleCard key={article._id} article={article} />
      ))}
    </div>
  );
}
