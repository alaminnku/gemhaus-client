import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import Services from '@components/buyAndSell/Services';
import PropertyEvaluationForm from '@components/buyAndSell/PropertyEvaluationForm';

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
      <PropertyEvaluation children={<PropertyEvaluationForm />} />
    </main>
  );
}
