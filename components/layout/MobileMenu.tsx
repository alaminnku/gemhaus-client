import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect } from 'react';
import styles from './MobileMenu.module.css';
import { IoClose } from 'react-icons/io5';
import Overlay from './Overlay';
import Logo from './Logo';
import { useSession } from 'next-auth/react';
import Image from 'next/image';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileMenu({ isOpen, setIsOpen }: Props) {
  const { data: session } = useSession();

  useEffect(() => {
    const body = document.querySelector('body');

    isOpen
      ? (body!.style.overflow = 'hidden')
      : (body!.style.overflow = 'auto');
  });

  return (
    <>
      <div className={`${styles.container} ${isOpen && styles.open}`}>
        <IoClose
          className={styles.close_icon}
          onClick={() => setIsOpen(false)}
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
          <Link href='/sign-in' className={styles.sign_in}>
            Sign in
          </Link>
        )}

        <div className={styles.nav_items}>
          <Link onClick={() => setIsOpen(false)} href='/'>
            Home
          </Link>
          <Link onClick={() => setIsOpen(false)} href='/agents'>
            Agents
          </Link>
          <Link onClick={() => setIsOpen(false)} href='/blog'>
            Blog
          </Link>
          <Link onClick={() => setIsOpen(false)} href='/long-term-rental'>
            Long term rental
          </Link>
          <Link onClick={() => setIsOpen(false)} href='/short-term-rental'>
            Short term rental
          </Link>
          <Link onClick={() => setIsOpen(false)} href='/buy-and-sell'>
            List your home
          </Link>
          <Link onClick={() => setIsOpen(false)} href='/company'>
            Company
          </Link>
          <Link onClick={() => setIsOpen(false)} href='/contact'>
            Contact us
          </Link>
        </div>

        <Logo style={{ paddingLeft: '18px' }} />
      </div>

      <Overlay show={isOpen} setShow={setIsOpen} />
    </>
  );
}
