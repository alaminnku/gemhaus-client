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
            <div className={styles.name_and_expertise}>
              <p className={styles.agent_name}>Agents</p>
              <p className={styles.expertise}>Agent can help you buy a home</p>
            </div>
          </div>
          <div className={styles.arrow}>
            <img src='/home/black-right-arrow-icon.png' />
          </div>
        </Link>
        <Link href='/agent/id' className={styles.agent}>
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
        <Link href='/agent/id' className={styles.agent}>
          <div className={styles.image_and_name}>
            <img src='/home/designer.png' />
            <div className={styles.name_and_expertise}>
              <p className={styles.agent_name}>Designer</p>
              <p className={styles.expertise}>Agent can help you buy a home</p>
            </div>
          </div>
          <div className={styles.arrow}>
            <img src='/home/black-right-arrow-icon.png' />
          </div>
        </Link>
      </div>

      <div className={styles.roles}>
        <Link href='/agent/id' className={styles.role}>
          <img className={styles.agent_image} src='/home/manager.png' />
          <p>Manager</p>
          <img
            className={styles.right_arrow}
            src='/home/black-right-arrow-icon.png'
          />
        </Link>
        <Link href='/agent/id' className={styles.role}>
          <img className={styles.agent_image} src='/home/designer.png' />
          <p>Designers</p>
          <img
            className={styles.right_arrow}
            src='/home/black-right-arrow-icon.png'
          />
        </Link>
        <Link href='/agent/id' className={styles.role}>
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
