import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect } from 'react';
import styles from './MobileMenu.module.css';
import { IoClose } from 'react-icons/io5';
import Overlay from './Overlay';
import Logo from './Logo';

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileMenu({ isOpen, setIsOpen }: Props) {
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

        <Link href='/sign-in' className={styles.sign_in}>
          Sign in
        </Link>

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
