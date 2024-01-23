import styles from '@components/layout/PropertyEvaluation.module.css';
import Image from 'next/image';
import newsletter from '@public/layout/newsletter.png';
import { ReactNode } from 'react';
import Newsletter from '@components/layout/Newsletter';

type Props = {
  children: ReactNode;
};

export default function PropertyEvaluation({ children }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Property Evaluation</h2>
        <p>
          Unlock the Power of Flexibility. We specialize in turning your
          property into a lucrative short-term rental, optimizing your returns
          without the long-term commitment. We specialize in delivering seamless
          and profitable short-term rental experiences for property owners and
          guests alike
        </p>
      </div>

      <div className={styles.evaluation_form}>{children}</div>

      <Newsletter />
    </section>
  );
}
