import styles from '@components/home/Marketing.module.css';
import Link from 'next/link';
import { RiVipDiamondLine } from 'react-icons/ri';

export default function Marketing() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>
          Full Experience <br />
          Home Ownership
        </h2>

        <p>
          At GemHaus, we believe that real estate ownership should be more than
          just a transaction-it should be an enriching journey. Our mission is
          to empower you to fully embrace the rewards of property ownership.
        </p>

        <Link className={styles.services_button} href='/'>
          Our Services <RiVipDiamondLine />
        </Link>
      </div>
    </section>
  );
}
