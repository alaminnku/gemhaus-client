import styles from '@components/buyAndSell/Services.module.css';
import ExploreProperties from '@components/layout/ExploreProperties';

export default function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.services}>
        <div className={styles.service}>
          <img
            src='/buy-and-sell/market-analysis-icon.png'
            alt='Market analysis icon'
          />

          <div className={styles.content}>
            <p className={styles.title}>Market Analysis</p>
            <p className={styles.description}>
              We provide in-depth market analysis to holp you make informed
              buying or selling decisions.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/buy-and-sell/transaction-management-icon.png'
            alt='Transaction management icon'
          />

          <div className={styles.content}>
            <p className={styles.title}>Transaction Management</p>
            <p className={styles.description}>
              Wo manage all the details of the buying or selling process, from
              offers and counter offers to inspections and closing.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/buy-and-sell/property-search-icon.png'
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
          <img src='/buy-and-sell/marketing-icon.png' alt='Marketing icon' />

          <div className={styles.content}>
            <p className={styles.title}>Marketing</p>
            <p className={styles.description}>
              Our marketing strategies help sellers attract potential buyers,
              while buyers receive curated property listings.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/buy-and-sell/negotiation-icon.png'
            alt='Negotiation icon'
          />

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
            src='/buy-and-sell/legal-compliance-icon.png'
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

      <ExploreProperties />
    </section>
  );
}
