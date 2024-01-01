import HolidayDestinations from '@components/home/HolidayDestinations';
import Hero from '@components/home/Hero';
import Marketing from '@components/home/Marketing';
import LuxuryGems from '@components/home/LuxuryGems';
import Services from '@components/home/Services';
import Blog from '@components/home/Blog';

export default function Home() {
  return (
    <main>
      <Hero />
      <HolidayDestinations />
      <Marketing />
      <LuxuryGems />
      <Services />
      <Blog />
    </main>
  );
}
