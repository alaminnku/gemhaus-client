'use client';

import { useState } from 'react';
import styles from './AgentButton.module.css';
import Modal from '@components/layout/Modal';
import ContactForm from '@components/agent/ContactForm';
import { getFirstName } from '@lib/utils';

type Props = {
  id: string;
  name: string;
};

export default function AgentButton({ id, name }: Props) {
  const firstName = getFirstName(name);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={styles.container} onClick={() => setShowModal(true)}>
        Work with {firstName}
        <img src='/home/green-right-arrow-icon.png' />
      </button>

      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        children={<ContactForm id={id} setShowModal={setShowModal} />}
      />
    </>
  );
}
