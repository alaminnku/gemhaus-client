'use client';

import { CSSProperties, ReactNode, Dispatch, SetStateAction } from 'react';
import styles from './Modal.module.css';
import Overlay from './Overlay';

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

      <Overlay show={showModal} setShow={setShowModal} />

      {/* <div
        onClick={() => setShowModal(false)}
        className={`${styles.overlay} ${showModal && styles.show}`}
      ></div> */}
    </>
  );
}
