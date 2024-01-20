import PaymentForm from '@components/checkout/PaymentForm';
import Summary from '@components/checkout/Summary';
import Header from '@components/layout/Header';

type Props = {
  params: { id: string };
  searchParams: { startDate: string; endDate: string; guests: string };
};

export default function CheckoutPage({ params, searchParams }: Props) {
  const { id } = params;
  const { startDate, endDate, guests } = searchParams;

  return (
    <main>
      <Header />
      <Summary
        id={id}
        startDate={startDate}
        endDate={endDate}
        guests={guests}
      />
      {/* Customer details form */}
      <PaymentForm />
    </main>
  );
}
