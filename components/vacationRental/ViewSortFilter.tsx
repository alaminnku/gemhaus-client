import { MdKeyboardArrowDown } from 'react-icons/md';
import styles from './ViewSortFilter.module.css';
import { Dispatch, SetStateAction } from 'react';

type Props = {
  setShowFilters: Dispatch<SetStateAction<boolean>>;
};

export default function ViewSortFilter({ setShowFilters }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.view}>
        <p>View</p>
        <img src='/vacation-rental/list-icon.png' />
        <img src='/vacation-rental/grid-icon.png' />
      </div>

      <div className={styles.sort}>
        <p>Sort by: Default</p>
        <MdKeyboardArrowDown />
      </div>

      <div
        className={styles.filter}
        onClick={() => setShowFilters((prevState) => !prevState)}
      >
        <p>Filter</p>
        <img src='/vacation-rental/filter-icon.png' />
      </div>
    </div>
  );
}
