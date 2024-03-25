import Hero from '@components/agents/Hero';
import Agents from '@components/agents/Agents';
import Header from '@components/layout/Header';
import GreenFooter from '@components/layout/GreenFooter';

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
      <GreenFooter />
    </main>
  );
}
