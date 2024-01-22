import FeaturedProperties from '@components/home/FeaturedProperties';
import Hero from '@components/home/Hero';
import Marketing from '@components/home/Marketing';
import LuxuryGems from '@components/home/LuxuryGems';
import Services from '@components/home/Services';
import Blog from '@components/home/Blog';
import FAQs from '@components/home/FAQs';
import Newsletter from '@components/home/Newsletter';
import Affiliations from '@components/home/Affiliations';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Affiliations />
      <FeaturedProperties />
      <Marketing />
      <LuxuryGems />
      <Services />
      <Blog />
      <FAQs />
      <Newsletter />
    </main>
  );
}
