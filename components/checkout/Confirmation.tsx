import Image from 'next/image';
import styles from './Confirmation.module.css';
import Link from 'next/link';

export default function Confirmation() {
  return (
    <section className={styles.container}>
      <h1>Property Booked</h1>
      <Image
        src='/checkout/confirmation.png'
        width={400}
        height={400}
        quality={100}
        alt='Booking confirmation image'
      />
      <p>
        We will inform you via email later Once the transaction has been
        accepted
      </p>
      <Link className={styles.button} href='/'>
        Back to Home
      </Link>
    </section>
  );
}
