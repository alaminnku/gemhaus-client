'use client';

import Header from '@components/layout/Header';
import styles from '@components/home/Hero.module.css';
import { FormEvent, useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';

type PropertyState = 'selected' | 'first' | 'second';

type PropertyTypes = {
  vacation: PropertyState;
  rent: PropertyState;
  buy: PropertyState;
};

const initialPropertyTypes: PropertyTypes = {
  vacation: 'selected',
  rent: 'first',
  buy: 'second',
};

export default function Hero() {
  const [propertyTypes, setPropertyTypes] = useState(initialPropertyTypes);
  const [searchValue, setSearchValue] = useState('');
  const { vacation, rent, buy } = propertyTypes;

  function changePropertyType(type: keyof PropertyTypes) {
    setPropertyTypes((prevState) => {
      switch (type) {
        case 'vacation':
          return initialPropertyTypes;
        case 'rent':
          return { vacation: 'first', rent: 'selected', buy: 'second' };
        case 'buy':
          return { vacation: 'first', rent: 'second', buy: 'selected' };
        default:
          return prevState;
      }
    });
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    let selectedPropertyType: keyof PropertyTypes = 'vacation';
    for (let prop in propertyTypes) {
      const property = prop as keyof PropertyTypes;
      if (propertyTypes[property] === 'selected') {
        selectedPropertyType = property;
      }
    }

    console.log(selectedPropertyType, searchValue);
  }

  return (
    <section className={styles.container}>
      <Header isDarkBackground={true} />

      <div className={styles.content}>
        <h1>Find your gem.</h1>

        <form className={styles.search} onSubmit={handleSearch}>
          <div className={styles.search_types}>
            <p
              className={`${styles[vacation]} ${styles.vacation}`}
              onClick={() => changePropertyType('vacation')}
            >
              Vacation
            </p>
            <p
              className={`${styles[rent]} ${styles.rent}`}
              onClick={() => changePropertyType('rent')}
            >
              Rent
            </p>
            <p
              className={`${styles[buy]} ${styles.buy}`}
              onClick={() => changePropertyType('buy')}
            >
              Buy
            </p>
          </div>

          <div className={styles.search_field}>
            <input
              type='text'
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Enter address, neighborhood, city or ZIP code'
            />

            <MdOutlineSearch onClick={handleSearch} />
          </div>
        </form>
      </div>
    </section>
  );
}
