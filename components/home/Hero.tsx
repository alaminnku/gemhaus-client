import Header from '@components/layout/Header';
import styles from '@components/home/Hero.module.css';
import vacationIcon from '@public/home/vacation-icon.png';
import buyIcon from '@public/home/buy-icon.png';
import rentIcon from '@public/home/rent-icon.png';
import Image from 'next/image';
import { inter } from '@lib/utils';
import Link from 'next/link';
import SearchField from './SearchField';

export default function Hero() {
  return (
    <section className={styles.container}>
      <Header />

      <div className={styles.search_and_cta}>
        <div className={styles.search}>
          <div className={`${styles.search_types} ${inter.className}`}>
            <div className={styles.vacation}>
              <Image src={vacationIcon} alt='Vacation icon' />
              <p>Vacation</p>
            </div>

            <Link href='/vacation-rental' className={styles.rent}>
              <Image src={rentIcon} alt='Rent icon' />
              <p>Rent</p>
            </Link>

            <Link href='/buy-and-sell' className={styles.buy}>
              <Image src={buyIcon} alt='Vacation icon' />
              <p>Buy</p>
            </Link>
          </div>

          <SearchField />
        </div>

        <div className={styles.cta}>
          <p className={styles.title}>What's next?</p>
          <p className={styles.description}>
            Find your place, or hire industry leading management experts
          </p>
        </div>
      </div>

      <div className={styles.hero_image}>
        <div className={styles.image_container}>
          <Image
            priority
            width={800}
            height={500}
            src='/home/hero-bg.jpg'
            alt='Background image'
          />
          <p>The real estate help you need with the hospitality touch</p>
        </div>
      </div>
    </section>
  );
}
