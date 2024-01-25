import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import Services from '@components/layout/Services';
import CallToAction from '@components/layout/CallToAction';
import { buyAndSellServices } from '@data/services';

export default function BuyAndSellPage() {
  return (
    <main>
      <GenericHero
        children={
          <h1>
            Buy & Sell <br /> Property
          </h1>
        }
        backgroundImage='/buy-and-sell/hero-bg.jpg'
      />
      <Services services={buyAndSellServices} />
      <CallToAction
        title='Unlock the door to your dream home or sell with confidence.'
        description='Navigate the selling process seamlessly with GemHaus'
        buttonText='Find your Gem'
        buttonLink='/vacation-rental'
      />
      <PropertyEvaluation />
    </main>
  );
}
