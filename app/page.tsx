import FeaturedProperties from '@components/home/FeaturedProperties';
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
import { getServerSession } from 'next-auth';
import { authOptions } from '@lib/auth';

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <main>
      <Hero />
      <Agents />
      <FeaturedProperties />
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
