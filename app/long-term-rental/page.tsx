import CallToAction from '@components/layout/CallToAction';
import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import EvaluationInputOptions from '@components/layout/EvaluationInputOptions';
import Services from '@components/layout/Services';
import { longTermServices } from '@data/services';
import Newsletter from '@components/layout/Newsletter';

export default function LongTermRentalPage() {
  return (
    <main>
      <GenericHero
        children={
          <h1>
            Long Term Rental <br /> Management
          </h1>
        }
        backgroundImage='/long-term-rental/hero-bg.png'
      />
      <Services services={longTermServices} />
      <CallToAction
        title='Transform your property into a stable, long-term investment'
        description='Unlock the potential of your property'
        buttonText='Become a Landlord'
        buttonLink='/'
        buttonWidth='15rem'
      />
      <PropertyEvaluation
        children={<EvaluationInputOptions showStrLtr={false} />}
      />
      <Newsletter />
    </main>
  );
}
