import styles from './SearchField.module.css';

export default function SearchField() {
  return (
    <div className={styles.container}>
      <div className={styles.search_input}>
        <img
          src='/agents/black-search-icon.png'
          className={styles.black_search_icon}
        />

        <input
          type='text'
          name='search'
          placeholder='Enter a name, region, spoken language...'
        />
      </div>

      <button className={styles.search_button}>Search</button>
    </div>
  );
}
