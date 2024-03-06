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

      <div className={styles.mobile_roles}>
        <Link href='/agents' className={styles.mobile_role}>
          <div className={styles.image_and_name}>
            <img src='/home/agent.png' />
            <div className={styles.name_and_expertise}>
              <p className={styles.mobile_role_name}>Agents</p>
              <p className={styles.expertise}>Can help you buy a home</p>
            </div>
          </div>
          <div className={styles.mobile_arrow}>
            <img src='/home/black-right-arrow-icon.png' />
          </div>
        </Link>
        <Link href='/short-term-rental' className={styles.mobile_role}>
          <div className={styles.image_and_name}>
            <img src='/home/designer.png' />
            <div className={styles.name_and_expertise}>
              <p className={styles.mobile_role_name}>Hospitality</p>
              <p className={styles.expertise}>Helps manage your Airbnbs</p>
            </div>
          </div>
          <div className={styles.mobile_arrow}>
            <img src='/home/black-right-arrow-icon.png' />
          </div>
        </Link>
        <Link href='/long-term-rental' className={styles.mobile_role}>
          <div className={styles.image_and_name}>
            <img src='/home/manager.png' />
            <div className={styles.name_and_expertise}>
              <p className={styles.mobile_role_name}>Managers</p>
              <p className={styles.expertise}>Helps manage your rentals</p>
            </div>
          </div>
          <div className={styles.mobile_arrow}>
            <img src='/home/black-right-arrow-icon.png' />
          </div>
        </Link>
      </div>

      <div className={styles.desktop_roles}>
        <Link href='/long-term-rental' className={styles.desktop_role}>
          <img className={styles.desktop_role_image} src='/home/manager.png' />
          <p>Managers</p>
          <img
            className={styles.desktop_arrow}
            src='/home/black-right-arrow-icon.png'
          />
        </Link>
        <Link href='/short-term-rental' className={styles.desktop_role}>
          <img className={styles.desktop_role_image} src='/home/designer.png' />
          <p>Hospitality</p>
          <img
            className={styles.desktop_arrow}
            src='/home/black-right-arrow-icon.png'
          />
        </Link>
        <Link href='/agents' className={styles.desktop_role}>
          <img className={styles.desktop_role_image} src='/home/agent.png' />
          <p>Agents</p>
          <img
            className={styles.desktop_arrow}
            src='/home/black-right-arrow-icon.png'
          />
        </Link>
      </div>
    </section>
  );
}
