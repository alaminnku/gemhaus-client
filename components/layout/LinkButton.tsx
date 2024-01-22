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
    <Link className={styles.link_button} href={href} style={style}>
      {text}
    </Link>
  );
}
