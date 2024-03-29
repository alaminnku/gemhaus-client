import Logo from './Logo';
import styles from './GreenFooter.module.css';
import Socials from './Socials';

export default function GreenFooter() {
  return (
    <footer className={styles.container}>
      <div className={styles.branding_and_contact}>
        <div>
          <div className={styles.logo}>
            <Logo isDarkBackground={true} />
          </div>
          <Socials />
        </div>

        <div className={styles.contact}>
          <p className={styles.contact_title}>contact us</p>

          <a className={styles.email} href='mailto:hello@gemhaus.com'>
            hello@gemhaus.com
          </a>
          <p className={styles.email}>Social media - @gemhausgroup</p>
          <p className={styles.website}>GemHaus.com</p>
        </div>
      </div>
      <img
        className={styles.house_logo}
        src='/layout/house-logo.png'
        alt='House logo'
      />
    </footer>
  );
}
