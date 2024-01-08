import Articles from '@components/blog/Articles';
import Header from '@components/layout/Header';

export default async function BlogPage() {
  return (
    <main>
      <Header />
      <Articles />
    </main>
  );
}
