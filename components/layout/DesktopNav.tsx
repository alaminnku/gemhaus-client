import styles from '@components/layout/DesktopNav.module.css';
import Logo from './Logo';
import Link from 'next/link';
import { FaRegCircleUser } from 'react-icons/fa6';

export default function DesktopNav() {
  return (
    <nav className={styles.container}>
      <Logo />

      <div className={styles.navigation}>
        <Link href='/'>Vacation Rental</Link>
        <Link href='/'>Long Term Rental</Link>
        <Link href='/'>Buy & Sell</Link>
        <Link href='/'>Blog</Link>
        <Link href='/'>Contact</Link>

        <Link href='/' className={styles.sign_in}>
          Sign in <FaRegCircleUser />
        </Link>
      </div>
    </nav>
  );
}
