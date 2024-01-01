import Properties from './Properties';
import styles from '@components/home/LuxuryGems.module.css';

export default function LuxuryGems() {
  return (
    <section className={styles.container}>
      <span>Featured Properties</span>
      <h2>Luxury Gems</h2>

      <Properties />
    </section>
  );
}
