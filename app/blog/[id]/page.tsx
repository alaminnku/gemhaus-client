import Article from '@components/blog/Article';
import GreenFooter from '@components/layout/GreenFooter';
import Header from '@components/layout/Header';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import { Article as TArticle } from 'types';

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
  const { data } = await fetchGemhausData('/articles', {
    next: {
      tags: ['articles'],
      revalidate: revalidateIn,
    },
  });
  return data.map((article: TArticle) => ({ id: article._id }));
}
