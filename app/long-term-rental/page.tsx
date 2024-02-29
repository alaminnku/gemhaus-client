import CallToAction from '@components/layout/CallToAction';
import Hero from '@components/longTermRental/Hero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import EvaluationInputOptions from '@components/layout/EvaluationInputOptions';
import Services from '@components/layout/Services';
import { longTermServices } from '@data/services';
import Newsletter from '@components/layout/Newsletter';
import DarkFooter from '@components/layout/DarkFooter';
import Header from '@components/layout/Header';

export default function LongTermRentalPage() {
  return (
    <main>
      <Header />
      <Hero />
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
