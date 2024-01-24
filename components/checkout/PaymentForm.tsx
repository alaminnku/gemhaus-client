'use client';

import { useEffect } from 'react';
import braintree, { HostedFields } from 'braintree-web';
import { getGemhausData, mutateData } from '@lib/utils';
import styles from './PaymentForm.module.css';
import SubmitButton from '@components/layout/SubmitButton';

type Props = {
  booking: {
    guests: string;
    propertyId: string;
    arrivalDate: string;
    departureDate: string;
  };
};

export default function PaymentForm({ booking }: Props) {
  const { guests, propertyId, arrivalDate, departureDate } = booking;
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
      // if (hostedFields) {
      //   const { nonce } = await hostedFields.tokenize();

      //   formData.append('nonce', nonce);
      //   formData.append('arrivalDate', arrivalDate);
      //   formData.append('departureDate', departureDate);

      //   const response = await mutateData.post(
      //     `/properties/${propertyId}/reserve`,
      //     formData
      //   );
      //   console.log(response);
      // }

      formData.append('numberOfGuests', guests);
      formData.append('arrivalDate', arrivalDate);
      formData.append('departureDate', departureDate);

      const response = await mutateData.post(
        `/properties/${propertyId}/reserve`,
        formData
      );
      console.log(response);
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
          <div className={styles.item}>
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              placeholder='Enter your address'
            />
          </div>
          <div className={styles.item}>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='Enter your city'
            />
          </div>
          <div className={styles.item}>
            <label htmlFor='state'>State</label>
            <input
              type='text'
              id='state'
              name='state'
              placeholder='Enter your state'
            />
          </div>
          <div className={styles.item}>
            <label htmlFor='country'>Country</label>
            <input
              type='text'
              id='country'
              name='country'
              placeholder='Enter your country'
            />
          </div>
          <div className={styles.item}>
            <label htmlFor='zipCode'>Zip code</label>
            <input
              type='text'
              id='zipCode'
              name='zipCode'
              placeholder='Enter your zip code'
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
