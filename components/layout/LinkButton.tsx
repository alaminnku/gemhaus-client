import Link from 'next/link';
import styles from './LinkButton.module.css';
import { CSSProperties, ReactNode } from 'react';

type Props = {
  href: string;
  text: string;
  icon?: ReactNode;
  style?: CSSProperties;
};

export default function LinkButton({ href, text, icon, style }: Props) {
  return (
    <Link
      href={href}
      style={style}
      className={`${styles.link_button} ${icon && styles.icon}`}
    >
      {text} {icon}
    </Link>
  );
}
