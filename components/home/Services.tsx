'use client';

import { initialServicesState, services } from '@data/services';
import styles from './Services.module.css';
import { useState } from 'react';
import { ServicesState } from 'types';
import Link from 'next/link';
import { TbDiamond } from 'react-icons/tb';
import LinkButton from '@components/layout/LinkButton';

export default function Services() {
  const [servicesStates, setServicesStates] = useState(initialServicesState);

  function toggleServicesState(id: string) {
    setServicesStates((prevState) => {
      const updatedState: ServicesState = {} as ServicesState;
      for (const prop in prevState) {
        updatedState[prop] = {
          isOpen: prop === id ? !prevState[prop].isOpen : false,
        };
      }
      return updatedState;
    });
  }
  return (
    <section className={styles.container}>
      <h2>
        Fully Experience <br />
        Home Ownership
      </h2>

      <div className={styles.content_and_services}>
        <div className={styles.content}>
          <p>
            At GemHaus, we believe that real estate ownership should be more
            than just a transaction—it should be an enriching journey.
          </p>
          <p>
            Whether you're a homeowner seeking top-notch property management or
            an investor looking to maximize your returns, we provide
            comprehensive solutions and unwavering support.
          </p>

          <LinkButton
            text='Our Services'
            href='/services'
            icon={<TbDiamond />}
          />
        </div>

        <div className={styles.services}>
          {services.map(({ id, title, description }) => (
            <div key={id} className={styles.service}>
              <p
                className={styles.title}
                onClick={() => toggleServicesState(id)}
              >
                {title}
              </p>
              <p
                className={`${styles.description} ${
                  servicesStates[id].isOpen && styles.show_description
                }`}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
