import styles from '@components/layout/Services.module.css';
import ExploreProperties from '@components/layout/ExploreProperties';

type Props = {
  services: { id: number; icon: string; title: string; description: string }[];
};

export default function Services({ services }: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.services}>
        {services.map(({ id, icon, title, description }) => (
          <div key={id} className={styles.service}>
            <img src={icon} />

            <div className={styles.content}>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        ))}
      </div>

      <ExploreProperties />
    </section>
  );
}
