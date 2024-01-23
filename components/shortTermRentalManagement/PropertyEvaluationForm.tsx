import styles from '@components/longTermRental/PropertyEvaluationForm.module.css';

export default function PropertyEvaluationForm() {
  return (
    <form className={styles.container}>
      <h3>It Takes Just Few Minutes!</h3>

      <div className={styles.evaluation_inputs}>
        <input type='text' placeholder='First Name' />
        <input type='text' placeholder='Last Name' />
        <input type='email' placeholder='Email' />
        <input type='text' placeholder='Phone Number' />
        <input type='text' placeholder='Address' />
        <input type='text' placeholder='City' />
        <input type='text' placeholder='State' />
        <input type='text' placeholder='Zip' />

        <div className={styles.input_options}>
          <p>
            Is your property in a HOA community? <span>*</span>
          </p>
          <div className={styles.options}>
            <div className={styles.option}>
              <input type='radio' name='hoa' id='hoaYes' />
              <label htmlFor='hoaYes'>Yes</label>
            </div>

            <div className={styles.option}>
              <input type='radio' name='hoa' id='hoaNo' />
              <label htmlFor='hoaNo'>No</label>
            </div>
          </div>
        </div>

        <div className={styles.input_options}>
          <p>
            Is your property currently rented? <span>*</span>
          </p>
          <div className={styles.options}>
            <div className={styles.option}>
              <input type='radio' name='rented' id='rentedYes' />
              <label htmlFor='rentedYes'>Yes</label>
            </div>
            <div className={styles.option}>
              <input type='radio' name='rented' id='rentedNo' />
              <label htmlFor='rentedNo'>No</label>
            </div>
          </div>
        </div>

        <div className={styles.input_options}>
          <p>
            If so, does that HOA community allows STR/LTR? <span>*</span>
          </p>
          <div className={styles.options}>
            <div className={styles.option}>
              <input type='radio' name='str' id='allowsStrYes' />
              <label htmlFor='allowsStrYes'>Yes</label>
            </div>
            <div className={styles.option}>
              <input type='radio' name='str' id='allowsStrNo' />
              <label htmlFor='allowsStrNo'>No</label>
            </div>
          </div>
        </div>
      </div>

      <input type='submit' value='Submit Form' />
    </form>
  );
}
