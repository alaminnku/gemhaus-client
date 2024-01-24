import PaymentForm from '@components/checkout/PaymentForm';
import Header from '@components/layout/Header';

type Props = {
  params: { id: string };
  searchParams: { arrivalDate: string; departureDate: string; guests: string };
};

export default function CheckoutPage({ params, searchParams }: Props) {
  const booking = {
    propertyId: params.id,
    guests: searchParams.guests,
    arrivalDate: searchParams.arrivalDate,
    departureDate: searchParams.departureDate,
  };

  return (
    <main>
      <Header />
      <PaymentForm booking={booking} />
    </main>
  );
}
