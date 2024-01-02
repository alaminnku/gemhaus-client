import styles from '@components/buyAndSell/PropertyEvaluationForm.module.css';

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
      </div>
      <input type='submit' value='Submit Form' />
    </form>
  );
}
