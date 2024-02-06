'use client';

import { CSSProperties, ReactNode, Dispatch, SetStateAction } from 'react';
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
