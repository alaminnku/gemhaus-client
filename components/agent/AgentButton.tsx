import Link from 'next/link';
import styles from './AgentButton.module.css';

export default function AgentButton() {
  return (
    <Link href='/agents' className={styles.container}>
      Work with Bill
      <img src='/home/green-right-arrow-icon.png' />
    </Link>
  );
}
