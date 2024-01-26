import { Dispatch, SetStateAction } from 'react';
import ReactCalendar from 'react-calendar';
import styles from './Calendar.module.css';
import 'react-calendar/dist/Calendar.css';
import { Dates } from 'types';

type Props = {
  dates: Dates | null;
  handleChange: (dates: Dates) => void;
  isDateUnavailable: (date: Date) => boolean;
  setShowCalendar: Dispatch<SetStateAction<boolean>>;
};

export default function Calendar({
  dates,
  handleChange,
  setShowCalendar,
  isDateUnavailable,
}: Props) {
  return (
    <div className={styles.container}>
      <ReactCalendar
        selectRange
        value={dates}
        // @ts-ignore
        onChange={handleChange}
        tileDisabled={({ date }) => isDateUnavailable(date)}
      />
      <button
        className={styles.calendar_button}
        onClick={() => setShowCalendar(false)}
      >
        OK
      </button>
    </div>
  );
}
