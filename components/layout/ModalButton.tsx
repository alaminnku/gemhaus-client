import { Dispatch, SetStateAction, ReactNode, CSSProperties } from 'react';
import styles from './ModalButton.module.css';

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
      }`}
      onClick={() => setShowModal(true)}
    >
      {text} {icon}
    </button>
  );
}
