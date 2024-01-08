import Link from 'next/link';
import Image from 'next/image';
import logoWhite from '@public/layout/logo-white.png';
import logoBlack from '@public/layout/logo-black.png';
import styles from '@components/layout/Logo.module.css';

type Props = {
  isDarkBackground?: boolean;
};

export default function Logo({ isDarkBackground = false }: Props) {
  return (
    <Link href='/' className={styles.container}>
      <Image
        src={isDarkBackground ? logoWhite : logoBlack}
        alt='GemHaus logo'
      />
    </Link>
  );
}
