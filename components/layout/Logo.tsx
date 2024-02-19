import Link from 'next/link';
import styles from '@components/layout/Logo.module.css';
import { CSSProperties } from 'react';

type Props = {
  style?: CSSProperties;
  isDarkBackground?: boolean;
};

export default function Logo({ style, isDarkBackground = false }: Props) {
  return (
    <Link href='/' className={styles.container} style={style}>
      <img
        src={
          isDarkBackground ? '/layout/logo-white.png' : '/layout/logo-black.png'
        }
        alt='GemHaus logo'
      />
    </Link>
  );
}
