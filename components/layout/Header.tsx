'use client';

import { useState } from 'react';
import DesktopNav from './DesktopNav';
import styles from './Header.module.css';
import MobileNav from './MobileNav';
import { inter } from '@lib/utils';
import MobileMenu from './MobileMenu';

type Props = {
  hasBorder?: boolean;
  isBlackSignIn?: boolean;
  showLogoOnly?: boolean;
  isDarkBackground?: boolean;
};

export default function Header({
  hasBorder = false,
  isBlackSignIn = false,
  showLogoOnly = false,
  isDarkBackground = false,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className={`${styles.container} ${inter.className} ${
        hasBorder && styles.has_border
      }`}
    >
      <DesktopNav
        isDarkBackground={isDarkBackground}
        isBlackSignIn={isBlackSignIn}
        showLogoOnly={showLogoOnly}
      />
      <MobileNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isDarkBackground={isDarkBackground}
      />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
