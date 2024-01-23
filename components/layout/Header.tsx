import DesktopNav from './DesktopNav';
import styles from './Header.module.css';

type Props = {
  isDarkBackground?: boolean;
};

export default function Header({ isDarkBackground = false }: Props) {
  return (
    <header className={styles.container}>
      <DesktopNav isDarkBackground={isDarkBackground} />
    </header>
  );
}
