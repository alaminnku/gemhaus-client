import Image from 'next/image';
import styles from './Agents.module.css';
import Link from 'next/link';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import Error from '@components/layout/Error';
import { Agent } from 'types';

type Props = {
  query: string;
};

export default async function Agents({ query }: Props) {
  const { data, error } = await fetchGemhausData('/users/agents', {
    next: { tags: ['agents'], revalidate: revalidateIn },
  });

  let agents: Agent[] = [];
  if (!error) agents = data;
  if (query)
    agents = data.filter(
      (agent: Agent) =>
        agent.name.toLowerCase().includes(query.toLowerCase()) ||
        agent.address.toLowerCase().includes(query.toLowerCase())
    );

  return (
    <section className={styles.container}>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          {agents.length > 0 ? (
            <>
              {agents.map((agent: Agent) => (
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
          ) : (
            <p>No agents found</p>
          )}
        </>
      )}
    </section>
  );
}
