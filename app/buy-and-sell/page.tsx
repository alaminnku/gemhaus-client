import Hero from '@components/buyAndSell/Hero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import Services from '@components/layout/Services';
import CallToAction from '@components/layout/CallToAction';
import { buyAndSellServices } from '@data/services';
import Newsletter from '@components/layout/Newsletter';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

export default function BuyAndSellPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services services={buyAndSellServices} />
      <CallToAction
        link='#evaluation'
        text='Find your Gem'
        title='Unlock the door to your dream home or sell with confidence.'
        description='Navigate the selling process seamlessly with GemHaus'
      />
      <PropertyEvaluation />
      <Newsletter />
      <Footer />
    </main>
  );
}
