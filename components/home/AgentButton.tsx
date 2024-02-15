import Link from 'next/link';
import styles from './AgentButton.module.css';

export default function AgentButton() {
  return (
    <Link href='/agents' className={styles.container}>
      Take me to Agent Page
      <img src='/home/right-arrow-green-icon.png' />
    </Link>
  );
}
