'use client';

import styles from '@components/home/Affiliations.module.css';
import airbnb from '@public/home/airbnb-logo.png';
import vrbo from '@public/home/vrbo-logo.png';
import booking from '@public/home/booking-logo.png';
import Image from 'next/image';

const logos = [
  { src: airbnb, alt: 'Airbnb logo' },
  { src: vrbo, alt: 'Vrbo logo' },
  { src: booking, alt: 'Booking.com logo' },
  { src: vrbo, alt: 'Vrbo logo' },
  { src: booking, alt: 'Booking.com logo' },
];

export default function Affiliations() {
  return (
    <section className={styles.container}>
      <h2>We work with:</h2>

      <div className={styles.logos}>
        {logos.map(({ src, alt }, index) => (
          <Image key={index} src={src} alt={alt} />
        ))}
      </div>
    </section>
  );
}
