'use client';

import { services } from '@data/services';
import styles from './Services.module.css';
import { useState } from 'react';
import { TbDiamond } from 'react-icons/tb';
import Modal from '@components/layout/Modal';
import ContactForm from '@components/layout/ContactForm';
import ModalButton from '@components/layout/ModalButton';

export default function Services() {
  const [showModal, setShowModal] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(1);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>
          Fully Experience <br />
          Home Ownership
        </h2>
        <p>
          At GemHaus, we believe that real estate ownership should be more than
          just a transaction—it should be an enriching journey.
        </p>
        <p>
          Whether you're a homeowner seeking top-notch property management or an
          investor looking to maximize your returns, we provide comprehensive
          solutions and unwavering support.
        </p>
        <ModalButton
          text='Our Services'
          icon={<TbDiamond />}
          setShowModal={setShowModal}
        />
        <Modal
          component={<ContactForm />}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>

      <div className={styles.services}>
        {services.map(({ id, title, description }) => (
          <div key={id} className={styles.service}>
            <p
              className={styles.title}
              onClick={() =>
                setSelectedServiceId((prevState) =>
                  prevState === id ? null : id
                )
              }
            >
              {title}
            </p>
            {selectedServiceId === id && (
              <p className={styles.description}>{description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
