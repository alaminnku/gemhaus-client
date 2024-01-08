import Properties from '@components/properties/Properties';
import Error from '@components/layout/Error';
import { fetchInstance } from '@lib/utils';

export default async function PropertiesPage() {
  const { data, error } = await fetchInstance('/properties');

  return (
    <main>
      {error ? <Error error={error} /> : <Properties properties={data} />}
    </main>
  );
}
