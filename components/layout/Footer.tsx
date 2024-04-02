import styles from '@components/layout/Footer.module.css';
import Logo from './Logo';
import Socials from './Socials';
import Link from 'next/link';

type Props = {
  isRounded?: boolean;
};

export default function Footer({ isRounded = false }: Props) {
  return (
    <footer className={`${styles.container} ${isRounded && styles.is_rounded}`}>
      <div className={styles.navigation_and_copyright}>
        <div className={styles.navigation}>
          <div className={styles.item}>
            <p>Join us</p>
            <div className={styles.links}>
              <Link href='/contact'>Become an Agent</Link>
              <Link href='/contact'>Careers</Link>
            </div>
          </div>
          <div className={styles.item}>
            <p>About us</p>
            <div className={styles.links}>
              <Link href='/company'>Why GemHaus</Link>
              <Link href='/blog'>Blog</Link>
              <Link href='/blog'>Real Estate News</Link>
            </div>
          </div>
          <div className={styles.item}>
            <p>Find us</p>
            <div className={styles.links}>
              <Link href='/contact'>Contact us</Link>
              <Link href='/contact'>Support</Link>
              <Socials />
            </div>
          </div>
          <div className={`${styles.item} ${styles.management}`}>
            <p>Management</p>
            <div className={styles.links}>
              <Link href='/short-term-rental'>Short Term Rentals</Link>
              <Link href='/long-term-rental'>Long Term Rentals</Link>
            </div>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>Copyright: @2024 GemHaus. All rights reserved.</p>
          <p>
            Updated January 2024: By searching, you agree to the Terms of Use,
            and Privacy Policy.
          </p>
          <p>
            GEMHAUS IS COMMITTED TO AND ABIDES BY THE FAIR HOUSING ACT AND EQUAL
            OPPORTUNITY ACT.
          </p>
        </div>
      </div>

      <div className={styles.logos}>
        <Logo isDarkBackground={true} />

        <div className={styles.house_logo}>
          <img src='/layout/house-logo.png' alt='House logo' />
          <p>
            GEMHAUS IS COMMITTED TO AND ABIDES BY THE FAIR HOUSING ACT AND EQUAL
            OPPORTUNITY ACT.
          </p>
        </div>
      </div>
    </footer>
  );
}
