'use client';

import { ReactNode, useEffect, useState } from 'react';
import braintree, { HostedFields } from 'braintree-web';
import { fetchGemhausData, getDate, getMonthAbbr, inter } from '@lib/utils';
import styles from './PaymentForm.module.css';
import SubmitButton from '@components/layout/SubmitButton';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode;
  booking: {
    guests: string;
    propertyId: string;
    arrivalDate: string;
    departureDate: string;
  };
};

export default function PaymentForm({ children, booking }: Props) {
  const router = useRouter();
  let hostedFields: HostedFields | null = null;
  const { guests, propertyId, arrivalDate, departureDate } = booking;
  const [guestsCount, setGuestsCount] = useState(+guests);

  const arrivalMonth = getMonthAbbr(new Date(arrivalDate));
  const departureMonth = getMonthAbbr(new Date(departureDate));

  useEffect(() => {
    async function initializeBraintree() {
      try {
        const { data: clientToken, error } = await fetchGemhausData(
          '/braintree/client-token'
        );

        const clientInstance = await braintree.client.create({
          authorization: clientToken,
        });

        hostedFields = await braintree.hostedFields.create({
          fields: {
            number: {
              selector: '#card_number',
              placeholder: '4111 1111 1111 1111',
            },
            ...(process.env.NEXT_PUBLIC_BRAINTREE_ENVIRONMENT ===
              'Production' && {
              cvv: {
                selector: '#cvv',
                placeholder: '123',
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

  const handleBookProperty = async (formData: FormData) => {
    if (!hostedFields) return;
    const { nonce } = await hostedFields.tokenize();

    formData.append('nonce', nonce);
    formData.append('numberOfGuests', guests);
    formData.append('arrivalDate', arrivalDate);
    formData.append('departureDate', departureDate);

    const { data, error } = await fetchGemhausData(
      `/properties/${propertyId}/book`,
      {
        method: 'POST',
        body: formData,
      }
    );
    if (error) return console.log(error);

    console.log(data);
  };

  return (
    <section className={styles.container}>
      <p className={styles.title}>
        <MdKeyboardArrowLeft onClick={() => router.back()} />
        Finalize your booking
      </p>

      <div className={styles.guest_payment_and_property_details}>
        <div className={styles.guest_and_payment_details}>
          <div className={`${styles.reservation_details} ${inter.className}`}>
            <p className={styles.reservation_details_title}>
              Reservation Details
            </p>
            <p className={styles.reservation_details_dates_title}>
              Dates <span onClick={() => router.back()}>Edit</span>
            </p>
            <p className={styles.reservation_details_dates}>
              {arrivalMonth === departureMonth
                ? `${arrivalMonth} ${getDate(arrivalDate)} - ${getDate(
                    departureDate
                  )}`
                : `${arrivalMonth} ${getDate(
                    arrivalDate
                  )} - ${departureMonth} ${getDate(departureDate)}`}
            </p>
            <div className={styles.reservation_details_guests_title}>
              <p>Guests</p>
              <div className={styles.reservation_details_guests_controller}>
                <span
                  onClick={() =>
                    setGuestsCount((prevState) =>
                      prevState > 1 ? prevState - 1 : prevState
                    )
                  }
                >
                  -
                </span>
                <p>{guestsCount}</p>
                <span
                  onClick={() => setGuestsCount((prevState) => prevState + 1)}
                >
                  +
                </span>
              </div>
            </div>
            <p className={styles.reservation_details_guests}>
              {guestsCount} guest
            </p>
          </div>

          <form action={handleBookProperty}>
            <div className={styles.guest_details}>
              <p className={styles.guest_details_title}>Guest details</p>

              <div className={inter.className}>
                <div className={styles.item}>
                  <label htmlFor='fullName'>Full name</label>
                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    placeholder='Name'
                  />
                </div>
                <div className={styles.item}>
                  <label htmlFor='email'>Email Address</label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    placeholder='Email address'
                  />
                </div>
                <div className={styles.item}>
                  <label htmlFor='phone'>Phone number</label>
                  <input
                    type='number'
                    id='phone'
                    name='phone'
                    placeholder='Phone number'
                  />
                </div>
                <div className={styles.item}>
                  <label htmlFor='address'>Billing address</label>
                  <input
                    type='text'
                    id='address'
                    name='address'
                    placeholder='Billing address'
                  />
                </div>
                <div className={styles.item}>
                  <label htmlFor='city'>City</label>
                  <input type='text' id='city' name='city' placeholder='City' />
                </div>
                <div className={styles.item}>
                  <label htmlFor='state'>State</label>
                  <input
                    type='text'
                    id='state'
                    name='state'
                    placeholder='State'
                  />
                </div>
                <div className={styles.item}>
                  <label htmlFor='country'>Country</label>
                  <input
                    type='text'
                    id='country'
                    name='country'
                    placeholder='Country'
                  />
                </div>
                <div className={styles.item}>
                  <label htmlFor='zipCode'>Zip code</label>
                  <input
                    type='text'
                    id='zipCode'
                    name='zipCode'
                    placeholder='Zip code'
                  />
                </div>
              </div>
            </div>

            <div className={styles.payment_details}>
              <p className={styles.payment_details_title}>
                Payment Information
              </p>

              <div className={styles.payment}>
                <div className={styles.item}>
                  <label htmlFor='card_number'>Card Number</label>
                  <div className={styles.payment_input} id='card_number'></div>
                </div>

                {process.env.NEXT_PUBLIC_BRAINTREE_ENVIRONMENT ===
                  'Production' && (
                  <div className={styles.item}>
                    <label htmlFor='cvv'>CVV</label>
                    <div className={styles.payment_input} id='cvv'></div>
                  </div>
                )}

                <div className={styles.item}>
                  <label htmlFor='expiration_date'>Expiration Date</label>
                  <div
                    className={styles.payment_input}
                    id='expiration_date'
                  ></div>
                </div>
              </div>
            </div>

            <SubmitButton text='Continue' style={{ width: '100%' }} />
          </form>
        </div>

        {children}
      </div>
    </section>
  );
}
