import Error from '@components/layout/Error';
import { fetchInstance } from '@lib/utils';
import styles from './Property.module.css';

type Props = {
  id: string;
};

export default async function Property({ id }: Props) {
  const { data, error } = await fetchInstance(`/properties/${id}`);

  return (
    <section className={styles.container}>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <h1>{data.name}</h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: data.description }}
          ></div>
        </>
      )}
    </section>
  );
}
