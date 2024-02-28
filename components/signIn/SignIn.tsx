import Hero from './Hero';
import Form from './Form';
import styles from './SignIn.module.css';

export default function SignUp() {
  return (
    <section className={styles.container}>
      <Hero />
      <Form />
    </section>
  );
}
