import Agent from '@components/agent/Agent';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import { Agent as AgentType } from 'types';

type Props = {
  params: {
    id: string;
  };
};

export default function AgentPage({ params }: Props) {
  return (
    <main>
      <Agent id={params.id} />
    </main>
  );
}

export async function generateStaticParams() {
  const { data, error } = await fetchGemhausData('/users/agent', {
    next: { tags: ['agents'], revalidate: revalidateIn },
  });
  if (error) return [];
  return data.map((agent: AgentType) => ({ id: agent._id }));
}
