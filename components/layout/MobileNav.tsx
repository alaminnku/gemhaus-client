import { Dispatch, SetStateAction } from 'react';
import Logo from './Logo';
import styles from './MobileNav.module.css';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({ isOpen, setIsOpen }: Props) {
  return (
    <nav className={styles.container}>
      <Logo />

      <div
        className={`${styles.hamburger} ${isOpen && styles.open}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.line}></div>
      </div>
    </nav>
  );
}
