import Article from '@components/blog/Article';
import GreenFooter from '@components/layout/GreenFooter';
import Header from '@components/layout/Header';

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
