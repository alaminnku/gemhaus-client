import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import Services from '@components/buyAndSell/Services';
import CallToAction from '@components/layout/CallToAction';

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
      <Services />
      <CallToAction
        title='Unlock the door to your dream home or sell with confidence.'
        description='Navigate the selling process seamlessly with GemHaus'
        buttonText='Find your Gem'
        buttonLink='/properties'
      />
      <PropertyEvaluation />
    </main>
  );
}
