'use client';

import styles from './Reservation.module.css';
import { useEffect, useState } from 'react';
import { dateToMS, formatDate } from '@lib/utils';
import { Dates, HostawayCalendar, Property } from 'types';
import Price from '@components/vacationRental/Price';
import Calendar from '@components/layout/Calendar';
import Link from 'next/link';

type Props = {
  property: Property;
  calendar: HostawayCalendar;
};

export default function Reservation({ property, calendar }: Props) {
  const [guests, setGuests] = useState('');
  const [dates, setDates] = useState<Dates | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [availableDatesMap, setAvailableDatesMap] = useState<
    Record<string, boolean>
  >({});

  // Get available dates map
  useEffect(() => {
    const availableDatesMap: { [key: string]: boolean } = {};
    calendar
      .filter(
        (el) =>
          el.status === 'available' &&
          dateToMS(el.date) >= dateToMS(formatDate(new Date()))
      )
      .forEach((el) => {
        availableDatesMap[el.date] = true;
      });
    setAvailableDatesMap(availableDatesMap);
  }, [calendar]);

  // Check if date is unavailable
  const isDateUnavailable = (date: Date | string) =>
    !availableDatesMap[formatDate(date)];

  // Handle date change
  const handleDateChange = (dates: Dates) => {
    const currDate = new Date(dates[0]);
    let unavailableDateSelected = false;

    while (currDate <= new Date(dates[1])) {
      const date = formatDate(currDate);
      if (isDateUnavailable(date)) {
        unavailableDateSelected = true;
        break;
      }
      currDate.setDate(currDate.getDate() + 1);
    }
    if (!unavailableDateSelected) setDates(dates);
  };

  return (
    <div className={styles.container}>
      <p className={styles.price}>
        ${property.price} <span>Night</span>
      </p>

      <div className={styles.dates_and_calendar}>
        <div className={styles.dates}>
          <div>
            <label htmlFor='check-in'>Check-in</label>
            <input
              id='check-in'
              readOnly
              type='text'
              onClick={() => setShowCalendar((prevState) => !prevState)}
              value={dates ? `${formatDate(dates[0])}` : ''}
              placeholder='mm/dd/yy'
            />
          </div>
          <div>
            <label htmlFor='check-out'>Check-out</label>
            <input
              id='check-out'
              readOnly
              type='text'
              onClick={() => setShowCalendar((prevState) => !prevState)}
              value={dates ? `${formatDate(dates[1])}` : ''}
              placeholder='mm/dd/yy'
            />
          </div>
        </div>

        {showCalendar && (
          <Calendar
            dates={dates}
            handleChange={handleDateChange}
            setShowCalendar={setShowCalendar}
            isDateUnavailable={isDateUnavailable}
          />
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

      <Link
        href={
          dates && guests
            ? `/vacation-rental/${
                property._id
              }/checkout?arrivalDate=${formatDate(
                dates[0]
              )}&departureDate=${formatDate(dates[1])}&guests=${guests}`
            : '#'
        }
        style={{ width: '100%' }}
      >
        Book Now
      </Link>

      {dates && guests && (
        <Price
          arrivalDate={dates[0]}
          departureDate={dates[1]}
          property={property}
          calendar={calendar}
          style={{ paddingTop: '43px', paddingBottom: '29px' }}
        />
      )}
    </div>
  );
}
