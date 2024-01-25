'use client';

import { useState } from 'react';
import DesktopNav from './DesktopNav';
import styles from './Header.module.css';
import MobileNav from './MobileNav';
import { inter } from '@lib/utils';

type Props = {
  isDarkBackground?: boolean;
};

export default function Header({ isDarkBackground = false }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={`${styles.container} ${inter.className}`}>
      <DesktopNav isDarkBackground={isDarkBackground} />
      <MobileNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDarkBackground={isDarkBackground}
      />
    </header>
  );
}
