'use client';

import Calendar from '@components/layout/Calendar';
import {
  CSSProperties,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import styles from './PropertyFilters.module.css';
import { Dates, Property } from 'types';
import { formatDate } from '@lib/utils';
import { propertyOfferings } from '@data/offerings';

type Props = {
  properties: Property[];
  setFilteredProperties: Dispatch<SetStateAction<Property[]>>;
};

export default function PropertyFilters({
  properties,
  setFilteredProperties,
}: Props) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [dates, setDates] = useState<Dates | null>(null);
  const [guests, setGuests] = useState<number>();
  const [maxPrice, setMaxPrice] = useState(0);
  const [prices, setPrices] = useState({
    min: 0,
    max: 0,
  });
  const [offerings, setOfferings] = useState<string[]>([]);

  const step = 10;
  const { min, max } = prices;
  const isDateUnavailable = (date: Date) => false;
  const handleDateChange = (dates: Dates) => setDates(dates);

  // Get max price
  useEffect(() => {
    const maximumPrice = Math.max(
      ...properties.map((property) => +property.price)
    );
    const maximumPriceRounded = maximumPrice + step - (maximumPrice % step);
    setPrices((prevState) => ({
      ...prevState,
      max: maximumPriceRounded,
    }));
    setMaxPrice(maximumPriceRounded);
  }, [properties]);

  // Handle slider range change
  function handlePriceSliderChange(e: ChangeEvent<HTMLInputElement>) {
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

  // Handle offering change
  function handleOfferingChange(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.name.toLowerCase();
    setOfferings((prevState) =>
      prevState.includes(name) && !e.target.checked
        ? prevState.filter((el) => el !== name)
        : [...prevState, name]
    );
  }

  // Filter properties
  function filterProperties() {
    let filteredProperties = properties;

    if (guests) {
      filteredProperties = filteredProperties.filter(
        (property) => property.guests >= guests
      );
    }
    if (min) {
      filteredProperties = filteredProperties.filter(
        (property) => property.price >= min
      );
    }
    if (max) {
      filteredProperties = filteredProperties.filter(
        (property) => property.price <= max
      );
    }
    if (offerings.length) {
      filteredProperties = filteredProperties.filter((property) =>
        property.offerings.some((offering) => offerings.includes(offering))
      );
    }
    setFilteredProperties(filteredProperties);
  }

  return (
    <form className={styles.container} action={filterProperties}>
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
                  '--progress_left': `${(min / maxPrice) * 100}%`,
                  '--progress_right': ` ${100 - (max / maxPrice) * 100}%`,
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
              max={maxPrice}
              onChange={handlePriceSliderChange}
            />

            <input
              type='range'
              id='max'
              min={0}
              step={step}
              value={max}
              max={maxPrice}
              onChange={handlePriceSliderChange}
            />
          </div>

          <div
            className={styles.prices}
            style={
              {
                '--margin_left': `${(min / maxPrice) * 100}%`,
                '--margin_right': ` ${100 - (max / maxPrice) * 100}%`,
              } as CSSProperties
            }
          ></div>
        </div>
      </div>

      <div className={styles.offerings}>
        <p className={styles.title}>Include Services</p>
        {propertyOfferings.map((offering, index) => (
          <div key={index} className={styles.offering}>
            <input
              type='checkbox'
              name={offering.name}
              onChange={handleOfferingChange}
            />
            <img src={offering.icon} />
            <p>{offering.name}</p>
          </div>
        ))}
      </div>

      <button type='submit'>Apply</button>
    </form>
  );
}
