import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import PropertyEvaluationForm from '@components/vacationRental/PropertyEvaluationForm';

export default function page() {
  return (
    <main>
      <GenericHero
        children={
          <h1>
            Short Term Rental <br />
            Management
          </h1>
        }
        backgroundImage='/home/vacation-rental.jpg'
      />

      <PropertyEvaluation children={<PropertyEvaluationForm />} />
    </main>
  );
}
