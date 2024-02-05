'use client';

import { inter } from '@lib/utils';
import styles from './SearchField.module.css';
import { MdOutlineSearch } from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';

export default function SearchField() {
  const [search, setSearch] = useState('');
  return (
    <div className={`${styles.search_field} ${inter.className}`}>
      <div className={styles.search_input}>
        <MdOutlineSearch />

        <input
          type='text'
          placeholder='Find your gem. Enter in your trip dates.'
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Link
        className={styles.search_button}
        href={`/vacation-rental/?search=${search}`}
      >
        Search
      </Link>
    </div>
  );
}
