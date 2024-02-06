'use client';

import Modal from '@components/layout/Modal';
import styles from './PortfolioPropertiesContent.module.css';
import ContactForm from '@components/contact/ContactForm';
import { useState } from 'react';
import ModalButton from '@components/layout/ModalButton';
import { TbDiamond } from 'react-icons/tb';

export default function PortfolioPropertiesContent() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <h2>
        Expand Your <br /> Portfolio
      </h2>
      <p>
        Are you looking to make your mark in the world of real estate? At
        GemHaus, we provide you with the expertise and opportunities to do just
        that.
      </p>
      <ModalButton
        isReversed={true}
        text='Find your Gem'
        icon={<TbDiamond />}
        setShowModal={setShowModal}
      />
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        children={<ContactForm setShowModal={setShowModal} />}
      />
    </div>
  );
}
