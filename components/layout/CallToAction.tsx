import styles from '@components/layout/CallToAction.module.css';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title?: string;
  text?: string;
  link?: string;
  description?: string;
};

export default function CallToAction({
  text = 'Become a Host',
  link = '/short-term-rental',
  title = 'Where every <br /> property shines',
  description = 'Turn your extra space into your next <br /> opportunity',
}: Props) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
        <p dangerouslySetInnerHTML={{ __html: description }}></p>
        <Link href={link}>{text}</Link>
      </div>
      <Image
        src='/layout/call-to-action-bg.jpg'
        width={800}
        height={500}
        quality={100}
        alt='Background image'
        className={styles.background_image}
      />
    </section>
  );
}
