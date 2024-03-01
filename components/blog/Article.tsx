import Error from '@components/layout/Error';
import { fetchGemhausData, formatDate, revalidateIn } from '@lib/utils';
import styles from './Article.module.css';
import Image from 'next/image';
import { Article } from 'types';
import Link from 'next/link';
import SocialShare from './SocialShare';

export default async function Article({ id }: { id: string }) {
  const { data: article, error: articleError } = await fetchGemhausData(
    `/articles/${id}`,
    {
      next: {
        tags: [`article-${id}`],
        revalidate: revalidateIn,
      },
    }
  );
  const { data: articles, error: articlesError } = await fetchGemhausData(
    '/articles',
    {
      next: {
        tags: ['articles'],
        revalidate: revalidateIn,
      },
    }
  );

  const suggestions = [];
  if (!articleError) suggestions.push({ id, title: article.title });
  if (!articlesError) {
    for (const article of articles) {
      if (suggestions.length === 7) break;
      if (article._id !== id)
        suggestions.push({ id: article._id, title: article.title });
    }
  }

  return (
    <>
      {articleError ? (
        <Error error={articleError} />
      ) : (
        <>
          <header className={styles.header}>
            <div className={styles.header_content}>
              <p className={styles.tags}>
                <span>Arizona</span>
                <span>Real estate</span>
                <span>Agent</span>
              </p>

              <h1>{article.title}</h1>

              <p className={styles.author_and_date}>
                Author <span>•</span> {formatDate(article.createdAt)}
              </p>
            </div>

            <Image
              src={article.image}
              alt={article.title}
              width={1600}
              height={1000}
              quality={100}
            />
          </header>

          <section className={styles.article_and_suggestions}>
            <article
              className={styles.article}
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></article>

            <div className={styles.suggestions_and_social_share}>
              <div className={styles.suggestions}>
                {suggestions.map((suggestion) => (
                  <Link
                    key={suggestion.id}
                    className={` ${styles.suggestion} ${
                      id === suggestion.id && styles.active
                    }`}
                    href={`/blog/${suggestion.id}`}
                  >
                    {suggestion.title}
                  </Link>
                ))}
              </div>

              <SocialShare />
            </div>
          </section>
        </>
      )}
    </>
  );
}
