import AboutUs from '@components/company/AboutUs';
import OurStory from '@components/company/OurStory';
import GenericHero from '@components/layout/GenericHero';

export default function CompanyPage() {
  return (
    <main>
      <GenericHero
        backgroundImage='/company/hero-bg.png'
        children={<h1>Company</h1>}
      />
      <AboutUs />
      <OurStory />
    </main>
  );
}
