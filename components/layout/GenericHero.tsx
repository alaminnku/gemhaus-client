import styles from '@components/layout/GenericHero.module.css';
import Header from '@components/layout/Header';
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
    <section
      className={styles.container}
      style={
        {
          '--desktop_radius': desktopRadius || '0px',
          '--background_image': `url(${backgroundImage})`,
        } as CSSProperties
      }
    >
      <Header isDarkBackground={true} />
      {children}
    </section>
  );
}
