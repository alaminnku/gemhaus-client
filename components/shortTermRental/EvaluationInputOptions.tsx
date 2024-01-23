import styles from './EvaluationInputOptions.module.css';

export default function EvaluationInputOptions() {
  return (
    <>
      <div className={styles.input_options}>
        <p>Is your property in a HOA community?</p>
        <div className={styles.option}>
          <input type='checkbox' name='isHOA' id='isHOA' />
          <label htmlFor='hoa'>Yes</label>
        </div>
      </div>

      <div className={styles.input_options}>
        <p>Is your property currently rented?</p>

        <div className={styles.option}>
          <input type='checkbox' name='isRented' id='isRented' />
          <label htmlFor='isRented'>Yes</label>
        </div>
      </div>

      <div className={styles.input_options}>
        <p>If so, does that HOA community allows STR/LTR?</p>

        <div className={styles.option}>
          <input type='checkbox' name='allowsStrLtr' id='allowsStrLtr' />
          <label htmlFor='allowsStrLtr'>Yes</label>
        </div>
      </div>
    </>
  );
}
