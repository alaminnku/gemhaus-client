import CallToAction from '@components/layout/CallToAction';
import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import EvaluationInputOptions from '@components/shortTermRental/EvaluationInputOptions';
import Services from '@components/shortTermRental/Services';

export default function ShortTermRentalPage() {
  return (
    <main>
      <GenericHero
        children={
          <h1>
            Short Term Rental <br />
            Management
          </h1>
        }
        backgroundImage='/short-term-rental/hero-bg.png'
      />
      <Services />
      <CallToAction />
      <PropertyEvaluation children={<EvaluationInputOptions />} />
    </main>
  );
}
