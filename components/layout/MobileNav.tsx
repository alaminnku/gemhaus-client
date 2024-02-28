import { Dispatch, SetStateAction } from 'react';
import styles from './MobileNav.module.css';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

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
  const { data: session } = useSession();

  return (
    <nav className={styles.container}>
      <HiOutlineMenuAlt4
        size={24}
        onClick={() => setIsOpen(!isOpen)}
        color={isDarkBackground ? '#ffffff' : '#000000'}
      />

      {session && session.user ? (
        <Image
          width={100}
          height={100}
          alt='User image'
          className={styles.user_image}
          src={
            session.user.image && session.user.image !== 'null'
              ? session.user.image
              : '/layout/user-icon.png'
          }
        />
      ) : (
        <Link
          href='/sign-in'
          className={`${styles.sign_in} ${
            isDarkBackground && styles.is_dark_background
          }`}
        >
          Sign in
        </Link>
      )}
    </nav>
  );
}
