import Hero from '@components/agents/Hero';
import Agents from '@components/agents/Agents';
import Header from '@components/layout/Header';

export default function AgentsPage() {
  return (
    <main>
      <Header withDarkBackground={true} />
      <Hero />
      <Agents />
    </main>
  );
}
