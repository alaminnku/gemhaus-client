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
        className={`${styles.hamburger} ${isOpen && styles.open} `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${styles.line} ${
            isDarkBackground && styles.is_dark_background
          }`}
        ></div>
      </div>
    </nav>
  );
}
