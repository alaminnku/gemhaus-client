'use client';

import Image from 'next/image';
import styles from './PropertyImages.module.css';
import { useState } from 'react';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosCloseCircleOutline,
} from 'react-icons/io';

type Props = {
  images: string[];
};

export default function PropertyImages({ images }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  function nextImage() {
    setIndex((prevState) =>
      prevState !== null
        ? prevState === images.length - 1
          ? prevState
          : prevState + 1
        : null
    );
  }

  function prevImage() {
    setIndex((prevState) =>
      prevState !== null ? (prevState === 0 ? prevState : prevState - 1) : null
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.main_image}>
        <Image
          src={images[0]}
          width={800}
          height={500}
          alt='Image'
          onClick={() => setIndex(0)}
        />

        <p className={styles.image_count}>1/{images.length}</p>
      </div>
      <div className={styles.other_images}>
        {images.slice(1, 5).map((image, index) => (
          <Image
            key={index}
            src={image}
            width={800}
            height={500}
            alt='Image'
            onClick={() => setIndex(index)}
          />
        ))}
      </div>

      {index !== null && (
        <div className={styles.expanded_image_container}>
          <div className={styles.expanded_image}>
            <Image
              src={images[index]}
              alt='Expanded Image'
              width={1600}
              height={1000}
            />
            <IoIosCloseCircleOutline
              className={styles.close_button}
              onClick={() => setIndex(null)}
            />

            <IoIosArrowDropleftCircle
              onClick={prevImage}
              className={styles.prev_button}
            />
            <IoIosArrowDroprightCircle
              onClick={nextImage}
              className={styles.next_button}
            />
          </div>
        </div>
      )}
    </div>
  );
}
