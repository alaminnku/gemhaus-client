import ExploreProperties from '@components/layout/ExploreProperties';
import styles from './Services.module.css';

export default function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.services}>
        <div className={styles.service}>
          <img
            src='/short-term-rental/listing-optimization-icon.png'
            alt='Listing optimization icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Listing optimization</p>
            <p>
              We create eye-catching, high-converting listings on popular
              platforms like Airbnib and VRBO to attract more guests.
            </p>
            <p></p>
          </div>
        </div>

        <div className={styles.service}>
          <img
            src='/short-term-rental/property-management-icon.png'
            alt='Property management icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Property Management</p>
            <p>
              Our dedicated team takes care of maintenance, and restocking to
              keep your property in top condition.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/short-term-rental/dynamic-pricing-icon.png'
            alt='Dynamic pricing icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Dynamic Pricing</p>
            <p>
              Our data-driven pricing strategies maximize your rental income by
              adjusting rates based on demand, seasons, and local events.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/short-term-rental/marketing-and-promotion-icon.png'
            alt='Marketing and promotion icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Marketing and Promotion</p>
            <p>
              We employ effective marketing strategies to increase your
              property's visibility and bookings.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/short-term-rental/guest-service-icon.png'
            alt='Guest services icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Guest Services</p>
            <p>
              We handle all guest inquiries, bookings, and communication,
              ensuring a smooth and stress-free experience for both hosts and
              guests. 24/7 guest support Services.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/short-term-rental/revenue-reporting-icon.png'
            alt='Revenue reporting icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Revenue Reporting</p>
            <p>
              Transparent financial reporting allows you to track your
              property's performance and revenue.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/short-term-rental/house-keeping-icon.png'
            alt='House keeping icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>House Keeping</p>
            <p>We handle all cleans, and make sure quality assurance.</p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/short-term-rental/owner-portal-icon.png'
            alt='Owner portal icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Owner Portal</p>
            <p>
              All clients have their own dedicated portal to view calendar,
              bookings, and financial statements.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/short-term-rental/property-analysis-icon.png'
            alt='Property analysis icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Property Analysis</p>
            <p>
              Expert property analysis provides you with valuable insights to
              make informed decisions.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/short-term-rental/competitive-pricing-icon.png'
            alt='Competitive pricing icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Competitive Pricing</p>
            <p>
              We offer top-quality real estate services at competitive rates.
              Experience value and excellence without compromise.
            </p>
            <p></p>
          </div>
        </div>
      </div>

      <ExploreProperties />
    </section>
  );
}
