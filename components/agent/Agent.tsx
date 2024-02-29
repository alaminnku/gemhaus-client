import Header from '@components/layout/Header';
import Hero from './Hero';
import Properties from './Properties';
import FeaturedProperties from './FeaturedProperties';
import Transactions from './Transactions';
import GreenFooter from '@components/layout/GreenFooter';
import { fetchGemhausData, revalidateIn } from '@lib/utils';
import Error from '@components/layout/Error';

type Props = {
  id: string;
};

export default async function Agent({ id }: Props) {
  const { data, error } = await fetchGemhausData(`/users/agent/${id}`, {
    next: { tags: ['agents'], revalidate: revalidateIn },
  });

  return (
    <>
      <Header withDarkBackground={true} />
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
      <GreenFooter />
    </>
  );
}
