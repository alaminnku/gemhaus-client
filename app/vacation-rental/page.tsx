import Header from '@components/layout/Header';
import Properties from '@components/vacationRental/Properties';

type Props = {
  searchParams: { arrivalDate: string; departureDate: string };
};

export default async function PropertiesPage({ searchParams }: Props) {
  const { arrivalDate, departureDate } = searchParams;
  return (
    <main>
      <Header hasBorder={true} isBlackSignIn={true} />
      <Properties arrivalDate={arrivalDate} departureDate={departureDate} />
    </main>
  );
}
