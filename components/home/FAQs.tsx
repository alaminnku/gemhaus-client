'use client';

import styles from '@components/home/FAQs.module.css';
import { useState } from 'react';
import { faqs, initialFAQsState } from '@data/faqs';
import { FAQsState } from 'types';

export default function FAQ() {
  const [faqsState, setFAQsState] = useState(initialFAQsState);

  function toggleFAQsState(id: string) {
    setFAQsState((prevState) => {
      const map: FAQsState = {} as FAQsState;
      for (const prop in prevState) {
        map[prop] = { isOpen: false };
      }
      map[id].isOpen = !prevState[id].isOpen;
      return map;
    });
  }

  return (
    <section className={styles.container}>
      <span>FAQs</span>
      <h2>
        Your Questions, <br />
        Answered
      </h2>

      {faqs.map(({ id, question, answer }) => (
        <div className={styles.question_and_answer} key={id}>
          <div className={styles.question}>
            <p>{question}</p>
            <span onClick={() => toggleFAQsState(id)}>
              {faqsState[id].isOpen ? '-' : '+'}
            </span>
          </div>

          <p
            className={`${styles.answer} ${
              faqsState[id].isOpen && styles.show_answer
            }`}
          >
            {answer}
          </p>
        </div>
      ))}
    </section>
  );
}
