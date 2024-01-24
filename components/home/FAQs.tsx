'use client';

import styles from '@components/home/FAQs.module.css';
import { useState } from 'react';
import { faqs, initialFAQState } from '@data/faqs';
import { FAQState } from 'types';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

export default function FAQ() {
  const [faqState, setFAQState] = useState(initialFAQState);

  function handleFAQStateChange(id: string) {
    setFAQState((prevState) => {
      const updatedState: FAQState = {} as FAQState;
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
              {faqState[id].isOpen ? (
                <MdOutlineKeyboardArrowUp
                  onClick={() => handleFAQStateChange(id)}
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  onClick={() => handleFAQStateChange(id)}
                />
              )}
            </div>

            <p
              className={`${styles.answer} ${
                faqState[id].isOpen && styles.show_answer
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
