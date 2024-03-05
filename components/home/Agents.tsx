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
        <Link href='/agents' className={styles.agent}>
          <div className={styles.image_and_name}>
            <img src='/home/agent.png' />
            <div className={styles.name_and_expertise}>
              <p className={styles.agent_name}>Agents</p>
              <p className={styles.expertise}>Agent can help you buy a home</p>
            </div>
          </div>
          <div className={styles.arrow}>
            <img src='/home/black-right-arrow-icon.png' />
          </div>
        </Link>
        <Link href='/short-term-rental' className={styles.agent}>
          <div className={styles.image_and_name}>
            <img src='/home/designer.png' />
            <div className={styles.name_and_expertise}>
              <p className={styles.agent_name}>Hospitality</p>
              <p className={styles.expertise}>Agent can help you buy a home</p>
            </div>
          </div>
          <div className={styles.arrow}>
            <img src='/home/black-right-arrow-icon.png' />
          </div>
        </Link>
        <Link href='/long-term-rental' className={styles.agent}>
          <div className={styles.image_and_name}>
            <img src='/home/manager.png' />
            <div className={styles.name_and_expertise}>
              <p className={styles.agent_name}>Managers</p>
              <p className={styles.expertise}>Agent can help you buy a home</p>
            </div>
          </div>
          <div className={styles.arrow}>
            <img src='/home/black-right-arrow-icon.png' />
          </div>
        </Link>
      </div>

      <div className={styles.roles}>
        <Link href='/long-term-rental' className={styles.role}>
          <img className={styles.agent_image} src='/home/manager.png' />
          <p>Managers</p>
          <img
            className={styles.right_arrow}
            src='/home/black-right-arrow-icon.png'
          />
        </Link>
        <Link href='/short-term-rental' className={styles.role}>
          <img className={styles.agent_image} src='/home/designer.png' />
          <p>Hospitality</p>
          <img
            className={styles.right_arrow}
            src='/home/black-right-arrow-icon.png'
          />
        </Link>
        <Link href='/agents' className={styles.role}>
          <img className={styles.agent_image} src='/home/agent.png' />
          <p>Agents</p>
          <img
            className={styles.right_arrow}
            src='/home/black-right-arrow-icon.png'
          />
        </Link>
      </div>
    </section>
  );
}
