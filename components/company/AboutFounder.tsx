import Image from 'next/image';
import styles from './AboutFounder.module.css';
import founderImage from '@public/company/founder-image.png';

export default function AboutFounder() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>
          About The <br />
          Founder
        </h2>
        <p>
          Leah Walczak is the founder and chief operating officer of GemHaus,
          and sets the vision for the company. Her journey is a testament to
          true entrepreneurial spirit and exploration. Born and raised in
          Massachusetts, she embarked on her real estate career in bustling Los
          Angeles in 2011, consistently ranking among top producers and
          facilitating over $150 million in sales and over a decade of
          experience.
        </p>
        <p>
          In 2022, amidst the pandemic, Leah founded a vacation rental company
          in Scottsdale, Arizona, managing 30 properties and generating $1
          million in revenue within 12 months.
        </p>
        <p>
          With her broker's license in hand, Leah envisions a transformative
          opportunity in the real estate industry. Her goal at GemHaus is to
          empower agents and clients alike, shaping a new paradigm that goes
          beyond sales and explores a world of possibilities.
        </p>
      </div>

      <div className={styles.media}>
        <Image src={founderImage} alt='GemHaus founder image' />
      </div>
    </section>
  );
}
