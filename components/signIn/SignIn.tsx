import Hero from './Hero';
import Form from './Form';
import styles from './SignIn.module.css';

export default function SignIn() {
  return (
    <section className={styles.container}>
      <Hero />
      <Form />
    </section>
  );
}
