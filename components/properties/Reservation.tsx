'use client';
import styles from './Reservation.module.css';
import { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { DateRange } from 'rsuite/esm/DateRangePicker';
import { dateToMS, getISODate } from '@lib/utils';
import { Property } from 'types';
import LinkButton from '@components/layout/LinkButton';

type Props = {
  property: Property;
  calendar: {
    result: { status: 'available'; date: string }[];
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
      <DateRangePicker
        ranges={[]}
        value={dates}
        onChange={setDates}
        placeholder='Check In -> Check Out'
        shouldDisableDate={(date: Date) => !availableDatesMap[getISODate(date)]}
      />

      <div className={styles.guests}>
        <label htmlFor='guests'>Number of guests</label>
        <input
          id='guests'
          type='text'
          value={guests}
          placeholder='Number of guests'
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>

      {dates && guests && (
        <LinkButton
          text='Checkout'
          href={`/properties/${property._id}/checkout?startDate=${getISODate(
            dates[0]
          )}&endDate=${getISODate(dates[1])}&guests=${guests}`}
        />
      )}
    </div>
  );
}
