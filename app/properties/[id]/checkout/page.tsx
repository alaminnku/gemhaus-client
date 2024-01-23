import PaymentForm from '@components/checkout/PaymentForm';
import Header from '@components/layout/Header';

type Props = {
  params: { id: string };
};

export default function CheckoutPage({ params }: Props) {
  const propertyId = params.id;

  return (
    <main>
      <Header />
      <PaymentForm propertyId={propertyId} />
    </main>
  );
}
