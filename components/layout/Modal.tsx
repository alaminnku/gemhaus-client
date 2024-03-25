'use client';

import {
  CSSProperties,
  ReactNode,
  Dispatch,
  SetStateAction,
  useEffect,
} from 'react';
import styles from './Modal.module.css';

type Props = {
  width?: CSSProperties;
  children: ReactNode;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function Modal({
  width,
  children,
  showModal,
  setShowModal,
}: Props) {
  // Disable body scroll when modal is open
  useEffect(() => {
    const body = document.querySelector('body');
    showModal
      ? (body!.style.overflow = 'hidden')
      : (body!.style.overflow = 'auto');
  });
  return (
    <>
      <div
        className={`${styles.modal} ${showModal && styles.show}`}
        style={{ '--width': width || 'fit-content' } as CSSProperties}
      >
        {children}
      </div>

      <div
        onClick={() => setShowModal(false)}
        className={`${styles.overlay} ${showModal && styles.show}`}
      ></div>
    </>
  );
}
