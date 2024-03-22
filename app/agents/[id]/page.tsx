import Agent from '@components/agent/Agent';
import GreenFooter from '@components/layout/GreenFooter';
import Header from '@components/layout/Header';
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
      <Header withDarkBackground={true} isYellowSignIn={true} />
      <Agent id={params.id} />
      <GreenFooter />
    </main>
  );
}

export async function generateStaticParams() {
  const { data, error } = await fetchGemhausData('/users/agents', {
    next: { tags: ['agents'], revalidate: revalidateIn },
  });
  if (error) return [];
  return data.map((agent: AgentType) => ({ id: agent._id }));
}
