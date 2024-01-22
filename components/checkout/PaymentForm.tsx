'use client';

import { FormEvent, useEffect, useState } from 'react';
import braintree, { HostedFields } from 'braintree-web';
import { getGemhausData } from '@lib/utils';
import styles from './PaymentForm.module.css';

export default function PaymentForm() {
  const [hostedFields, setHostedFields] = useState<HostedFields | null>(null);

  useEffect(() => {
    async function initializeBraintree() {
      try {
        const { data: clientToken, error } = await getGemhausData(
          '/braintree/client-token'
        );

        const clientInstance = await braintree.client.create({
          authorization: clientToken,
        });

        const hostedFields = await braintree.hostedFields.create({
          client: clientInstance,
          fields: {
            number: {
              selector: '#card_number',
              placeholder: 'Card',
            },
            cvv: {
              selector: '#cvv',
              placeholder: 'CVV',
            },
            expirationDate: {
              selector: '#expiration_date',
              placeholder: 'Expiration',
            },
          },
        });

        setHostedFields(hostedFields);
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
        console.log('Nonce:', nonce);
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

        <div className={styles.item}>
          <label htmlFor='cvv'>CVV</label>
          <div id='cvv'></div>
        </div>

        <div className={styles.item}>
          <label htmlFor='expiration_date'>Expiration Date</label>
          <div id='expiration_date'></div>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
}
