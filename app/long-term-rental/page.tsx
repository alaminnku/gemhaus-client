import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import PropertyEvaluationForm from '@components/longTermRental/PropertyEvaluationForm';

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

      <PropertyEvaluation children={<PropertyEvaluationForm />} />
    </main>
  );
}
