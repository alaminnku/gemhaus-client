import styles from './Contact.module.css';
import ContactForm from './ContactForm';

export default function Contact() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Have any questions or concerns?</h1>
        <p>
          We're here to help! Feel free to reach out to us anytime. Your
          satisfaction and peace of mind are our top priorities, and we're
          dedicated to providing you with the support and information you need.
          Simply fill out the form below, and we'll get back to you as soon as
          possible. Thank you for considering GemHaus as your real estate
          partner.
        </p>
        <h2>
          or call us directly at{' '}
          <a className={styles.phone} href='tel:+14808419181'>
            (480) 841-9181
          </a>
        </h2>
      </div>

      <div className={styles.form}>
        <ContactForm />
      </div>
    </section>
  );
}
