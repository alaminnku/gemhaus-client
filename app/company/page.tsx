import AboutFounder from '@components/company/AboutFounder';
import AboutUs from '@components/company/AboutUs';
import Stories from '@components/company/Stories';
import GenericHero from '@components/layout/GenericHero';
import Newsletter from '@components/layout/Newsletter';

export default function CompanyPage() {
  return (
    <main>
      <GenericHero
        backgroundImage='/company/hero-bg.png'
        children={<h1>Company</h1>}
      />
      <AboutUs />
      <Stories />
      <AboutFounder />
      <Newsletter />
    </main>
  );
}
