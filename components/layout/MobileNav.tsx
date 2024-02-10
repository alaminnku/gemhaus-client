import { Dispatch, SetStateAction } from 'react';
import styles from './MobileNav.module.css';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Link from 'next/link';

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
      <HiOutlineMenuAlt4
        size={24}
        onClick={() => setIsOpen(!isOpen)}
        color={isDarkBackground ? '#ffffff' : '#000000'}
      />

      <Link
        href='/sing-in'
        className={`${styles.sign_in} ${
          isDarkBackground && styles.is_dark_background
        }`}
      >
        Sign in
      </Link>
    </nav>
  );
}
