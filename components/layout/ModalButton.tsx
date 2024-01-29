import { Dispatch, SetStateAction, ReactNode, CSSProperties } from 'react';
import styles from './ModalButton.module.css';
import { inter } from '@lib/utils';

type Props = {
  text: string;
  icon?: ReactNode;
  style?: CSSProperties;
  isReversed?: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function ModalButton({
  text,
  icon,
  style,
  isReversed,
  setShowModal,
}: Props) {
  return (
    <button
      style={style}
      className={`${styles.container} ${icon && styles.icon} ${
        isReversed && styles.reversed
      } ${inter.className}`}
      onClick={() => setShowModal(true)}
    >
      {text} {icon}
    </button>
  );
}
