import FeaturedProperties from '@components/home/FeaturedProperties';
import Hero from '@components/home/Hero';
import Services from '@components/home/Services';

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <Services />
    </main>
  );
}
