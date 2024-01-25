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
      <MdOutlineSearch />

      <input
        type='text'
        placeholder='Find your gem'
        onChange={(e) => setSearch(e.target.value)}
      />
      <Link
        className={styles.search_button}
        href={`/vacation-rental/?search=${search}`}
      >
        Submit
      </Link>
    </div>
  );
}
