import styles from '@components/blog/ArticleCard.module.css';
import { dateToText } from '@lib/utils';
import Image from 'next/image';
import { Article } from 'types';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <div className={styles.container}>
      <Image
        src={article.image}
        width={400}
        height={300}
        alt={`${article.title} cover image`}
      />

      <div className={styles.content}>
        <p className={styles.published}>
          Posted on: {dateToText(article.createdAt)}
        </p>
        <p>{article.title}</p>
      </div>
    </div>
  );
}
