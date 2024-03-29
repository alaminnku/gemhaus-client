'use client';

import { ReactNode, useEffect, useState } from 'react';
import braintree, { HostedFields } from 'braintree-web';
import { fetchGemhausData, getDate, getMonthAbbr } from '@lib/utils';
import styles from './PaymentForm.module.css';
import SubmitButton from '@components/layout/SubmitButton';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { useAlert } from 'contexts/Alert';

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
  const { setAlert } = useAlert();
  const { guests, propertyId, arrivalDate, departureDate } = booking;
  const [guestsCount, setGuestsCount] = useState(+guests);
  const [hostedFields, setHostedFields] = useState<HostedFields | null>(null);
  const [agreements, setAgreements] = useState({
    privacyPolicy: false,
    houseRules: false,
  });

  const arrivalMonth = getMonthAbbr(new Date(arrivalDate));
  const departureMonth = getMonthAbbr(new Date(departureDate));

  useEffect(() => {
    async function initializeBraintree() {
      try {
        const { data: clientToken } = await fetchGemhausData(
          '/braintree/client-token',
          { cache: 'no-store' }
        );

        const clientInstance = await braintree.client.create({
          authorization: clientToken,
        });

        const hostedFields = await braintree.hostedFields.create({
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
        setHostedFields(hostedFields);
      } catch (err) {
        console.log(err);
      }
    }
    initializeBraintree();
  }, []);

  const handleBookProperty = async (formData: FormData) => {
    if (!hostedFields) return;
    if (!agreements.privacyPolicy)
      return setAlert({
        message: 'You must agree to the privacy policy',
        type: 'failed',
      });
    if (!agreements.houseRules)
      return setAlert({
        message: 'You must agree to the house rules',
        type: 'failed',
      });

    try {
      const { nonce } = await hostedFields.tokenize();

      formData.append('nonce', nonce);
      formData.append('arrivalDate', arrivalDate);
      formData.append('departureDate', departureDate);
      formData.append('numberOfGuests', guestsCount.toString());

      const { error } = await fetchGemhausData(
        `/properties/${propertyId}/book`,
        {
          method: 'POST',
          body: formData,
        }
      );
      if (error) return setAlert({ message: error.message, type: 'failed' });
      router.push(`/vacation-rental/${propertyId}/checkout/confirmation`);
    } catch (err) {
      console.log(err);
      setAlert({
        message: "Payment information can't be empty",
        type: 'failed',
      });
    }
  };

  return (
    <section className={styles.container}>
      {children}

      <div className={styles.reservation_guest_and_payment}>
        <p className={styles.title}>
          <MdKeyboardArrowLeft onClick={() => router.back()} />
          Finalize your booking
        </p>

        <div className={styles.reservation_guest_and_payment_details}>
          <div className={styles.reservation_details}>
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
              <div className={styles.item}>
                <label htmlFor='name'>Full name</label>
                <input type='text' id='name' name='name' placeholder='Name' />
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

            <div className={styles.payment_details}>
              <p className={styles.payment_details_title}>
                Payment Information
              </p>

              <div className={styles.item}>
                <label htmlFor='card_number'>Card Number</label>
                <div className={styles.payment_input} id='card_number'></div>
              </div>

              <div className={styles.cvv_and_expiration}>
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

              <div className={styles.agreements}>
                <div className={styles.agreement}>
                  <input
                    type='checkbox'
                    id='privacyPolicy'
                    checked={agreements.privacyPolicy}
                    onChange={() =>
                      setAgreements((prevState) => ({
                        ...prevState,
                        privacyPolicy: !prevState.privacyPolicy,
                      }))
                    }
                  />
                  <label htmlFor='privacyPolicy'>
                    I agree to the <span>Privacy Policy</span> and{' '}
                    <span>Terms of Service</span>
                  </label>
                </div>
                <div className={styles.agreement}>
                  <input
                    type='checkbox'
                    id='houseRules'
                    checked={agreements.houseRules}
                    onChange={() =>
                      setAgreements((prevState) => ({
                        ...prevState,
                        houseRules: !prevState.houseRules,
                      }))
                    }
                  />
                  <label htmlFor='houseRules'>
                    I agree to the <span>house rules</span>
                  </label>
                </div>
              </div>
            </div>

            <SubmitButton text='Continue' />
          </form>
        </div>
      </div>
    </section>
  );
}
