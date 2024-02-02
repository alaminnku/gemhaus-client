'use client';

import Image from 'next/image';
import styles from './Stories.module.css';
import { useState } from 'react';
import { stories } from '@data/stories';

export default function OurStory() {
  const [selectedStory, setSelectedStory] = useState<string | null>(
    stories[0].title
  );

  return (
    <section className={styles.container}>
      {stories.map((story) => (
        <div
          className={`${styles.story} ${
            selectedStory === story.title && styles.selected_story
          }`}
        >
          <h2
            onClick={() =>
              setSelectedStory((prevState) =>
                prevState === story.title ? null : story.title
              )
            }
            className={
              story.title === 'Community Involvement'
                ? styles.community_title
                : ''
            }
          >
            {story.title}
          </h2>
          <div className={styles.content}>
            {story.content.map((el) => (
              <p>{el}</p>
            ))}
          </div>

          <div
            className={`${styles.image} ${
              selectedStory === story.title && styles.hide_image
            }`}
          >
            {story.image && (
              <Image
                src={story.image}
                width={400}
                height={400}
                alt='About GemHaus image'
              />
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
