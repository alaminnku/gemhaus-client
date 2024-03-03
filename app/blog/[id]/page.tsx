import Article from '@components/blog/Article';
import GreenFooter from '@components/layout/GreenFooter';
import Header from '@components/layout/Header';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import { Article as ArticleType } from 'types';

type Props = {
  params: { id: string };
};

export default async function ArticlePage({ params }: Props) {
  const { id } = params;

  return (
    <main>
      <Header withDarkBackground={true} isYellowSignIn={true} />
      <Article id={id} />
      <GreenFooter />
    </main>
  );
}

export async function generateStaticParams() {
  const { data, error } = await fetchGemhausData('/articles', {
    // next: {
    //   tags: ['articles'],
    //   revalidate: revalidateIn,
    // },
  });
  if (error) return [];
  return data.map((article: ArticleType) => ({ id: article._id }));
}
