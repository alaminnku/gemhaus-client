import CallToAction from '@components/layout/CallToAction';
import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import EvaluationInputOptions from '@components/shortTermRental/EvaluationInputOptions';
import Services from '@components/longTermRental/Services';

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
      <Services />
      <CallToAction
        title='Transform your property into a stable, long-term investment'
        description='Unlock the potential of your property'
        buttonText='Become a Landlord'
        buttonLink='/'
        buttonWidth='14rem'
      />
      <PropertyEvaluation
        children={<EvaluationInputOptions showStrLtr={false} />}
      />
    </main>
  );
}
