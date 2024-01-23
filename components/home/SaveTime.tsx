import Image from 'next/image';
import styles from './SaveTime.module.css';
import saveTime from '@public/home/save-time.png';

export default function SaveTime() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.title}>
          Save Time & <br /> Money
        </p>
        <p className={styles.description}>
          Unlock Efficiency. Our streamlined processes and expert team ensure
          you save valuable time and resources on your real estate journey.
        </p>

        <p className={styles.title}>
          Worry Less, <br /> Enjoy More
        </p>
        <p className={styles.description}>
          Peace of Mind Guaranteed. With GemHaus by your side, you can worry
          less about property management and focus on enjoying the fruits of
          your investment.
        </p>
      </div>

      <Image src={saveTime} alt='Hand holding a clock' />
    </section>
  );
}
