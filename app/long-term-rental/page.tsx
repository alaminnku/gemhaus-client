import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import PropertyEvaluationForm from '@components/longTermRental/PropertyEvaluationForm';
import Services from '@components/longTermRental/Services';

export default function page() {
  return (
    <main>
      <GenericHero
        children={
          <h1>
            Long Term Rental <br /> Management
          </h1>
        }
        backgroundImage='/home/long-term-rental.jpg'
      />
      <Services />
      <PropertyEvaluation children={<PropertyEvaluationForm />} />
    </main>
  );
}
