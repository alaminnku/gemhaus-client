import styles from '@components/layout/PropertyEvaluation.module.css';
import Image from 'next/image';
import newsletter from '@public/layout/newsletter.png';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function PropertyEvaluation({ children }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Property Evaluation</h2>
        <p>
          Fill out the information below to reveal the tru earning capacity of
          your property. Our expert property evaluation services are here to
          help you determine if a short-term rental is the right fit for your
          home. We analyze market dynamics, property features, and guest
          preference to provide you with an accurate revenue projection. With
          data-driven insights, we can ensure a precise proforma tailored to
          your property.
        </p>
      </div>

      {children}

      <div className={styles.subscribe}>
        <Image src={newsletter} alt='Newsletter image' />

        <form>
          <h3>Subscribe To Our Newsletter</h3>

          <div className={styles.subscribe_inputs}>
            <input type='email' placeholder='Enter your email' />
            <input type='submit' value='Subscribe Us' />
          </div>
        </form>
      </div>
    </section>
  );
}
