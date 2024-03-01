import Header from '@components/layout/Header';
import Properties from '@components/vacationRental/Properties';

export default async function PropertiesPage() {
  return (
    <main>
      <Header hasBorder={true} isBlackSignIn={true} />
      <Properties />
    </main>
  );
}
