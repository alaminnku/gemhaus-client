import styles from '@components/buyAndSell/Services.module.css';
import Link from 'next/link';

export default function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p>Looking to buy or sell a property?</p>
        <p>
          Our experience real estate professionals are there to guide you
          through the process, ensuring you make informed decisions every step
          of the way.
        </p>
      </div>

      <div className={styles.services}>
        <div className={styles.service}>
          <img
            src='/buy-and-sell/market-analysis.png'
            alt='Market analysis icon'
          />

          <div className={styles.content}>
            <p className={styles.title}>Market Analysis</p>
            <p className={styles.description}>
              We provide in-depth market analysis to help you make informed
              buying or selling decisions.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/buy-and-sell/transaction-management.png'
            alt='Transaction management icon'
          />

          <div className={styles.content}>
            <p className={styles.title}>Transaction Management</p>
            <p className={styles.description}>
              We manage all the details of the buying or selling process, from
              offers and counteroffers to inspections and closing.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/buy-and-sell/property-search.png'
            alt='Property search icon'
          />

          <div className={styles.content}>
            <p className={styles.title}>Property Search</p>
            <p className={styles.description}>
              For buyers, we help you find the perfect property that meets your
              needs and budget. For sellers, we assist in pricing your property
              competitively.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img src='/buy-and-sell/marketing.png' alt='Marketing icon' />

          <div className={styles.content}>
            <p className={styles.title}>Marketing</p>
            <p className={styles.description}>
              Our marketing strategies help sellers attract potential buyers,
              while buyers receive curated property listings.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img src='/buy-and-sell/negotiation.png' alt='Negotiation icon' />

          <div className={styles.content}>
            <p className={styles.title}>Negotiation</p>
            <p className={styles.description}>
              Our expert negotiators work to secure the best deals for both
              buyers and sellers, ensuring a win-win outcome.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/buy-and-sell/legal-compliance.png'
            alt='Legal compliance icon'
          />

          <div className={styles.content}>
            <p className={styles.title}>Legal Compliance</p>
            <p className={styles.description}>
              We ensure that all transactions adhere to legal and regulatory
              requirements, providing peace of mind.
            </p>
          </div>
        </div>
      </div>

      <Link className={styles.journey_button} href='/'>
        Start Your Journey
      </Link>
    </section>
  );
}
