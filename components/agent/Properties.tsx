import Image from 'next/image';
import styles from './Properties.module.css';
import AgentButton from './AgentButton';

export default function Properties() {
  return (
    <section className={styles.container}>
      <h2>Bill's Properties</h2>

      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.image_and_price}>
            <Image
              src='/agent/property.png'
              width={800}
              height={500}
              alt='Property image'
            />
            <p className={styles.price}>$1,075,000</p>
          </div>

          <div className={styles.address_and_description}>
            <p className={styles.address}>2841 E Osborn Road</p>
            <p className={styles.state}>Phoenix, AZ</p>
            <p className={styles.about}>
              3 BD, 2 BA, 2,262 SQFT, Single-Family Listing courtesy of The
              Agency
            </p>
            <AgentButton />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.image_and_price}>
            <Image
              src='/agent/property.png'
              width={800}
              height={500}
              alt='Property image'
            />
            <p className={styles.price}>$1,075,000</p>
          </div>

          <div className={styles.address_and_description}>
            <p className={styles.address}>2841 E Osborn Road</p>
            <p className={styles.state}>Phoenix, AZ</p>
            <p className={styles.about}>
              3 BD, 2 BA, 2,262 SQFT, Single-Family Listing courtesy of The
              Agency
            </p>
            <AgentButton />
          </div>
        </div>
      </div>
    </section>
  );
}
