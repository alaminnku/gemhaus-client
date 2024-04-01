import Hero from '@components/agents/Hero';
import Agents from '@components/agents/Agents';
import Header from '@components/layout/Header';
import Footer from '@components/layout/Footer';

type Props = {
  searchParams: {
    query: string;
  };
};

export default function AgentsPage({ searchParams }: Props) {
  const { query } = searchParams;

  return (
    <main>
      <Header withDarkBackground={true} isYellowSignIn={true} />
      <Hero />
      <Agents query={query} />
      <Footer />
    </main>
  );
}
