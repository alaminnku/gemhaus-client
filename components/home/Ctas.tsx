'use client';

import { CSSProperties, useEffect, useState } from 'react';
import styles from './Ctas.module.css';

const ctas = [
  'Get management today, 1st month on the Haus.',
  'Feeling ready for a vacation? Try Phoenix.',
  'Just $100/ month for long term rental mgmt!',
];

export default function Ctas() {
  const [spanPosition, setSpanPosition] = useState<number>(0);

  useEffect(() => {
    const spanHeight = 19;
    const titleInterval = setInterval(() => {
      setSpanPosition((prevState) =>
        prevState >= -spanHeight
          ? prevState - spanHeight
          : prevState + spanHeight * 2
      );
    }, 3000);

    return () => {
      clearInterval(titleInterval);
    };
  }, []);

  return (
    <div
      className={styles.container}
      style={
        {
          '--span_position': `${spanPosition}px`,
        } as CSSProperties
      }
    >
      <div className={styles.ctas}>
        {ctas.map((cta, index) => (
          <span key={index}>{cta}</span>
        ))}
      </div>
    </div>
  );
}
