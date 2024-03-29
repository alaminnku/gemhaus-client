import styles from './PortfolioProperties.module.css';
import { createUSD, fetchGemhausData, revalidateIn } from '@lib/utils';
import Error from '@components/layout/Error';
import { Property } from 'types';
import Image from 'next/image';
import Link from 'next/link';
import PortfolioPropertiesContent from './PortfolioPropertiesContent';

export default async function PortfolioProperties() {
  const { data, error } = await fetchGemhausData('/properties', {
    next: {
      tags: ['properties'],
      revalidate: revalidateIn,
    },
  });

  return (
    <section className={styles.container}>
      <PortfolioPropertiesContent />

      {error ? (
        <Error error={error} />
      ) : (
        <div className={styles.properties}>
          {data.map((property: Property) => (
            <Link
              key={property._id}
              className={styles.property}
              href={`/vacation-rental/${property._id}`}
            >
              <Image
                src={property.images[0]}
                width={400}
                height={400}
                quality={100}
                alt={`${property.name} image`}
              />

              <div className={styles.name_and_price}>
                <p className={styles.name}>
                  {property.name
                    .split(/\s+/)
                    .slice(0, 2)
                    .join(' ')
                    .replace(/[^a-zA-Z ]/g, ' ')}
                </p>
                <p className={styles.price}>
                  From {createUSD(property.price)} Per Night
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
