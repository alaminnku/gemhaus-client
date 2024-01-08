'use client';

import styles from '@components/layout/DesktopNav.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { FaRegCircleUser } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';

type Props = {
  isDarkBackground: boolean;
};

export default function DesktopNav({ isDarkBackground }: Props) {
  const pathname = usePathname();

  return (
    <nav
      className={`${styles.container} ${
        isDarkBackground && styles.is_dark_background
      }`}
    >
      <Logo isDarkBackground={isDarkBackground} />

      <div className={styles.navigation}>
        <Link
          href='/vacation-rental'
          className={pathname === '/vacation-rental' ? styles.active : ''}
        >
          Vacation Rental
        </Link>
        <Link
          href='/long-term-rental'
          className={pathname === '/long-term-rental' ? styles.active : ''}
        >
          Long Term Rental
        </Link>
        <Link
          href='/buy-and-sell'
          className={pathname === '/buy-and-sell' ? styles.active : ''}
        >
          Buy & Sell
        </Link>
        <Link
          href='/blog'
          className={pathname === '/blog' ? styles.active : ''}
        >
          Blog
        </Link>
        <Link
          href='/contact'
          className={pathname === '/contact' ? styles.active : ''}
        >
          Contact
        </Link>

        <Link href='/sign-in' className={styles.sign_in}>
          Sign in <FaRegCircleUser />
        </Link>
      </div>
    </nav>
  );
}
