import { Dispatch, SetStateAction } from 'react';
import styles from './HouseRulesModal.module.css';

type Props = {
  rules: string[];
  setShowHouseRulesModal: Dispatch<SetStateAction<boolean>>;
};

export default function HouseRulesModal({
  rules,
  setShowHouseRulesModal,
}: Props) {
  return (
    <div className={styles.container}>
      <img
        className={styles.close_icon}
        src='/layout/close-icon.png'
        alt='Close icon'
        onClick={() => setShowHouseRulesModal(false)}
      />

      <div className={styles.rules}>
        {rules.map((rule, index) => (
          <div className={styles.rule} key={index}>
            <img src='/vacation-rental/clock-icon.png' alt='Clock icon' />
            <p>{rule}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
