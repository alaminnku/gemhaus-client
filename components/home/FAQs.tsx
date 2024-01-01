'use client';

import styles from '@components/home/FAQs.module.css';
import { useState } from 'react';
import { faqs } from '@data/faqs';
import { FAQStatus } from 'types';

const initialFAQStatus: FAQStatus = {
  question1: false,
  question2: false,
  question3: false,
  question4: false,
  question5: false,
};

export default function FAQ() {
  const [faqStatus, setFAQStatus] = useState(initialFAQStatus);

  function toggleFAQStatus(answer: keyof FAQStatus) {
    setFAQStatus((prevState) => {
      const map: FAQStatus = {} as FAQStatus;
      for (const prop in prevState) {
        map[prop as keyof FAQStatus] = false;
      }
      map[answer] = !prevState[answer];
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
            <span onClick={() => toggleFAQStatus(id)}>
              {faqStatus[id] ? '-' : '+'}
            </span>
          </div>

          <p
            className={`${styles.answer} ${
              faqStatus[id] && styles.show_answer
            }`}
          >
            {answer}
          </p>
        </div>
      ))}
    </section>
  );
}
