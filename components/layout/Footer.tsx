import styles from '@components/layout/Footer.module.css';
import Logo from './Logo';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa6';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FiInstagram } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import appStoreBadge from '@public/layout/app-store-badge.png';
import googlePlayBadge from '@public/layout/google-play-badge.png';
import { currentYear } from '@lib/utils';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.items}>
        <div className={styles.logo_and_socials}>
          <Logo isDarkBackground={true} />

          <div className={styles.socials}>
            <a href='/' target='_blank'>
              <FaFacebookF />
            </a>

            <a href='/' target='_blank'>
              <AiOutlineYoutube />
            </a>

            <a href='/' target='_blank'>
              <FaLinkedinIn />
            </a>

            <a href='/' target='_blank'>
              <FiInstagram />
            </a>
          </div>
        </div>

        <div className={styles.navigation}>
          <p>Overview</p>
          <Link href='/'>Buy</Link>
          <Link href='/'>Rent</Link>
          <Link href='/'>Sell</Link>
          <Link href='/'>Agents</Link>
          <Link href='/'>Blog</Link>
        </div>

        <div className={styles.navigation}>
          <p>Services</p>
          <Link href='/vacation-rental'>Short Terms Rentals</Link>
          <Link href='/long-term-rental'>Long Term Rentals</Link>
          <Link href='/buy-and-sell'>Buy & Sell</Link>
        </div>

        <div className={styles.apps}>
          <a href='/' target='_blank'>
            <Image src={googlePlayBadge} alt='Get it on Google Play' />
          </a>

          <a href='/' target='_blank'>
            <Image src={appStoreBadge} alt='Download on the App Store' />
          </a>
        </div>
      </div>

      <p className={styles.copyright}>
        Copyright &copy; {currentYear} - {currentYear + 1} gemhaus.com. All
        rights reserved. | Trademarks shown on the this site are the properties
        of their respective owners.
      </p>
    </footer>
  );
}
