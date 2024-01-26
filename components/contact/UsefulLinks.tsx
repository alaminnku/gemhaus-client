import Link from 'next/link';
import styles from './UsefulLinks.module.css';

export default function UsefulLinks() {
  return (
    <section className={styles.container}>
      <div>
        <p className={styles.title}>Job</p>
        <div className={styles.navigation}>
          <Link href='/'>Designer</Link>
          <Link href='/'>Front-End Developer</Link>
          <Link href='/'>Real Estate Agent</Link>
          <Link href='/'>Sales</Link>
          <Link href='/'>Intern Real Estate Agent</Link>
        </div>
      </div>
      <div>
        <p className={styles.title}>Location</p>
        <div className={styles.navigation}>
          <Link href='/'>Los Angeles</Link>
          <Link href='/'>Arizona</Link>
          <Link href='/'>Pristina</Link>
          <Link href='/'>Scottsdale, Arizona</Link>
          <Link href='/'>New York</Link>
        </div>
      </div>
      <div>
        <p className={styles.title}>Category</p>
        <div className={styles.navigation}>
          <Link href='/'>Design</Link>
          <Link href='/'>Development</Link>
          <Link href='/'>Real Estate</Link>
          <Link href='/'>Real Estate</Link>
          <Link href='/'>Real Estate</Link>
        </div>
      </div>
    </section>
  );
}
