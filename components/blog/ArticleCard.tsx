import styles from '@components/blog/ArticleCard.module.css';
import { dateToText } from '@lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Article } from 'types';

type Props = {
  article: Article;
};

export default function ArticleCard({ article }: Props) {
  return (
    <Link href={`/blog/${article._id}`} className={styles.container}>
      <Image
        src={article.image}
        width={400}
        height={300}
        alt={`${article.title} cover image`}
      />

      <div className={styles.content}>
        <p className={styles.title}>{article.title}</p>
        <p className={styles.published}>{dateToText(article.createdAt)}</p>
      </div>
    </Link>
  );
}
