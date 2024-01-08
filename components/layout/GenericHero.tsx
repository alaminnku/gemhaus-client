import styles from '@components/layout/GenericHero.module.css';
import Header from '@components/layout/Header';
import { CSSProperties, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  backgroundImage: string;
};

export default function GenericHero({ children, backgroundImage }: Props) {
  return (
    <section
      className={styles.container}
      style={
        {
          '--background_image': `url(${backgroundImage})`,
        } as CSSProperties
      }
    >
      <Header isDarkBackground={true} />
      {children}
    </section>
  );
}
