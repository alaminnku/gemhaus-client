'use client';

import styles from '@components/layout/DesktopNav.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';

type Props = {
  isYellowSignIn: boolean;
  showLogoOnly: boolean;
  isBlackSignIn: boolean;
  isDarkBackground: boolean;
  withDarkBackground: boolean;
};

export default function DesktopNav({
  isDarkBackground,
  isBlackSignIn,
  showLogoOnly,
  isYellowSignIn,
  withDarkBackground,
}: Props) {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <nav
      className={`${styles.container} ${
        (isDarkBackground || withDarkBackground) && styles.is_dark_background
      } ${showLogoOnly && styles.show_logo_only} ${
        withDarkBackground && styles.with_dark_background
      }`}
    >
      <Logo isDarkBackground={isDarkBackground || withDarkBackground} />

      <div className={styles.navigation}>
        <Link
          href='/blog'
          className={`${styles.nav_link} ${
            pathname === '/blog' && styles.active
          }`}
        >
          Blog
        </Link>

        <div className={styles.management}>
          <p className={styles.management_title}>Management</p>

          <div className={styles.popup}>
            <div className={styles.str_ltr}>
              <Link href='/short-term-rental'>
                <img src='/layout/popup-icon-str.png' />
                <div>
                  <p className={styles.title}>Short Term Rental</p>
                  <p className={styles.description}>
                    Turn your extra space into your next opportunity
                  </p>
                </div>
              </Link>
              <Link href='/long-term-rental'>
                <img src='/layout/popup-icon-ltr.png' />
                <div>
                  <p className={styles.title}>Long Term Rental</p>
                  <p className={styles.description}>
                    Transform your property into a stable, long-term investment
                  </p>
                </div>
              </Link>
            </div>
            <div className={styles.others}>
              <Link href='/contact'>Send us a question</Link>
              <Link href='/agents'>Get in Touch with Agents</Link>
              <Link href='/reviews'>What's the difference?</Link>
            </div>
          </div>
        </div>

        <Link
          href='/buy-and-sell'
          className={`${styles.nav_link} ${
            pathname === '/buy-and-sell' && styles.active
          }`}
        >
          List your home
        </Link>
        <Link
          href='/company'
          className={`${styles.nav_link} ${
            pathname === '/company' && styles.active
          }`}
        >
          Company
        </Link>
        <Link
          href='/contact'
          className={`${styles.nav_link} ${
            pathname === '/contact' && styles.active
          }`}
        >
          Contact us
        </Link>
      </div>

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
            isBlackSignIn && styles.black_sign_in
          } ${isYellowSignIn && styles.yellow_sign_in}`}
        >
          Sign in
        </Link>
      )}
    </nav>
  );
}
