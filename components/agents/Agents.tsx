import Image from 'next/image';
import styles from './Agents.module.css';
import Link from 'next/link';

export default function Agents() {
  return (
    <section className={styles.container}>
      <Link href='/agents/agent' className={styles.agent}>
        <Image
          src='/agents/agent.png'
          width={400}
          height={400}
          alt='Agent image'
        />

        <p className={styles.name}>Bill Thomas</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.phone}>(626) 807-9132</p>
      </Link>
      <Link href='/agents/agent' className={styles.agent}>
        <Image
          src='/agents/agent.png'
          width={400}
          height={400}
          alt='Agent image'
        />

        <p className={styles.name}>Bill Thomas</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.email}>(626) 807-9132</p>
      </Link>
      <Link href='/agents/agent' className={styles.agent}>
        <Image
          src='/agents/agent.png'
          width={400}
          height={400}
          alt='Agent image'
        />

        <p className={styles.name}>Bill Thomas</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.email}>(626) 807-9132</p>
      </Link>
      <Link href='/agents/agent' className={styles.agent}>
        <Image
          src='/agents/agent.png'
          width={400}
          height={400}
          alt='Agent image'
        />

        <p className={styles.name}>Bill Thomas</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.email}>(626) 807-9132</p>
      </Link>
      <Link href='/agents/agent' className={styles.agent}>
        <Image
          src='/agents/agent.png'
          width={400}
          height={400}
          alt='Agent image'
        />

        <p className={styles.name}>Bill Thomas</p>
        <p className={styles.email}>abbie.knowles@theagencyre.com</p>
        <p className={styles.email}>(626) 807-9132</p>
      </Link>
    </section>
  );
}
