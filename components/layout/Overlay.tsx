import { Dispatch, SetStateAction } from 'react';
import styles from './Overlay.module.css';

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
};

export default function Overlay({ show, setShow }: Props) {
  return (
    <div
      onClick={() => setShow(false)}
      className={`${styles.container} ${show && styles.show}`}
    ></div>
  );
}
