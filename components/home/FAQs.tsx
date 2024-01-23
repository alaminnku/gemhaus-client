'use client';

import styles from '@components/home/FAQs.module.css';
import { useState } from 'react';
import { faqs, initialFAQsState } from '@data/faqs';
import { FAQsState } from 'types';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

export default function FAQ() {
  const [faqsState, setFAQsState] = useState(initialFAQsState);

  function toggleFAQsState(id: string) {
    setFAQsState((prevState) => {
      const updatedState: FAQsState = {} as FAQsState;
      for (const prop in prevState) {
        updatedState[prop] = {
          isOpen: prop === id ? !prevState[prop].isOpen : false,
        };
      }
      return updatedState;
    });
  }

  return (
    <section className={styles.container}>
      <h2>
        Your Questions, <br />
        Answered
      </h2>

      <div className={styles.questions_and_answers}>
        {faqs.map(({ id, question, answer }) => (
          <div className={styles.question_and_answer} key={id}>
            <div className={styles.question}>
              <p>{question}</p>
              {faqsState[id].isOpen ? (
                <MdOutlineKeyboardArrowUp onClick={() => toggleFAQsState(id)} />
              ) : (
                <MdOutlineKeyboardArrowDown
                  onClick={() => toggleFAQsState(id)}
                />
              )}
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
      </div>
    </section>
  );
}
