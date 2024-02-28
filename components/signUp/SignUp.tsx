import Hero from './Hero';
import Form from './Form';
import styles from './SignUp.module.css';

export default function SignUp() {
  return (
    <section className={styles.container}>
      <Hero />
      <Form />
    </section>
  );
}
