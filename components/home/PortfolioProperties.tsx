import LinkButton from '@components/layout/LinkButton';
import styles from './PortfolioProperties.module.css';
import { TbDiamond } from 'react-icons/tb';
import { createUSD, fetchGemhausData } from '@lib/utils';
import Error from '@components/layout/Error';
import { Property } from 'types';
import Image from 'next/image';
import Link from 'next/link';

export default async function PortfolioProperties() {
  const { data, error } = await fetchGemhausData('/properties', {
    next: { revalidate: 60 * 60 * 24 },
  });

  return (
    <section className={styles.container}>
      <h2>
        Expand Your <br /> Portfolio
      </h2>

      <div className={styles.content_and_properties}>
        <div className={styles.content}>
          <p>
            Are you looking to make your mark in the world of real estate? At
            GemHaus, we provide you with the expertise and opportunities to do
            just that.
          </p>

          <LinkButton
            text='Find your Gem'
            href='/properties'
            isReversed={true}
            icon={<TbDiamond />}
          />
        </div>

        {error ? (
          <Error error={error} />
        ) : (
          <div className={styles.properties}>
            {data.slice(0, 2).map((property: Property) => (
              <Link
                href={`/properties/${property._id}`}
                className={styles.property}
              >
                <Image
                  src={property.images[0]}
                  width={400}
                  height={400}
                  alt={`${property.name} image`}
                />

                <div className={styles.name_and_price}>
                  <p className={styles.name}>{property.name}</p>
                  <p className={styles.price}>
                    From {createUSD(property.price)} Per Night
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
