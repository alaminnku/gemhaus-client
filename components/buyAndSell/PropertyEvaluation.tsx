import styles from '@components/buyAndSell/PropertyEvaluation.module.css';
import Image from 'next/image';
import newsletter from '@public/layout/newsletter.png';

export default function PropertyEvaluation() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>Property Evaluation</h2>
        <p>
          Fill out the information below to reveal the tru earning capacity of
          your property. Our expert property evaluation services are here to
          help you determine if a short-term rental is the right fit for your
          home. We analyze market dynamics, property features, and guest
          preference to provide you with an accurate revenue projection. With
          data-driven insights, we can ensure a precise proforma tailored to
          your property.
        </p>
      </div>

      <form className={styles.evaluation_form}>
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

      <div className={styles.subscribe}>
        <Image src={newsletter} alt='Newsletter image' />

        <form>
          <h3>Subscribe To Our Newsletter</h3>

          <div className={styles.subscribe_inputs}>
            <input type='email' placeholder='Enter your email' />
            <input type='submit' value='Subscribe Us' />
          </div>
        </form>
      </div>
    </section>
  );
}
