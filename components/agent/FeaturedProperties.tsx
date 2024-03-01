import Image from 'next/image';
import styles from './FeaturedProperties.module.css';
import { Agent } from 'types';
import { createUSD, getFirstName } from '@lib/utils';

type Props = {
  agent: Agent;
};

export default function FeaturedProperties({ agent }: Props) {
  const featuredProperties = agent.properties.filter(
    (property) => property.isFeatured
  );
  const firstName = getFirstName(agent.name);

  return (
    <section className={styles.container}>
      <h2>{firstName}'s Featured Properties</h2>

      <div className={styles.cards}>
        {featuredProperties.map((property) => (
          <div className={styles.card} key={property._id}>
            <div className={styles.image_and_featured}>
              <Image
                src={property.images[0]}
                width={400}
                height={400}
                alt='Property image'
                className={styles.property_image}
              />

              <div className={styles.featured}>
                <p>Featured</p>
                <img src='/agent/heart.png' />
              </div>
            </div>

            <p className={styles.address}>{property.address}</p>
            <p className={styles.state}>
              {property.city}, {property.state}
            </p>
            <p className={styles.price}>{createUSD(property.price)}</p>
            <div
              dangerouslySetInnerHTML={{ __html: property.description }}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
