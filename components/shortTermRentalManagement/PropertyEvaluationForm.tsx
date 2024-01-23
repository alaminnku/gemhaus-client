import SubmitButton from '@components/layout/SubmitButton';
import styles from '@components/shortTermRentalManagement/PropertyEvaluationForm.module.css';

export default function PropertyEvaluationForm() {
  return (
    <form className={styles.container}>
      <h3>It Takes Just Few Minutes!</h3>

      <div className={styles.evaluation_inputs}>
        <div className={styles.evaluation_input}>
          <label htmlFor='name'>Full name</label>
          <input
            id='name'
            name='name'
            type='text'
            placeholder='Enter your name'
          />
        </div>
        <div className={styles.evaluation_input}>
          <label htmlFor='phone'>Phone number</label>
          <input
            id='phone'
            name='phone'
            type='text'
            placeholder='Enter your phone number'
          />
        </div>
        <div className={styles.evaluation_input}>
          <label htmlFor='email'>Email</label>
          <input
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
          />
        </div>
        <div className={styles.evaluation_input}>
          <label htmlFor='city'>City</label>
          <input
            id='city'
            name='city'
            type='text'
            placeholder='Enter your city'
          />
        </div>
        <div className={styles.evaluation_input}>
          <label htmlFor='address'>Address</label>
          <input
            id='address'
            name='address'
            type='text'
            placeholder='Enter your address'
          />
        </div>

        <div className={styles.evaluation_input}>
          <label htmlFor='state'>State</label>
          <input
            id='state'
            name='state'
            type='text'
            placeholder='Enter your state'
          />
        </div>

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

      <SubmitButton text='Submit Form' style={{ alignSelf: 'center' }} />
    </form>
  );
}
