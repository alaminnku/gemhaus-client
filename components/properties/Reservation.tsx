'use client';

import styles from './Reservation.module.css';
import { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { DateRange } from 'rsuite/esm/DateRangePicker';
import { dateToMS, getISODate } from '@lib/utils';
import { HostawayDate, Property } from 'types';
import LinkButton from '@components/layout/LinkButton';
import Price from '@components/properties/Price';

type Props = {
  property: Property;
  calendar: {
    result: HostawayDate[];
  };
};

export default function Reservation({ property, calendar }: Props) {
  const [dates, setDates] = useState<DateRange | null>();
  const [guests, setGuests] = useState('');

  // Create available dates map
  const availableDatesMap: { [key: string]: boolean } = {};
  calendar.result
    .filter(
      (el) =>
        el.status === 'available' &&
        dateToMS(el.date) >= dateToMS(getISODate(new Date()))
    )
    .forEach((el) => {
      availableDatesMap[el.date] = true;
    });

  return (
    <div className={styles.container}>
      <p className={styles.price}>
        ${property.price} <span>Night</span>
      </p>

      <DateRangePicker
        block
        size='lg'
        ranges={[]}
        value={dates}
        // preventOverflow
        onChange={setDates}
        placeholder='Check-in -> Check-out'
        shouldDisableDate={(date: Date) => !availableDatesMap[getISODate(date)]}
      />

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
            href={`/properties/${property._id}/checkout?startDate=${getISODate(
              dates[0]
            )}&endDate=${getISODate(dates[1])}&guests=${guests}`}
            style={{ width: '100%', marginBottom: '10px' }}
          />

          <Price
            startDate={dates[0]}
            endDate={dates[1]}
            property={property}
            calendar={calendar.result}
          />
        </>
      )}
    </div>
  );
}
