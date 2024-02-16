import AboutFounder from '@components/company/AboutFounder';
import AboutUs from '@components/company/AboutUs';
import Stories from '@components/company/Stories';
import DarkFooter from '@components/layout/DarkFooter';
import GenericHero from '@components/layout/GenericHero';
import Newsletter from '@components/layout/Newsletter';

export default function CompanyPage() {
  return (
    <main>
      <GenericHero
        desktopRadius='42px'
        children={<h1>Company</h1>}
        backgroundImage='/company/hero-bg.png'
      />
      <AboutUs />
      <Stories />
      <AboutFounder />
      <Newsletter />
      <DarkFooter isRounded={true} />
    </main>
  );
}
