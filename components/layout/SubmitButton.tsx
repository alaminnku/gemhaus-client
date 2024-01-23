'use client';

import { useFormStatus } from 'react-dom';
import styles from './SubmitButton.module.css';
import { CSSProperties } from 'react';

type Props = {
  text: string;
  style?: CSSProperties;
};

export default function SubmitButton({ text, style }: Props) {
  const { pending } = useFormStatus();
  return (
    <button type='submit' className={styles.submit_button} style={style}>
      {pending ? 'Adding...' : text}
    </button>
  );
}
