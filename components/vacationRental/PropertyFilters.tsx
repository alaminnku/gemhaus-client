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
import { Dates, Offering, Property } from 'types';
import { dateToMS, formatDate, getDatesInBetween } from '@lib/utils';
import { useSearchParams } from 'next/navigation';

type Props = {
  showFilters: boolean;
  properties: Property[];
  propertyOfferings: Offering[];
  setShowFilters: Dispatch<SetStateAction<boolean>>;
  setFilteredProperties: Dispatch<SetStateAction<Property[]>>;
};

export default function PropertyFilters({
  properties,
  showFilters,
  setShowFilters,
  propertyOfferings,
  setFilteredProperties,
}: Props) {
  const searchParams = useSearchParams();
  const [showCalendar, setShowCalendar] = useState(false);
  const [dates, setDates] = useState<Dates | null>(null);
  const [guests, setGuests] = useState<number>();
  const [maxPrice, setMaxPrice] = useState(0);
  const [prices, setPrices] = useState({
    min: 0,
    max: 0,
  });
  const [offerings, setOfferings] = useState<string[]>([]);
  const [bedrooms, setBedrooms] = useState<number>();
  const [bathrooms, setBathrooms] = useState<number>();

  const arrivalDate = searchParams.get('arrivalDate');
  const departureDate = searchParams.get('departureDate');

  const step = 10;
  const { min, max } = prices;
  const isDateUnavailable = (date: Date) =>
    dateToMS(formatDate(date)) < dateToMS(formatDate(new Date()));
  const handleDateChange = (dates: Dates) => setDates(dates);

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
    const name = e.target.name;
    setOfferings((prevState) =>
      prevState.includes(name) && !e.target.checked
        ? prevState.filter((el) => el !== name)
        : [...prevState, name]
    );
  }

  // Filter properties
  function filterProperties() {
    let filteredProperties = properties;

    if (dates) {
      const datesInBetween = getDatesInBetween(dates[0], dates[1]);

      filteredProperties = filteredProperties.filter((property) =>
        datesInBetween.every((date) => property.availableDates.includes(date))
      );
    }

    if (guests) {
      filteredProperties = filteredProperties.filter(
        (property) => property.guests >= guests
      );
    }
    if (bedrooms) {
      filteredProperties = filteredProperties.filter(
        (property) => property.bedrooms >= bedrooms
      );
    }
    if (bathrooms) {
      filteredProperties = filteredProperties.filter(
        (property) => property.bathrooms >= bathrooms
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
        property.offerings.some((offering) => offerings.includes(offering.name))
      );
    }
    setShowFilters(false);
    setFilteredProperties(filteredProperties);
  }

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

  // Apply dates filter
  useEffect(() => {
    if (arrivalDate && departureDate) {
      const datesInBetween = getDatesInBetween(arrivalDate, departureDate);

      setDates([arrivalDate, departureDate]);
      setFilteredProperties(
        properties.filter((property) =>
          datesInBetween.every((date) => property.availableDates.includes(date))
        )
      );
    }
  }, [arrivalDate, departureDate]);

  return (
    <form
      className={`${styles.container} ${showFilters && styles.show_filters}`}
      action={filterProperties}
    >
      <p className={styles.title}>Booking Details</p>

      <div className={styles.items}>
        <div className={styles.item}>
          <input
            readOnly
            type='text'
            onClick={() => setShowCalendar((prevState) => !prevState)}
            value={
              dates ? `${formatDate(dates[0])} ~ ${formatDate(dates[1])}` : ''
            }
            placeholder='Check-in --> Check-out'
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

        <div className={styles.item}>
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
        <div className={styles.item}>
          <label htmlFor='bedrooms'>Bedrooms</label>
          <input
            id='bedrooms'
            type='number'
            value={bedrooms}
            inputMode='numeric'
            placeholder='1 Bedroom'
            onChange={(e) => setBedrooms(+e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label htmlFor='bathrooms'>Bathrooms</label>
          <input
            id='bathrooms'
            type='number'
            value={bathrooms}
            inputMode='numeric'
            placeholder='1 Bathroom'
            onChange={(e) => setBathrooms(+e.target.value)}
          />
        </div>
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

      <button className={styles.apply_button} type='submit'>
        Apply
      </button>
    </form>
  );
}
