import GenericHero from '@components/layout/GenericHero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import PropertyEvaluationForm from '@components/vacationRental/PropertyEvaluationForm';
import Services from '@components/vacationRental/Services';

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
        backgroundImage='/home/vacation-rental.jpg'
      />
      <Services />
      <PropertyEvaluation children={<PropertyEvaluationForm />} />
    </main>
  );
}
