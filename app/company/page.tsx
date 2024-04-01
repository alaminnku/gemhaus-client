import AboutFounder from '@components/company/AboutFounder';
import AboutUs from '@components/company/AboutUs';
import Stories from '@components/company/Stories';
import Footer from '@components/layout/Footer';
import Hero from '@components/company/Hero';
import Newsletter from '@components/layout/Newsletter';

export default function CompanyPage() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Stories />
      <AboutFounder />
      <Newsletter />
      <Footer isRounded={true} />
    </main>
  );
}
