'use client';

import { FormEvent, useEffect } from 'react';
import braintree, { HostedFields } from 'braintree-web';
import { getGemhausData, mutateData } from '@lib/utils';
import styles from './PaymentForm.module.css';

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

  const handleReservation = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (hostedFields) {
        const { nonce } = await hostedFields.tokenize();
        const data = {
          nonce,
          propertyId,
        };
        const response = await mutateData.post(
          `/properties/${propertyId}/reserve`,
          data
        );
        console.log(response);
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
