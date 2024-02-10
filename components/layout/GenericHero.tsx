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
        src={backgroundImage}
        width={800}
        height={500}
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
