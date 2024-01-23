import Link from 'next/link';
import styles from './LinkButton.module.css';
import { CSSProperties, ReactNode } from 'react';

type Props = {
  href: string;
  text: string;
  icon?: ReactNode;
  style?: CSSProperties;
  isReversed?: boolean;
};

export default function LinkButton({
  href,
  text,
  icon,
  style,
  isReversed,
}: Props) {
  return (
    <Link
      href={href}
      style={style}
      className={`${styles.container} ${icon && styles.icon} ${
        isReversed && styles.reversed
      }`}
    >
      {text} {icon}
    </Link>
  );
}
