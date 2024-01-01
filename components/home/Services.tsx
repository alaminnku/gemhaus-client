import styles from '@components/home/Services.module.css';
import Image from 'next/image';
import Link from 'next/link';
import property from '@public/property.jpg';
import { RiVipDiamondLine } from 'react-icons/ri';

export default function Services() {
  return (
    <section className={styles.container}>
      <span>Our Services</span>
      <h2>
        How Can <br /> We Help You
      </h2>

      <div className={styles.services}>
        <div className={styles.service}>
          <Image src={property} alt='Vacation rental service image' />

          <div className={styles.content}>
            <h3>Vacation Rental</h3>
            <p>
              Find your place with an immersive photo experience and the most
              listings, including things you won't find anywhere else.
            </p>

            <Link className={styles.evaluation_button} href='/'>
              Property Evaluation <RiVipDiamondLine />
            </Link>
          </div>
        </div>

        <div className={styles.service}>
          <Image src={property} alt='Long term rental service image' />

          <div className={styles.content}>
            <h3>Long Term Rental</h3>
            <p>
              We're creating a seamless online experience - from shopping on the
              largest rental network, to applying, to paying rent.
            </p>

            <Link className={styles.evaluation_button} href='/'>
              Property Evaluation <RiVipDiamondLine />
            </Link>
          </div>
        </div>

        <div className={styles.service}>
          <Image src={property} alt='Sales or buy rental service image' />

          <div className={styles.content}>
            <h3>Sales Or Buy</h3>
            <p>
              No matter what path you take to seel your home, we can help you
              navigate a successful sale.
            </p>

            <Link className={styles.evaluation_button} href='/'>
              Property Evaluation <RiVipDiamondLine />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
