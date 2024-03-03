import Image from 'next/image';
import styles from './Agents.module.css';
import Link from 'next/link';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import Error from '@components/layout/Error';
import { Agent } from 'types';

export default async function Agents() {
  const { data, error } = await fetchGemhausData('/users/agent', {
    // next: { tags: ['agents'], revalidate: revalidateIn },
  });

  return (
    <section className={styles.container}>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          {data.map((agent: Agent) => (
            <Link
              key={agent._id}
              href={`/agents/${agent._id}`}
              className={styles.agent}
            >
              <Image
                src={agent.image}
                width={400}
                height={400}
                alt={`${agent.name}'s image`}
              />

              <p className={styles.name}>{agent.name}</p>
              <p className={styles.email}>{agent.email}</p>
              <p className={styles.phone}>{agent.phone}</p>
            </Link>
          ))}
        </>
      )}
    </section>
  );
}
