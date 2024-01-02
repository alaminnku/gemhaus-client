import Hero from '@components/buyAndSell/Hero';
import PropertyEvaluation from '@components/buyAndSell/PropertyEvaluation';
import Services from '@components/buyAndSell/Services';

export default function page() {
  return (
    <main>
      <Hero />
      <Services />
      <PropertyEvaluation />
    </main>
  );
}
