'use client';

import SubmitButton from '@components/layout/SubmitButton';
import styles from './Reservation.module.css';
import { useState } from 'react';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { DateRange } from 'rsuite/esm/DateRangePicker';
import { dateToMS, getISODate } from '@lib/utils';

type Props = {
  calendar: {
    result: { status: 'available'; date: string }[];
  };
};

export default function Reservation({ calendar }: Props) {
  const [isLoading, setIsLoading] = useState(false);
  const [dates, setDates] = useState<DateRange | null>();

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

  async function handleReservation() {}

  return (
    <div className={styles.container}>
      <p>Reservation</p>

      <DateRangePicker
        ranges={[]}
        value={dates}
        onChange={setDates}
        shouldDisableDate={(date: Date) => !availableDatesMap[getISODate(date)]}
        placeholder='Check In -> Check Out'
      />

      <SubmitButton
        buttonText='Book Now'
        isLoading={isLoading}
        handleSubmit={handleReservation}
      />
    </div>
  );
}
