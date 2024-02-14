import styles from './ExploreProperties.module.css';
import Link from 'next/link';

export default function ExploreProperties() {
  return (
    <div className={styles.container}>
      <p>Continue exploring Properties</p>
      <Link href='/vacation-rental'>Show more</Link>
    </div>
  );
}
