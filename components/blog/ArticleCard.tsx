import { Article } from 'types';
import styles from './ArticleCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { createHostawayDate } from '@lib/utils';

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
          Author . {createHostawayDate(article.createdAt)}
        </p>
        <h3>{article.title}</h3>
        <p className={styles.excerpt}>
          Abbie Knowles brings strong local knowledge and unshakable
          professional polish to The Agency’s Scottsdale office. An Arizona
          native.
        </p>
        <p className={styles.tags}>
          <span>Arizona</span>
          <span>Real estate</span>
          <span>Agent</span>
        </p>
      </div>
    </Link>
  );
}
