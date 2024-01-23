import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import PropertyEvaluationForm from '@components/shortTermRentalManagement/PropertyEvaluationForm';
import Services from '@components/shortTermRentalManagement/Services';

export default function VacationRentalPage() {
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
      <PropertyEvaluation children={<PropertyEvaluationForm />} />
    </main>
  );
}
