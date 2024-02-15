import styles from './SearchTypes.module.css';
import Link from 'next/link';

export default function SearchTypes() {
  return (
    <div className={styles.container}>
      <div className={styles.vacation}>
        <img src='/home/vacation-icon.png' alt='Vacation icon' />
        <p>Vacation</p>
      </div>

      <Link href='/vacation-rental' className={styles.rent}>
        <img src='/home/rent-icon.png' alt='Rent icon' />
        <p>Rent</p>
      </Link>

      <Link href='/buy-and-sell' className={styles.buy}>
        <img src='/home/buy-icon.png' alt='Buy icon' />
        <p>Buy</p>
      </Link>
    </div>
  );
}
