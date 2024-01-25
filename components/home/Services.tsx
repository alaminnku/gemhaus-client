'use client';

import { services } from '@data/services';
import styles from './Services.module.css';
import { useState } from 'react';
import { TbDiamond } from 'react-icons/tb';
import LinkButton from '@components/layout/LinkButton';

export default function Services() {
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

        <LinkButton text='Our Services' href='/services' icon={<TbDiamond />} />
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
