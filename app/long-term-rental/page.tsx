import CallToAction from '@components/layout/CallToAction';
import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import EvaluationInputOptions from '@components/layout/EvaluationInputOptions';
import Services from '@components/layout/Services';
import { longTermServices } from '@data/services';
import Newsletter from '@components/layout/Newsletter';
import DarkFooter from '@components/layout/DarkFooter';

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
        link='#evaluation'
        text='Become a Landlord'
        description='Unlock the potential of your property'
        title='Transform your property into a stable, long-term investment'
      />
      <PropertyEvaluation
        children={<EvaluationInputOptions showStrLtr={false} />}
      />
      <Newsletter />
      <DarkFooter />
    </main>
  );
}
