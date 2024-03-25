'use client';

import Modal from '@components/layout/Modal';
import styles from './HouseRules.module.css';
import { useState } from 'react';
import HouseRulesModal from './HouseRulesModal';

type Props = {
  houseRulesContent: string;
};

export default function HouseRules({ houseRulesContent }: Props) {
  const [showHouseRulesModal, setShowHouseRulesModal] = useState(false);

  const rules = houseRulesContent
    .split('House Rules')[1]
    .trim()
    .split('\n')
    .map((rule) => rule.replace(/^- |Pets: /, ''));

  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>House Rules</p>
        <div className={styles.rules}>
          {rules.slice(0, 3).map((rule, index) => (
            <div className={styles.rule} key={index}>
              <img src='/vacation-rental/clock-icon.png' alt='Clock icon' />
              <p>{rule}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setShowHouseRulesModal(true)}>
          Show All {rules.length} House Rules
        </button>
      </div>

      <Modal
        showModal={showHouseRulesModal}
        setShowModal={setShowHouseRulesModal}
        children={
          <HouseRulesModal
            rules={rules}
            setShowHouseRulesModal={setShowHouseRulesModal}
          />
        }
      />
    </>
  );
}
