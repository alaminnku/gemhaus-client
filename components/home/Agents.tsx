import Link from 'next/link';
import styles from './Agents.module.css';
import AgentButton from './AgentButton';

export default function Agents() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Find your place or hire industry experts.</h2>
        <AgentButton />
      </div>
      <div className={styles.agents}>
        <Link href='/agent/id' className={styles.agent}>
          <div className={styles.image_and_name}>
            <img src='/home/agent.png' />
            <p>Name</p>
          </div>
          <img
            className={styles.arrow}
            src='/home/right-arrow-black-icon.png'
          />
        </Link>
        <Link href='/agent/id' className={styles.agent}>
          <div className={styles.image_and_name}>
            <img src='/home/agent.png' />
            <p>Name</p>
          </div>
          <img
            className={styles.arrow}
            src='/home/right-arrow-black-icon.png'
          />
        </Link>
        <Link href='/agent/id' className={styles.agent}>
          <div className={styles.image_and_name}>
            <img src='/home/agent.png' />
            <p>Name</p>
          </div>
          <img
            className={styles.arrow}
            src='/home/right-arrow-black-icon.png'
          />
        </Link>
      </div>
    </section>
  );
}
