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
import Link from 'next/link';

export default function Hero() {
  const [search, setSearch] = useState('');

  return (
    <section className={styles.container}>
      <Header />

      <div className={styles.search_and_cta}>
        <div className={styles.search}>
          <div className={`${styles.search_types} ${inter.className}`}>
            <div className={styles.vacation}>
              <Image src={vacationIcon} alt='Vacation icon' />
              <p>Vacation</p>
            </div>

            <Link href='/vacation-rental' className={styles.rent}>
              <Image src={rentIcon} alt='Rent icon' />
              <p>Rent</p>
            </Link>

            <Link href='/buy-and-sell' className={styles.buy}>
              <Image src={buyIcon} alt='Vacation icon' />
              <p>Buy</p>
            </Link>
          </div>

          <div className={`${styles.search_field} ${inter.className}`}>
            <MdOutlineSearch />

            <input
              type='text'
              placeholder='Find your gem'
              onChange={(e) => setSearch(e.target.value)}
            />
            <Link
              className={styles.search_button}
              href={`/properties/?search=${search}`}
            >
              Submit
            </Link>
          </div>
        </div>

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
