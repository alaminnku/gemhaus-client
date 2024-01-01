import styles from '@components/home/Properties.module.css';
import Property from './Property';

export default function Properties() {
  return (
    <div className={styles.container}>
      <Property />
      <Property />
      <Property />
    </div>
  );
}
