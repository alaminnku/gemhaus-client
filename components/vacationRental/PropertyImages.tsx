'use client';

import Image from 'next/image';
import styles from './PropertyImages.module.css';
import { useState } from 'react';
import {
  IoIosArrowBack,
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosArrowForward,
  IoIosCloseCircleOutline,
} from 'react-icons/io';

type Props = {
  images: string[];
};

export default function PropertyImages({ images }: Props) {
  const [expandedImage, setExpandedImage] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  function expandImage(index: number) {
    setCurrentIndex(index);
    setExpandedImage(images[index]);
  }

  function nextImage() {
    expandImage(
      currentIndex === images.length - 1
        ? currentIndex
        : (currentIndex + 1) % images.length
    );
  }

  function prevImage() {
    expandImage(
      currentIndex === 0
        ? 0
        : (currentIndex - 1 + images.length) % images.length
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
          onClick={() => setExpandedImage(images[0])}
        />

        <p className={styles.image_count}>1/{images.length}</p>
      </div>
      <div className={styles.other_images}>
        {images.slice(1, 5).map((src, index) => (
          <Image
            key={index}
            src={src}
            width={800}
            height={500}
            alt='Image'
            onClick={() => setExpandedImage(src)}
          />
        ))}
      </div>

      {expandedImage && (
        <div className={styles.expanded_image_container}>
          <div className={styles.expanded_image}>
            <Image
              src={expandedImage}
              alt='Expanded Image'
              width={1600}
              height={1000}
            />
            <IoIosCloseCircleOutline
              className={styles.close_button}
              onClick={() => setExpandedImage('')}
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
