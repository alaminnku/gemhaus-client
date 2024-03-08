'use client';

import { dateToMS, createDashedDate } from '@lib/utils';
import styles from './SearchField.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Calendar from '@components/layout/Calendar';
import { Dates } from 'types';
import Overlay from '@components/layout/Overlay';

export default function SearchField() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [dates, setDates] = useState<Dates | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const isDateUnavailable = (date: Date) =>
    dateToMS(createDashedDate(date)) < dateToMS(createDashedDate(new Date()));
  const handleDateChange = (dates: Dates) => setDates(dates);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1024);
    function handleResize() {
      setIsDesktop(window.innerWidth >= 1024);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className={styles.search_field}>
        <div className={styles.search_input}>
          <img
            src='/home/black-search-icon.png'
            className={styles.black_search_icon}
          />

          <input
            readOnly
            type='text'
            onClick={() => setShowCalendar((prevState) => !prevState)}
            value={
              dates
                ? `${createDashedDate(dates[0])} ~ ${createDashedDate(
                    dates[1]
                  )}`
                : ''
            }
            placeholder='Find your gem. Enter in your trip dates.'
          />
        </div>

        <Link
          className={styles.search_button}
          href={
            dates
              ? `/vacation-rental/?arrivalDate=${createDashedDate(
                  dates[0]
                )}&departureDate=${createDashedDate(dates[1])}`
              : ''
          }
        >
          <img src='/home/gem-icon.png' className={styles.gem_icon} />
          Search
        </Link>
      </div>

      <div
        className={`${styles.calendar_container} ${
          showCalendar && styles.show
        }`}
      >
        <Calendar
          dates={dates}
          handleChange={handleDateChange}
          isDateUnavailable={isDateUnavailable}
          setShowCalendar={setShowCalendar}
          showButton={!isDesktop}
          showDoubleView={isDesktop}
          calendarStyle={{
            border: 'none',
            padding: isDesktop ? '24px' : '',
            borderRadius: isDesktop ? '20px' : '10px 10px 0px 0px',
          }}
        />

        {!isDesktop && (
          <Overlay show={showCalendar} setShow={setShowCalendar} />
        )}
      </div>
    </>
  );
}
