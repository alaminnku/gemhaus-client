'use client';

import Image from 'next/image';
import styles from './PropertyImages.module.css';

type Props = {
  images: string[];
};

export default function PropertyImages({ images }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.main_image}>
        <Image src={images[0]} width={800} height={500} alt='Image' />
      </div>
      <div className={styles.other_images}>
        {images.map((src, index) => (
          <>
            <Image key={index} src={src} width={800} height={500} alt='Image' />
            <Image key={index} src={src} width={800} height={500} alt='Image' />
            <Image key={index} src={src} width={800} height={500} alt='Image' />
            <Image key={index} src={src} width={800} height={500} alt='Image' />
          </>
        ))}
      </div>
    </div>
  );
}
