import Hero from '@components/agents/Hero';
import Agents from '@components/agents/Agents';
import Header from '@components/layout/Header';
import GreenFooter from '@components/layout/GreenFooter';

export default function AgentsPage() {
  return (
    <main>
      <Header withDarkBackground={true} />
      <Hero />
      <Agents />
      <GreenFooter />
    </main>
  );
}
