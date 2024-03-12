import FeaturedGateways from '@components/home/FeaturedGateways';
import Hero from '@components/home/Hero';
import CallToAction from '@components/layout/CallToAction';
import Blog from '@components/home/Blog';
import FAQs from '@components/home/FAQs';
import Newsletter from '@components/layout/Newsletter';
import Services from '@components/home/Services';
import PortfolioProperties from '@components/home/PortfolioProperties';
import SaveTime from '@components/home/SaveTime';
import Agents from '@components/home/Agents';
import GreenFooter from '@components/layout/GreenFooter';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Agents />
      <FeaturedGateways />
      <CallToAction />
      <Services />
      <PortfolioProperties />
      <Blog />
      <SaveTime />
      <FAQs />
      <Newsletter hasBackground={true} />
      <GreenFooter />
    </main>
  );
}
