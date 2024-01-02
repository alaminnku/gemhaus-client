import styles from '@components/longTermRental/Services.module.css';
import Link from 'next/link';

export default function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p>Unlock the Power of Flexibility.</p>
        <p>
          We specialize in turning your property into a lucrative short-term
          rental, optimizing your returns without the long-term commitment. We
          specialize in delivering seamless and profitable short-term rental
          experiences for property owners and guests alike. As superhosts, our
          comprehensive suite of services includes:
        </p>
      </div>

      <div className={styles.services}>
        <div className={styles.service}>
          <img
            src='/vacation-rental/listing-and-marketing.png'
            alt='Listing and marketing icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Listing and Marketing</p>
            <p className={styles.description}>
              We create eye-catching, high-converting listings on popular
              platforms like Airbnb and VRBO to attract more guests.
            </p>
            <p></p>
          </div>
        </div>

        <div className={styles.service}>
          <img
            src='/vacation-rental/property-management.png'
            alt='Property management icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Property Management</p>
            <p className={styles.description}>
              Our dedicated team takes care of maintenance, and restocking to
              keep your property in top condition.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/vacation-rental/dynamic-pricing.png'
            alt='Dynamic pricing icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Dynamic Pricing</p>
            <p className={styles.description}>
              wOur data-driven pricing strategies maximize your rental income by
              adjusting rates based on demand, seasons, and local events.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/vacation-rental/marketing-and-promotion.png'
            alt='Marketing and promotion icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Marketing and Promotion</p>
            <p className={styles.description}>
              We employ effective marketing strategies to increase your
              property's visibility and bookings.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/vacation-rental/guest-services.png'
            alt='Guest services icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Guest Services</p>
            <p className={styles.description}>
              We handle all guest inquiries, booking, and communication,
              ensuring a smooth and stress-free experience for both hosts and
              guests. 24/7 guest support services.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/vacation-rental/revenue-reporting.png'
            alt='Revenue reporting icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Revenue Reporting</p>
            <p className={styles.description}>
              Transparent financial reporting allows your to track your
              property's performance and revenue.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/vacation-rental/house-keeping.png'
            alt='House keeping icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>House Keeping</p>
            <p className={styles.description}>
              WE handle all cleans, and make sure quality assurance.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/vacation-rental/owner-portal.png'
            alt='Owner portal icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Owner Portal</p>
            <p className={styles.description}>
              All clients have their own dedicated portal to view calendar,
              bookings, and financial statements.
            </p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/vacation-rental/property-analysis.png'
            alt='Property analysis icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Property Analysis</p>
            <p className={styles.description}>
              Expert property analysis provides you with valuable insights to
              make informed decisions.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/vacation-rental/competitive-pricing.png'
            alt='Competitive pricing icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Competitive Pricing</p>
            <p className={styles.description}>
              We offer top-quality real estate services at competitive rates.
              Experience value and excellence without compromise.
            </p>
            <p></p>
          </div>
        </div>
      </div>

      <Link className={styles.rental_estimate_button} href='/'>
        Get Your Rental Estimate
      </Link>
    </section>
  );
}
