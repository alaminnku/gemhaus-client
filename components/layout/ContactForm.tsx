import styles from './ContactForm.module.css';
import SubmitButton from './SubmitButton';

export default function ContactForm() {
  async function handleSubmit(formData: FormData) {
    console.log(formData);
  }
  return (
    <form className={styles.container} action={handleSubmit}>
      <div className={styles.item}>
        <label htmlFor='name'>Full name</label>
        <input type='text' id='name' name='name' placeholder='Full name' />
      </div>
      <div className={styles.item}>
        <label htmlFor='email'>Email address</label>
        <input
          type='text'
          id='email'
          name='email'
          placeholder='Email address'
        />
      </div>
      <div className={styles.item}>
        <label htmlFor='phone'>Phone</label>
        <input
          type='number'
          id='phone'
          name='phone'
          inputMode='numeric'
          placeholder='Phone number'
        />
      </div>
      <div className={styles.item}>
        <label htmlFor='message'>Message</label>
        <textarea
          rows={10}
          cols={60}
          id='message'
          name='message'
          placeholder='Message'
        />
      </div>

      <SubmitButton text='Submit Form' style={{ alignSelf: 'center' }} />
    </form>
  );
}
