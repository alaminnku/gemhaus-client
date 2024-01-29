import Contact from '@components/contact/Contact';
import UsefulLinks from '@components/contact/UsefulLinks';
import Header from '@components/layout/Header';

export default function ContactPage() {
  return (
    <main>
      <Header isBlackSignIn={true} />
      <Contact />
      <UsefulLinks />
    </main>
  );
}
