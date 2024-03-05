import Hero from './Hero';
import Properties from './Properties';
import FeaturedProperties from './FeaturedProperties';
import Transactions from './Transactions';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import Error from '@components/layout/Error';

type Props = {
  id: string;
};

export default async function Agent({ id }: Props) {
  const { data, error } = await fetchGemhausData(`/users/agents/${id}`, {
    // next: { tags: [`agent-${id}`], revalidate: revalidateIn },
  });

  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Hero agent={data} />
          {data.properties && <Properties agent={data} />}
          {data.properties && <FeaturedProperties agent={data} />}
          {data.transactions && <Transactions agent={data} />}
        </>
      )}
    </>
  );
}
