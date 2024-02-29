import Image from 'next/image';
import styles from './Properties.module.css';
import AgentButton from './AgentButton';
import { Agent } from 'types';
import { createUSD } from '@lib/utils';

type Props = {
  agent: Agent;
};

export default function Properties({ agent }: Props) {
  return (
    <section className={styles.container}>
      <h2>{agent.name}'s Properties</h2>

      <div className={styles.cards}>
        {agent.properties.map((property) => (
          <div className={styles.card}>
            <div className={styles.image_and_price}>
              <Image
                src={property.images[0]}
                width={800}
                height={500}
                alt='Property image'
              />
              <p className={styles.price}>{createUSD(property.price)}</p>
            </div>

            <div className={styles.address_and_description}>
              <p className={styles.address}>{property.address}</p>
              <p className={styles.state}>
                {property.city}, {property.state}
              </p>
              <div
                className={styles.about}
                dangerouslySetInnerHTML={{ __html: property.description }}
              ></div>
              <AgentButton />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
