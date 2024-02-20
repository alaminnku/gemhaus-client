import styles from '@components/blog/ArticleCards.module.css';
import { Article } from 'types';

type Props = {
  articles: Article[];
};

export default function ArticleCards({ articles }: Props) {
  return <div className={styles.container}></div>;
}
