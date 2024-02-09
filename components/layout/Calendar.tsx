import { CSSProperties, Dispatch, SetStateAction } from 'react';
import ReactCalendar from 'react-calendar';
import styles from './Calendar.module.css';
import 'react-calendar/dist/Calendar.css';
import { Dates } from 'types';

type Props = {
  dates: Dates | null;
  showButton?: boolean;
  showDoubleView?: boolean;
  buttonStyle?: CSSProperties;
  calendarStyle?: CSSProperties;
  handleChange: (dates: Dates) => void;
  isDateUnavailable: (date: Date) => boolean;
  setShowCalendar: Dispatch<SetStateAction<boolean>>;
};

export default function Calendar({
  dates,
  buttonStyle,
  handleChange,
  calendarStyle,
  setShowCalendar,
  isDateUnavailable,
  showButton = true,
  showDoubleView = false,
}: Props) {
  return (
    <div className={styles.container} style={calendarStyle}>
      <ReactCalendar
        selectRange
        value={dates}
        // @ts-ignore
        onChange={handleChange}
        showDoubleView={showDoubleView}
        tileDisabled={({ date }) => isDateUnavailable(date)}
      />
      {showButton && (
        <button
          style={buttonStyle}
          className={styles.button}
          onClick={() => setShowCalendar(false)}
        >
          Done
        </button>
      )}
    </div>
  );
}
