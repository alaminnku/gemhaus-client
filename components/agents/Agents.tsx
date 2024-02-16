import Image from 'next/image';
import styles from './Agents.module.css';

export default function Agents() {
  return (
    <section className={styles.container}>
      <div className={styles.agent}>
        <Image
          src='/agents/agent.png'
          width={400}
          height={400}
          alt='Agent image'
        />

        <p className={styles.name}>Bill Thomas</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.email}>(626) 807-9132</p>
      </div>
      <div className={styles.agent}>
        <Image
          src='/agents/agent.png'
          width={400}
          height={400}
          alt='Agent image'
        />

        <p className={styles.name}>Bill Thomas</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.email}>(626) 807-9132</p>
      </div>
      <div className={styles.agent}>
        <Image
          src='/agents/agent.png'
          width={400}
          height={400}
          alt='Agent image'
        />

        <p className={styles.name}>Bill Thomas</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.email}>(626) 807-9132</p>
      </div>
      <div className={styles.agent}>
        <Image
          src='/agents/agent.png'
          width={400}
          height={400}
          alt='Agent image'
        />

        <p className={styles.name}>Bill Thomas</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.email}>(626) 807-9132</p>
      </div>
      <div className={styles.agent}>
        <Image
          src='/agents/agent.png'
          width={400}
          height={400}
          alt='Agent image'
        />

        <p className={styles.name}>Bill Thomas</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.email}>(626) 807-9132</p>
      </div>
    </section>
  );
}
