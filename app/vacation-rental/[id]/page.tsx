import Header from '@components/layout/Header';
import Property from '@components/vacationRental/Property';

type Props = {
  params: { id: string };
};

export default function PropertyPage({ params }: Props) {
  const { id } = params;

  return (
    <main>
      <Header hasBorder={true} isBlackSignIn={true} />
      <Property id={id} />
    </main>
  );
}
