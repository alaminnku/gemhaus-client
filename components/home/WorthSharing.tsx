import styles from '@components/home/WorthSharing.module.css';
import LinkButton from '@components/layout/LinkButton';

export default function WorthSharing() {
  return (
    <section className={styles.container}>
      <h2>
        Your world is <br />
        worth sharing
      </h2>
      <p>
        Turn your extra space into your next <br /> opportunity.
      </p>
      <LinkButton
        href='/'
        text='Become a Host'
        style={{
          width: '12rem',
          color: 'var(--black)',
          backgroundColor: 'var(--white)',
        }}
      />
    </section>
  );
}
