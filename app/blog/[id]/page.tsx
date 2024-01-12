import Article from '@components/blog/Article';
import Header from '@components/layout/Header';

type Props = {
  params: { id: string };
};

export default async function ArticlePage({ params }: Props) {
  const { id } = params;

  return (
    <main>
      <Header />
      <Article id={id} />
    </main>
  );
}
