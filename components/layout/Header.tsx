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
  hasBlackBackground?: boolean;
};

export default function Header({
  hasBorder = false,
  isBlackSignIn = false,
  showLogoOnly = false,
  isYellowSignIn = false,
  isDarkBackground = false,
  hasBlackBackground = false,
}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className={`${styles.container} ${hasBorder && styles.has_border}`}>
      <DesktopNav
        isDarkBackground={isDarkBackground}
        isBlackSignIn={isBlackSignIn}
        showLogoOnly={showLogoOnly}
        isYellowSignIn={isYellowSignIn}
        hasBlackBackground={hasBlackBackground}
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
