import styles from '@components/longTermRental/Services.module.css';
import Link from 'next/link';

export default function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <p>Steady Income, Worry-Free Ownership.</p>
        <p>
          We specialize in turning your property into a lucrative short-term
          rental, optimizing your returns without the long-term commitment. Our
          comprehensive suite of services includes:
        </p>
      </div>

      <div className={styles.services}>
        <div className={styles.service}>
          <img
            src='/long-term-rental/listing-and-marketing.png'
            alt='Listing and marketing icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Listing and Marketing</p>
            <p className={styles.description}>
              Strategic advertising, we utilize proven strategies to attract
              qualified tenants quickly.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/long-term-rental/financial-reporting.png'
            alt='Financial reporting icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Financial Reporting</p>
            <p className={styles.description}>
              Transparent financial reporting keeps you informed about your
              property's performance and cash flow.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/long-term-rental/tenant-screening.png'
            alt='Tenant screening icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Tenant Screening</p>
            <p className={styles.description}>
              we carefully screen prospective tenants to ensure they meet your
              criteria for a reliable, long-term rental experience.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/long-term-rental/legal-compliance.png'
            alt='Legal compliance icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Legal Compliance</p>
            <p className={styles.description}>
              We stay updated on local rental regulations to keep your property
              in compliance, minimizing legal risks.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/long-term-rental/lease-management.png'
            alt='Lease management icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Lease Management</p>
            <p className={styles.description}>
              We handle lease agreements, renewals, and rent collection,
              ensuring smooth landlord-tenant relationships.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/long-term-rental/owner-and-tenant-portal.png'
            alt="Owner & tenant's portal icon"
          />
          <div className={styles.content}>
            <p className={styles.title}>Owner & Tenant's Portal</p>
            <p className={styles.description}>
              Easily access important information, easy online pay, and more.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/long-term-rental/maintenance-and-repairs.png'
            alt='Maintenance and repairs icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Maintenance and Repairs</p>
            <p className={styles.description}>
              Our team oversees property maintenance and promptly addresses
              repair requests, keeping your investment in top condition.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/long-term-rental/monthly-sales-tax-filing.png'
            alt='Monthly sales tax filing icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Monthly Sales Tax Filing</p>
            <p className={styles.description}>
              Included in our services, we handle all the paperwork and
              deadlines for you.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/long-term-rental/property-inspections.png'
            alt='Property inspections icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Property Inspections</p>
            <p className={styles.description}>
              Expert property analysis provides you with valuable insights to
              make informed decisions.
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
