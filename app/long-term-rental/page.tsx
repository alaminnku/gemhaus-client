import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import PropertyEvaluationForm from '@components/longTermRental/PropertyEvaluationForm';
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
      <PropertyEvaluation children={<PropertyEvaluationForm />} />
    </main>
  );
}
