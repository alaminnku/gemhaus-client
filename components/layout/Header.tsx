'use client';

import { useState } from 'react';
import DesktopNav from './DesktopNav';
import styles from './Header.module.css';
import MobileNav from './MobileNav';
import MobileMenu from './MobileMenu';

type Props = {
  hasBorder?: boolean;
  isYellowSignIn?: boolean;
  isBlackSignIn?: boolean;
  showLogoOnly?: boolean;
  isDarkBackground?: boolean;
  withDarkBackground?: boolean;
};

export default function Header({
  hasBorder = false,
  isBlackSignIn = false,
  showLogoOnly = false,
  isYellowSignIn = false,
  isDarkBackground = false,
  withDarkBackground = false,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={`${styles.container} ${hasBorder && styles.has_border}`}>
      <DesktopNav
        isDarkBackground={isDarkBackground}
        isBlackSignIn={isBlackSignIn}
        showLogoOnly={showLogoOnly}
        isYellowSignIn={isYellowSignIn}
        withDarkBackground={withDarkBackground}
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
