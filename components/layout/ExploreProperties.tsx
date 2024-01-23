import LinkButton from './LinkButton';
import styles from './ExploreProperties.module.css';

export default function ExploreProperties() {
  return (
    <div className={styles.container}>
      <p>Continue exploring Properties</p>
      <LinkButton text='Show more' href='/properties' />
    </div>
  );
}
