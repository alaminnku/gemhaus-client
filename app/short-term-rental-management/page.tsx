import BecomeHost from '@components/layout/BecomeHost';
import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import EvaluationInputOptions from '@components/shortTermRentalManagement/EvaluationInputOptions';
import Services from '@components/shortTermRentalManagement/Services';

export default function ShortTermRentalManagementPage() {
  return (
    <main>
      <GenericHero
        children={
          <h1>
            Short Term Rental <br />
            Management
          </h1>
        }
        backgroundImage='/short-term-rental-management/hero-bg.png'
      />
      <Services />
      <BecomeHost />
      <PropertyEvaluation children={<EvaluationInputOptions />} />
    </main>
  );
}
