import Hero from '@components/agent/Hero';
import Properties from '@components/agent/Properties';
import FeaturedProperties from '@components/agent/FeaturedProperties';
import Header from '@components/layout/Header';
import Transactions from '@components/agent/Transactions';

export default function AgentPage() {
  return (
    <main>
      <Header withDarkBackground={true} />
      <Hero />
      <Properties />
      <FeaturedProperties />
      <Transactions />
    </main>
  );
}
