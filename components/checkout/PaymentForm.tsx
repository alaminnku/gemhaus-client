'use client';

import { FormEvent, useEffect } from 'react';
import braintree, { HostedFields } from 'braintree-web';
import { getGemhausData, mutateData } from '@lib/utils';
import styles from './PaymentForm.module.css';
import SubmitButton from '@components/layout/SubmitButton';
import axios from 'axios';

type Props = {
  propertyId: string;
};

export default function PaymentForm({ propertyId }: Props) {
  let hostedFields: HostedFields | null = null;

  useEffect(() => {
    async function initializeBraintree() {
      try {
        const { data: clientToken, error } = await getGemhausData(
          '/braintree/client-token'
        );

        const clientInstance = await braintree.client.create({
          authorization: clientToken,
        });

        hostedFields = await braintree.hostedFields.create({
          fields: {
            number: {
              selector: '#card_number',
              placeholder: 'Card',
            },
            ...(process.env.NEXT_PUBLIC_BRAINTREE_ENVIRONMENT ===
              'Production' && {
              cvv: {
                selector: '#cvv',
                placeholder: 'CVV',
              },
            }),
            expirationDate: {
              selector: '#expiration_date',
              placeholder: 'Expiration',
            },
          },
          client: clientInstance,
        });
      } catch (err) {
        console.log(err);
      }
    }
    initializeBraintree();
  }, []);

  const handleReservation = async (formData: FormData) => {
    try {
      if (hostedFields) {
        const { nonce } = await hostedFields.tokenize();
        formData.append('nonce', nonce);
        const response = await mutateData.post(
          `/properties/${propertyId}/reserve`,
          formData
        );
        console.log(response);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <form action={handleReservation}>
        <div className={styles.guest}>
          <div className={styles.item}>
            <label htmlFor='firstName'>First name</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='Enter your first name'
            />
          </div>
          <div className={styles.item}>
            <label htmlFor='lastName'>Last name</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Enter your last name'
            />
          </div>
          <div className={styles.item}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Enter your email address'
            />
          </div>
          <div className={styles.item}>
            <label htmlFor='phone'>Phone</label>
            <input
              type='number'
              id='phone'
              name='phone'
              placeholder='Enter your Phone number'
            />
          </div>
        </div>

        <div className={styles.payment}>
          <div className={styles.item}>
            <label htmlFor='card_number'>Card Number</label>
            <div id='card_number'></div>
          </div>

          {process.env.NEXT_PUBLIC_BRAINTREE_ENVIRONMENT === 'Production' && (
            <div className={styles.item}>
              <label htmlFor='cvv'>CVV</label>
              <div id='cvv'></div>
            </div>
          )}

          <div className={styles.item}>
            <label htmlFor='expiration_date'>Expiration Date</label>
            <div id='expiration_date'></div>
          </div>
        </div>

        <SubmitButton text='Reserve Now' />
      </form>
    </section>
  );
}
