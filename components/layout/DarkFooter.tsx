import styles from '@components/layout/DarkFooter.module.css';
import Logo from './Logo';
import Socials from './Socials';

type Props = {
  isRounded?: boolean;
};

export default function DarkFooter({ isRounded = false }: Props) {
  return (
    <footer className={`${styles.container} ${isRounded && styles.is_rounded}`}>
      <div className={styles.logo}>
        <Logo isDarkBackground={true} />
      </div>
      <Socials />
    </footer>
  );
}
