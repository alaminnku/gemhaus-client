'use client';

import { useFormStatus } from 'react-dom';
import styles from './SubmitButton.module.css';
import { CSSProperties } from 'react';
import { BeatLoader } from 'react-spinners';

type Props = {
  text: string;
  style?: CSSProperties;
};

export default function SubmitButton({ text, style }: Props) {
  const { pending } = useFormStatus();

  return (
    <button type='submit' className={styles.submit_button} style={style}>
      {pending ? <BeatLoader color='#ffffff' size={10} margin={4} /> : text}
    </button>
  );
}
