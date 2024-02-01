import styles from '@components/layout/CallToAction.module.css';
import LinkButton from '@components/layout/LinkButton';

type Props = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

export default function CallToAction({
  buttonText = 'Become a Host',
  buttonLink = '/short-term-rental',
  title = 'Your world is <br /> worth sharing',
  description = 'Turn your extra space into your next <br /> opportunity',
}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <LinkButton
          href={buttonLink}
          text={buttonText}
          style={{
            fontSize: '14px',
            color: 'var(--black)',
            backgroundColor: 'var(--white)',
          }}
        />
      </div>
    </section>
  );
}
