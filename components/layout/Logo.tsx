import Link from 'next/link';
import Image from 'next/image';
import logo from '@public/logo-white.png';
import styles from '@components/layout/Logo.module.css';

export default function Logo() {
  return (
    <Link href='/' className={styles.container}>
      <Image src={logo} alt='GemHaus logo' />
    </Link>
  );
}
