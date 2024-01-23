import styles from '@components/layout/CallToAction.module.css';
import LinkButton from '@components/layout/LinkButton';

type Props = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

export default function CallToAction({
  title = 'Your world is <br /> worth sharing',
  description = 'Turn your extra space into your next <br /> opportunity',
  buttonText = 'Become a Host',
  buttonLink = '/',
}: Props) {
  return (
    <section className={styles.container}>
      <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
      <LinkButton
        href={buttonLink}
        text={buttonText}
        style={{
          width: '12rem',
          color: 'var(--black)',
          backgroundColor: 'var(--white)',
        }}
      />
    </section>
  );
}
