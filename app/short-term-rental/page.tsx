import CallToAction from '@components/layout/CallToAction';
import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import EvaluationInputOptions from '@components/layout/EvaluationInputOptions';
import Services from '@components/layout/Services';
import { shortTermServices } from '@data/services';
import Newsletter from '@components/layout/Newsletter';

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
      <Services services={shortTermServices} />
      <CallToAction buttonLink='#evaluation' />
      <PropertyEvaluation children={<EvaluationInputOptions />} />
      <Newsletter />
    </main>
  );
}
