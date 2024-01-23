import ExploreProperties from '@components/layout/ExploreProperties';
import styles from '@components/longTermRental/Services.module.css';

export default function Services() {
  return (
    <section className={styles.container}>
      <div className={styles.services}>
        <div className={styles.service}>
          <img
            src='/long-term-rental/listing-and-marketing-icon.png'
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
            src='/long-term-rental/financial-reporting-icon.png'
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
            src='/long-term-rental/tenant-screening-icon.png'
            alt='Tenant screening icon'
          />
          <div className={styles.content}>
            <p className={styles.title}>Tenant Screening</p>
            <p className={styles.description}>
              We carefully screen prospective tenants to ensure they meet your
              criteria for a reliable, long-term rental experience.
            </p>
            <p></p>
          </div>
        </div>
        <div className={styles.service}>
          <img
            src='/long-term-rental/legal-compliance-icon.png'
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
            src='/long-term-rental/lease-management-icon.png'
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
            src='/long-term-rental/owner-and-tenant-portal-icon.png'
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
            src='/long-term-rental/maintenance-and-repairs-icon.png'
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
            src='/long-term-rental/monthly-sales-tax-filing-icon.png'
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
            src='/long-term-rental/property-inspections-icon.png'
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
        <div className={styles.service}>
          <img
            src='/long-term-rental/competitive-pricing-icon.png'
            alt='Property inspections icon'
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

      <ExploreProperties />
    </section>
  );
}
