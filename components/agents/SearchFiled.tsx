'use client';

import { useRouter } from 'next/navigation';
import styles from './SearchField.module.css';

export default function SearchField() {
  const router = useRouter();

  function handleSearch(formData: FormData) {
    const input = formData.get('input');
    router.push(`/agents?query=${input}`);
  }

  return (
    <form className={styles.container} action={handleSearch}>
      <div className={styles.search_input}>
        <img
          src='/agents/black-search-icon.png'
          className={styles.black_search_icon}
        />

        <input
          type='text'
          name='input'
          placeholder='Enter a name, region, spoken language...'
        />
      </div>

      <button type='submit' className={styles.search_button}>
        Search
      </button>
    </form>
  );
}
