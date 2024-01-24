import Link from 'next/link';
import styles from '@components/layout/Logo.module.css';

type Props = {
  isDarkBackground?: boolean;
};

export default function Logo({ isDarkBackground = false }: Props) {
  return (
    <Link href='/' className={styles.container}>
      <img
        src={
          isDarkBackground ? '/layout/logo-white.png' : '/layout/logo-black.png'
        }
        alt='GemHaus logo'
      />
      <p className={isDarkBackground ? styles.light : ''}>GemHaus</p>
    </Link>
  );
}
