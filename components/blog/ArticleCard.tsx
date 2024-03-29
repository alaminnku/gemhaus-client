import { Article } from 'types';
import styles from './ArticleCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { createDashedDate } from '@lib/utils';

type Props = {
  article: Article;
  singleColumn?: boolean;
};

export default function ArticleCard({ article, singleColumn }: Props) {
  return (
    <Link
      href={`/blog/${article._id}`}
      className={`${styles.container} ${singleColumn && styles.single_column}`}
    >
      <Image
        className={styles.media}
        src={article.image}
        width={800}
        height={500}
        alt={`${article.title} cover image`}
      />

      <div className={styles.content}>
        <p className={styles.author_and_date}>
          Author . {createDashedDate(article.createdAt)}
        </p>
        <h3>{article.title}</h3>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <p className={styles.tags}>
          <span>Arizona</span>
          <span>Real estate</span>
          <span>Agent</span>
        </p>
      </div>
    </Link>
  );
}
