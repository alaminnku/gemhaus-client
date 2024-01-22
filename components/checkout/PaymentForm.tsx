'use client';

import { FormEvent, useEffect, useState } from 'react';
import braintree, { HostedFields } from 'braintree-web';
import { getGemhausData } from '@lib/utils';
import styles from './PaymentForm.module.css';

export default function PaymentForm() {
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

  const handleReservation = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (hostedFields) {
        const { nonce } = await hostedFields.tokenize();
        const response = await fetch('http://localhost:5100/reservation', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: nonce,
        });
        console.log(await response.json());
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section>
      <h2>Payment form</h2>
      <form onSubmit={handleReservation}>
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
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}
