import styles from '@components/layout/DesktopNav.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { FaRegCircleUser } from 'react-icons/fa6';

export default function DesktopNav() {
  return (
    <nav className={styles.container}>
      <Logo />

      <div className={styles.navigation}>
        <Link href='/vacation-rental'>Vacation Rental</Link>
        <Link href='/long-term-rental'>Long Term Rental</Link>
        <Link href='/buy-and-sell'>Buy & Sell</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>Contact</Link>

        <Link href='/' className={styles.sign_in}>
          Sign in <FaRegCircleUser />
        </Link>
      </div>
    </nav>
  );
}
