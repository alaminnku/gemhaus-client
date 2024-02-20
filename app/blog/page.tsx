import AllArticles from '@components/blog/AllArticles';
import Hero from '@components/blog/Hero';
import RecentArticles from '@components/blog/RecentArticles';
import GreenFooter from '@components/layout/GreenFooter';
import Header from '@components/layout/Header';

export default async function BlogPage() {
  return (
    <main>
      <Header withDarkBackground={true} isYellowSignIn={true} />
      <Hero />
      <RecentArticles />
      <AllArticles />
      <GreenFooter />
    </main>
  );
}
