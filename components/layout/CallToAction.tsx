import styles from '@components/layout/CallToAction.module.css';
import LinkButton from '@components/layout/LinkButton';

type Props = {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  buttonWidth?: string;
};

export default function CallToAction({
  buttonWidth,
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
            width: buttonWidth,
            color: 'var(--black)',
            fontSize: '14px',
            backgroundColor: 'var(--white)',
          }}
        />
      </div>
    </section>
  );
}
