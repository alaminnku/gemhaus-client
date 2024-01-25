'use client';

import styles from '@components/layout/DesktopNav.module.css';
import Logo from './Logo';
import Link from 'next/link';
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
          href='/blog'
          className={pathname === '/blog' ? styles.active : ''}
        >
          Blog
        </Link>
        <p className={`${styles.management} `}>
          Management
          <div className={styles.popup}>
            <Link href='/short-term-rental'>Short term rental</Link>
            <Link href='/long-term-rental'>Long term rental</Link>
          </div>
        </p>
        <Link
          href='/buy-and-sell'
          className={pathname === '/buy-and-sell' ? styles.active : ''}
        >
          List your home
        </Link>
        <Link
          href='/company'
          className={pathname === '/company' ? styles.active : ''}
        >
          Company
        </Link>
        <Link
          href='/contact'
          className={pathname === '/contact' ? styles.active : ''}
        >
          Contact us
        </Link>
      </div>

      <Link href='/sign-in' className={styles.sign_in}>
        Sign in
      </Link>
    </nav>
  );
}
