import Contact from '@components/contact/Contact';
import UsefulLinks from '@components/contact/UsefulLinks';
import DarkFooter from '@components/layout/DarkFooter';
import Header from '@components/layout/Header';

export default function ContactPage() {
  return (
    <main>
      <Header isBlackSignIn={true} />
      <Contact />
      <UsefulLinks />
      <DarkFooter />
    </main>
  );
}
