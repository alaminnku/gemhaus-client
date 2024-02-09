'use client';

import { dateToMS, formatDate, inter } from '@lib/utils';
import styles from './SearchField.module.css';
import { MdOutlineSearch } from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';
import Calendar from '@components/layout/Calendar';
import { Dates } from 'types';
import Overlay from '@components/layout/Overlay';

export default function SearchField() {
  const [search, setSearch] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [dates, setDates] = useState<Dates | null>(null);

  const isDateUnavailable = (date: Date) =>
    dateToMS(formatDate(date)) < dateToMS(formatDate(new Date()));
  const handleDateChange = (dates: Dates) => setDates(dates);

  return (
    <>
      <div className={`${styles.search_field} ${inter.className}`}>
        <div className={styles.search_input}>
          <MdOutlineSearch />

          <input
            onClick={() => setShowCalendar((prevState) => !prevState)}
            type='text'
            value={
              dates ? `${formatDate(dates[0])} ~ ${formatDate(dates[1])}` : ''
            }
            placeholder='Find your gem. Enter in your trip dates.'
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Link
          className={styles.search_button}
          href={
            dates
              ? `/vacation-rental/?arrivalDate=${formatDate(
                  dates[0]
                )}&departureDate=${formatDate(dates[1])}`
              : ''
          }
        >
          Search
        </Link>
      </div>

      <div className={`${styles.date_picker} ${showCalendar && styles.show}`}>
        <Calendar
          dates={dates}
          handleChange={handleDateChange}
          isDateUnavailable={isDateUnavailable}
          setShowCalendar={setShowCalendar}
          calendarStyle={{ border: 'none', borderRadius: '10px 10px 0px 0px' }}
        />

        <Overlay show={showCalendar} setShow={setShowCalendar} />
      </div>
    </>
  );
}
