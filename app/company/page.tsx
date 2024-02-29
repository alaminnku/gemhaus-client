import AboutFounder from '@components/company/AboutFounder';
import AboutUs from '@components/company/AboutUs';
import Stories from '@components/company/Stories';
import DarkFooter from '@components/layout/DarkFooter';
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
      <DarkFooter isRounded={true} />
    </main>
  );
}
