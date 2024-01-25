'use client';

import Header from '@components/layout/Header';
import styles from '@components/home/Hero.module.css';
import { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import vacationIcon from '@public/home/vacation-icon.png';
import buyIcon from '@public/home/buy-icon.png';
import rentIcon from '@public/home/rent-icon.png';
import hero from '@public/home/hero.jpg';
import Image from 'next/image';
import { inter } from '@lib/utils';

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

  function handleSearch(formData: FormData) {
    const search = formData.get('search');

    let selectedPropertyType: keyof PropertyTypes = 'vacation';
    for (let prop in propertyTypes) {
      const property = prop as keyof PropertyTypes;
      if (propertyTypes[property] === 'selected') {
        selectedPropertyType = property;
      }
    }

    console.log(selectedPropertyType, search);
  }

  return (
    <section className={styles.container}>
      <Header />

      <div className={styles.search_and_cta}>
        <form className={styles.search} action={handleSearch}>
          <div className={`${styles.search_types} ${inter.className}`}>
            <div
              className={`${styles[vacation]} ${styles.vacation}`}
              onClick={() => changePropertyType('vacation')}
            >
              <Image src={vacationIcon} alt='Vacation icon' />
              <p>Vacation</p>
            </div>

            <div
              className={`${styles[rent]} ${styles.rent}`}
              onClick={() => changePropertyType('rent')}
            >
              <Image src={rentIcon} alt='Rent icon' />
              <p>Rent</p>
            </div>

            <div
              className={`${styles[buy]} ${styles.buy}`}
              onClick={() => changePropertyType('buy')}
            >
              <Image src={buyIcon} alt='Vacation icon' />
              <p>Buy</p>
            </div>
          </div>

          <div className={`${styles.search_field} ${inter.className}`}>
            <MdOutlineSearch onClick={handleSearch} />
            <input type='text' name='search' placeholder='Find your gem' />
            <input type='submit' className={styles.search_button} />
          </div>
        </form>

        <div className={styles.cta}>
          <p className={styles.title}>What's next?</p>
          <p className={styles.description}>
            Find your place, or hire industry leading management experts
          </p>
        </div>
      </div>

      <div className={styles.hero_image}>
        <div className={styles.hero_image_container}>
          <Image src={hero} alt='Happy family' />
          <p>The real estate help you need with the hospitality touch</p>
        </div>
      </div>
    </section>
  );
}
