'use client';

import { useState } from 'react';
import styles from './Privacy.module.css';

export default function Privacy() {
  const [selected, setSelected] = useState<string>('');

  return (
    <section className={styles.container}>
      <h1>GemHaus Privacy Policy</h1>

      <div className={styles.navigation_and_content}>
        <div className={styles.navigation}>
          <a
            href='#info-use'
            onClick={() => setSelected('info-use')}
            className={selected === 'info-use' ? styles.active : ''}
          >
            Information Collection and Use
          </a>
          <a
            href='#data-use'
            onClick={() => setSelected('data-use')}
            className={selected === 'data-use' ? styles.active : ''}
          >
            Use of Data
          </a>
          <a
            href='#advertising'
            onClick={() => setSelected('advertising')}
            className={selected === 'advertising' ? styles.active : ''}
          >
            Advertising
          </a>
          <a
            href='#google-facebook-ads'
            onClick={() => setSelected('google-facebook-ads')}
            className={selected === 'google-facebook-ads' ? styles.active : ''}
          >
            Google Search Ads and Facebook Ads
          </a>
          <a
            href='#analytics'
            onClick={() => setSelected('analytics')}
            className={selected === 'analytics' ? styles.active : ''}
          >
            Analytics
          </a>
          <a
            href='#remarketing'
            onClick={() => setSelected('remarketing')}
            className={selected === 'remarketing' ? styles.active : ''}
          >
            Remarketing
          </a>
          <a
            href='#data-security'
            onClick={() => setSelected('data-security')}
            className={selected === 'data-security' ? styles.active : ''}
          >
            Data Security
          </a>
          <a
            href='#ccpa'
            onClick={() => setSelected('ccpa')}
            className={selected === 'ccpa' ? styles.active : ''}
          >
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </a>
          <a
            href='#gdpr'
            onClick={() => setSelected('gdpr')}
            className={selected === 'gdpr' ? styles.active : ''}
          >
            GDPR Data Protection Right
          </a>
          <a
            href='#child-info'
            onClick={() => setSelected('child-info')}
            className={selected === 'child-info' ? styles.active : ''}
          >
            Children's Information
          </a>
          <a
            href='#changes-in-policy'
            onClick={() => setSelected('changes-in-policy')}
            className={selected === 'changes-in-policy' ? styles.active : ''}
          >
            Changes to This Privacy Policy
          </a>
        </div>

        <div className={styles.content}>
          <div className={styles.item}>
            <p>Last updated May 4, 2024</p>
            <p>
              GEMHAUS LLC ("we", "us", or "our") operates the website
              www.gemhaus.com. This page informs you of our policies regarding
              the collection, use, and disclosure of personal data when you use
              our website and the choices you have associated with that data.{' '}
            </p>
            <p>
              By using our website, you agree to the collection and use of
              information in accordance with this policy.
            </p>
          </div>

          <div className={styles.item} id='info-use'>
            <h2>Information Collection and Use</h2>
            <p>
              We collect several types of information for various purposes to
              provide and improve our website:
            </p>

            <ul>
              <ol>
                - **Personal Data**: While using our website, we may ask you to
                provide us with certain personally identifiable information that
                can be used to contact or identify you ("Personal Data").
                Personal Data may include, but is not limited to:
              </ol>
              <ol>- Email address</ol>
              <ol>- First name and last name</ol>
              <ol>- Phone number</ol>
              <ol>- Address, State, Province, ZIP/Postal code, City</ol>
            </ul>
          </div>

          <div className={styles.item} id='data-use'>
            <h2>Use of Data</h2>
            <p>We use the collected data for various purposes:</p>
            <ul>
              <ol>- To provide and maintain our website</ol>
              <ol>- To notify you about changes to our website</ol>
              <ol>
                - To allow you to participate in interactive features of our
                website when you choose to do so
              </ol>
              <ol>- To provide customer support</ol>
              <ol>
                - To gather analysis or valuable information so that we can
                improve our website
              </ol>
              <ol>- To monitor the usage of our website</ol>
              <ol>- To detect, prevent and address technical issues</ol>
              <ol>
                - To provide you with news, special offers and general
                information about other goods, services and events which we
                offer that are similar to those that you have already purchased
                or enquired about unless you have opted not to receive such
                information
              </ol>
            </ul>
          </div>
          <div className={styles.item} id='advertising'>
            <h2>Advertising</h2>
            <p>
              We may use third-party service providers to show advertisements to
              you to help support and maintain our website. These third-party
              service providers may use cookies or similar technologies to
              collect information about your visits to our website and other
              websites in order to provide advertisements about goods and
              services of interest to you.
            </p>
          </div>
          <div className={styles.item} id='google-facebook-ads'>
            <h2>Google Search Ads and Facebook Ads</h2>
            <p>
              We may run advertisements through Google Search Ads and Facebook
              Ads. These services may track users' online activities over time
              and across different websites or online platforms by collecting
              information through automated means, including through the use of
              cookies.
            </p>
          </div>
          <div className={styles.item} id='analytics'>
            <h2>Analytics</h2>
            <p>
              We use Google Analytics to monitor and analyze the use of our
              website. Google Analytics is a web analytics service offered by
              Google that tracks and reports website traffic. Google uses the
              data collected to track and monitor the use of our website. This
              data is shared with other Google services. Google may use the
              collected data to contextualize and personalize the ads of its own
              advertising network.
            </p>
          </div>
          <div className={styles.item} id='remarketing'>
            <h2>Remarketing</h2>
            <p>
              We may use remarketing services to advertise on third-party
              websites to you after you visited our website. We and our
              third-party vendors use cookies to inform, optimize and serve ads
              based on your past visits to our website.
            </p>
          </div>
          <div className={styles.item} id='data-security'>
            <h2>Data Security</h2>
            <p>
              We are committed to ensuring the security of your personal
              information. We take reasonable precautions and follow industry
              best practices to protect your personal data from unauthorized
              access, alteration, disclosure, or destruction.
            </p>
            <ul>
              <ol>
                - SSL Encryption: We employ Secure Socket Layer (SSL) encryption
                technology to safeguard the transmission of sensitive
                information submitted by users. SSL encryption helps to protect
                your personal information during data transfer over the
                internet.
              </ol>
              <ol>
                - Access Control: Access to your personal information is
                restricted to authorized personnel only, who have a legitimate
                need to access such information for the purposes outlined in
                this Privacy Policy.
              </ol>
              <ol>
                - Data Minimization: We only collect and retain personal
                information that is necessary for the purposes stated in this
                Privacy Policy. We do not store personal information longer than
                is necessary to fulfill the purposes for which it was collected,
                unless required by law.
              </ol>
              <ol>
                - Firewall Protection: Our systems are protected by firewalls to
                prevent unauthorized access to our internal systems. This helps
                to ensure that your personal information remains secure.
              </ol>
              <ol>
                - Regular Security Audits: We conduct regular security audits to
                identify and address potential vulnerabilities in our systems
                and processes. This helps us maintain the integrity and security
                of your personal information.
              </ol>
            </ul>
          </div>
          <div className={styles.item} id='ccpa'>
            <h2>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p>
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <ul>
              <ol>
                - Request that a business that collects a consumer's personal
                data disclose the categories and specific pieces of personal
                data that a business has collected about consumers.
              </ol>
              <ol>
                - Request that a business delete any personal data about the
                consumer that a business has collected.
              </ol>
              <ol>
                - Request that a business that sells a consumer's personal data,
                not sell the consumer's personal data.
              </ol>
              <ol>
                - If you make a request, we have one month to respond to you. If
                you would like to exercise any of these rights, please contact
                us.
              </ol>
            </ul>
          </div>
          <div className={styles.item} id='gdpr'>
            <h2>GDPR Data Protection Right</h2>
            <p>
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <ul>
              <ol>
                - The right to access - You have the right to request copies of
                your personal data. We may charge you a small fee for this
                service.
              </ol>
              <ol>
                - The right to rectification - You have the right to request
                that we correct any information you believe is inaccurate. You
                also have the right to request that we complete the information
                you believe is incomplete.
              </ol>
              <ol>
                - The right to erasure - You have the right to request that we
                erase your personal data, under certain conditions.
              </ol>
              <ol>
                - The right to restrict processing - You have the right to
                request that we restrict the processing of your personal data,
                under certain conditions.
              </ol>
              <ol>
                - The right to object to processing - You have the right to
                object to our processing of your personal data, under certain
                conditions.
              </ol>
              <ol>
                - The right to data portability - You have the right to request
                that we transfer the data that we have collected to another
                organization, or directly to you, under certain conditions.
              </ol>
            </ul>
            <p>
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>
          <div className={styles.item} id='child-info'>
            <h2>Children’s Information</h2>
            <p>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p>
              We do not knowingly collect any Personal Identifiable Information
              from children under{' '}
              <span>
                the age of 13. If you think that your child provided this kind
                of information on our website, we strongly encourage you to
                contact us immediately and we will do our best efforts to
                promptly remove such information from our records.
              </span>
            </p>
          </div>
          <div className={styles.item} id='changes-in-policy'>
            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Thus, we
              advise you to review this page periodically for any changes. We
              will notify you of any changes by posting the new Privacy Policy
              on this page. These changes are effective immediately, after they
              are posted on this page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
