import Image from 'next/image';
import aboutUsImage from '@public/company/about-us.png';
import styles from './AboutUs.module.css';

export default function AboutUs() {
  return (
    <section className={styles.container}>
      <div className={styles.media}>
        <h2>
          About us <br /> GemHaus
        </h2>
        <Image src={aboutUsImage} alt='About GemHaus image' />
      </div>

      <div className={styles.content}>
        <p>
          We believe that the journey of homeownership is a multi-faceted story,
          and we're here to help you write each chapter. We're more than just a
          real estate brokerage; we're your trusted partner on the path to
          finding your dream home, managing your investment property, or selling
          a cherished piece of real estate, our team of experts is here to guide
          you every step of the way.
        </p>
      </div>
    </section>
  );
}
