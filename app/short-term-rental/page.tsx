import CallToAction from '@components/layout/CallToAction';
import Hero from '@components/shortTermRental/Hero';
import PropertyEvaluation from '@components/layout/PropertyEvaluation';
import EvaluationInputOptions from '@components/layout/EvaluationInputOptions';
import Services from '@components/layout/Services';
import { shortTermServices } from '@data/services';
import Newsletter from '@components/layout/Newsletter';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

export default function ShortTermRentalPage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services services={shortTermServices} />
      <CallToAction link='#evaluation' />
      <PropertyEvaluation children={<EvaluationInputOptions />} />
      <Newsletter />
      <Footer />
    </main>
  );
}
