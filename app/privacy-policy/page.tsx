import Footer from '@components/layout/Footer';
import Header from '@components/layout/Header';
import Privacy from '@components/policy/Privacy';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Header showLogoOnly={true} />
      <Privacy />
      <Footer />
    </main>
  );
}
