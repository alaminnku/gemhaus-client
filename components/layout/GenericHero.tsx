import styles from '@components/layout/GenericHero.module.css';
import Header from '@components/layout/Header';
import { CSSProperties, ReactNode } from 'react';

type Props = {
  isRounded?: boolean;
  children: ReactNode;
  backgroundImage: string;
};

export default function GenericHero({
  children,
  isRounded,
  backgroundImage,
}: Props) {
  return (
    <section
      className={styles.container}
      style={
        {
          '--radius': isRounded ? '62px' : '0px',
          '--background_image': `url(${backgroundImage})`,
        } as CSSProperties
      }
    >
      <Header isDarkBackground={true} />
      {children}
    </section>
  );
}
