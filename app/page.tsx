import FeaturedProperties from '@components/home/FeaturedProperties';
import Hero from '@components/home/Hero';
import Marketing from '@components/home/Marketing';
import Blog from '@components/home/Blog';
import FAQs from '@components/home/FAQs';
import Newsletter from '@components/home/Newsletter';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <Marketing />
      <Blog />
      <FAQs />
      <Newsletter />
    </main>
  );
}
