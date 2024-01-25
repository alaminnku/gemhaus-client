import Link from 'next/link';
import styles from './LinkButton.module.css';
import { CSSProperties } from 'react';

type Props = {
  href: string;
  text: string;
  style?: CSSProperties;
};

export default function LinkButton({ href, text, style }: Props) {
  return (
    <Link href={href} style={style} className={styles.container}>
      {text}
    </Link>
  );
}
