'use client';

import Calendar from '@components/layout/Calendar';
import { CSSProperties, ChangeEvent, useEffect, useState } from 'react';
import styles from './PropertyFilters.module.css';
import { Dates, Property } from 'types';
import { formatDate } from '@lib/utils';

type Props = {
  properties: Property[];
};

export default function PropertyFilters({ properties }: Props) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [dates, setDates] = useState<Dates | null>(null);
  const [guests, setGuests] = useState<number>();

  const isDateUnavailable = (date: Date) => false;
  const handleDateChange = (dates: Dates) => setDates(dates);

  const [highestPrice, setHighestPrice] = useState(0);
  const [prices, setPrices] = useState({
    min: 0,
    max: 0,
  });
  const { min, max } = prices;
  const step = 10;

  // Get max price
  useEffect(() => {
    const highestPrice = Math.max(
      ...properties.map((property) => +property.price)
    );
    const highestPriceRounded = highestPrice + step - (highestPrice % step);
    setPrices((prevState) => ({
      ...prevState,
      max: highestPriceRounded,
    }));
    setHighestPrice(highestPriceRounded);
  }, [properties]);

  // Change slider range
  function handleChangeRange(e: ChangeEvent<HTMLInputElement>) {
    // Get gap, id and value
    const gap = step * 1;
    const id = e.target.id;
    const value = e.target.value;

    setPrices((prevState) => ({
      ...prevState,
      [id]:
        id === 'min'
          ? prevState.max - +value <= gap
            ? prevState.max - gap
            : +value
          : +value - prevState.min <= gap
          ? prevState.min + gap
          : +value,
    }));
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Booking Details</p>

      <div className={styles.dates}>
        <input
          type='text'
          readOnly
          onClick={() => setShowCalendar((prevState) => !prevState)}
          value={
            dates
              ? `${formatDate(dates[0])} ~ ${formatDate(dates[1])}`
              : 'Check-in --> Check-out'
          }
        />

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
          type='number'
          value={guests}
          inputMode='numeric'
          placeholder='1 Guest'
          onChange={(e) => setGuests(+e.target.value)}
        />
      </div>

      <div className={styles.price}>
        <p className={styles.price_title}>Price range</p>
        <p className={styles.price_min_max}>
          <span>${min}</span> - <span>${max}</span>
        </p>
        <div className={styles.price_range}>
          <div className={styles.slider}>
            <div
              className={styles.progress}
              style={
                {
                  '--progress_left': `${(min / highestPrice) * 100}%`,
                  '--progress_right': ` ${100 - (max / highestPrice) * 100}%`,
                } as CSSProperties
              }
            ></div>
          </div>

          <div className={styles.range}>
            <input
              type='range'
              id='min'
              min={0}
              step={step}
              value={min}
              max={highestPrice}
              onChange={handleChangeRange}
            />

            <input
              type='range'
              id='max'
              min={0}
              step={step}
              value={max}
              max={highestPrice}
              onChange={handleChangeRange}
            />
          </div>

          <div
            className={styles.prices}
            style={
              {
                '--margin_left': `${(min / highestPrice) * 100}%`,
                '--margin_right': ` ${100 - (max / highestPrice) * 100}%`,
              } as CSSProperties
            }
          ></div>
        </div>
      </div>

      <div>
        <p>Include Services</p>
      </div>
    </div>
  );
}
