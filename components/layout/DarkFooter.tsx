import styles from '@components/layout/DarkFooter.module.css';
import Logo from './Logo';
import Socials from './Socials';

export default function DarkFooter() {
  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <Logo isDarkBackground={true} />
      </div>
      <Socials />
    </footer>
  );
}
