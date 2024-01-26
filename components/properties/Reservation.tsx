'use client';

import styles from './Reservation.module.css';
import { useState } from 'react';
import { dateToMS, formatDate } from '@lib/utils';
import { HostawayDate, Property } from 'types';
import LinkButton from '@components/layout/LinkButton';
import Price from '@components/properties/Price';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

type Dates = [string, string];

type Props = {
  property: Property;
  calendar: {
    result: HostawayDate[];
  };
};

export default function Reservation({ property, calendar }: Props) {
  const [guests, setGuests] = useState('');
  const [dates, setDates] = useState<Dates | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);

  // Create available dates map
  const availableDatesMap: { [key: string]: boolean } = {};
  calendar.result
    .filter(
      (el) =>
        el.status === 'available' &&
        dateToMS(el.date) >= dateToMS(formatDate(new Date()))
    )
    .forEach((el) => {
      availableDatesMap[el.date] = true;
    });

  return (
    <div className={styles.container}>
      <p className={styles.price}>
        ${property.price} <span>Night</span>
      </p>

      <div className={styles.dates}>
        <input
          type='text'
          readOnly
          onClick={() => setShowCalendar((prevState) => !prevState)}
          value={
            dates
              ? `${formatDate(dates[0])} ~ ${formatDate(dates[1])}`
              : 'Check-in -> Check-out'
          }
        />

        {showCalendar && (
          <div className={styles.calendar}>
            <Calendar
              selectRange
              value={dates}
              onChange={setDates}
              tileDisabled={({ date }) => !availableDatesMap[formatDate(date)]}
            />
            <button
              className={styles.calendar_button}
              onClick={() => setShowCalendar(false)}
            >
              OK
            </button>
          </div>
        )}
      </div>

      <div className={styles.guests}>
        <label htmlFor='guests'>Guests</label>
        <input
          id='guests'
          type='text'
          value={guests}
          placeholder='1 Guest'
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>

      {dates && guests && (
        <>
          <LinkButton
            text='Reserve'
            href={`/vacation-rental/${
              property._id
            }/checkout?arrivalDate=${formatDate(
              dates[0]
            )}&departureDate=${formatDate(dates[1])}&guests=${guests}`}
            style={{ width: '100%', marginBottom: '10px' }}
          />

          <Price
            arrivalDate={dates[0]}
            departureDate={dates[1]}
            property={property}
            calendar={calendar.result}
          />
        </>
      )}
    </div>
  );
}
