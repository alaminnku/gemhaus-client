import Contact from '@components/contact/Contact';
import UsefulLinks from '@components/contact/UsefulLinks';
import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';

export default function ContactPage() {
  return (
    <main>
      <Header isBlackSignIn={true} />
      <Contact />
      <UsefulLinks />
      <Footer isRounded={true} />
    </main>
  );
}
