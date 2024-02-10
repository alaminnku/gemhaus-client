import styles from '@components/layout/GenericHero.module.css';
import Header from '@components/layout/Header';
import Image from 'next/image';
import { CSSProperties, ReactNode } from 'react';

type Props = {
  desktopRadius?: string;
  children: ReactNode;
  backgroundImage: string;
};

export default function GenericHero({
  desktopRadius,
  children,
  backgroundImage,
}: Props) {
  return (
    <section className={styles.container}>
      <Header isDarkBackground={true} />
      {children}
      <Image
        priority
        width={800}
        height={500}
        src={backgroundImage}
        alt='Background image'
        className={styles.background_image}
        style={
          {
            '--desktop_radius': desktopRadius || '0px',
          } as CSSProperties
        }
      />
    </section>
  );
}
