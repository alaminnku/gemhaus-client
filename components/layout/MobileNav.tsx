import { Dispatch, SetStateAction } from 'react';
import styles from './MobileNav.module.css';

type Props = {
  isOpen: boolean;
  isDarkBackground: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({
  isOpen,
  setIsOpen,
  isDarkBackground,
}: Props) {
  return (
    <nav className={styles.container}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.line} ${
          isDarkBackground && styles.is_dark_background
        }`}
      ></div>
    </nav>
  );
}
