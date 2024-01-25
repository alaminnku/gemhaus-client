'use client';

import styles from './Reservation.module.css';
import { useEffect, useState } from 'react';
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
  const [windowWidth, setWindowWidth] = useState<number>(0);

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

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        showOneCalendar
        preventOverflow
        onChange={setDates}
        placement={windowWidth > 500 ? 'leftStart' : 'bottomStart'}
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
            href={`/vacation-rental/${
              property._id
            }/checkout?arrivalDate=${getISODate(
              dates[0]
            )}&departureDate=${getISODate(dates[1])}&guests=${guests}`}
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
