'use client';

import styles from '@components/home/FAQs.module.css';
import { useState } from 'react';
import { faqs } from '@data/faqs';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

export default function FAQ() {
  const [selectedFaqId, setSelectedFaqId] = useState<number | null>(null);

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
              {selectedFaqId === id ? (
                <MdOutlineKeyboardArrowUp
                  onClick={() =>
                    setSelectedFaqId((prevState) =>
                      prevState === id ? null : id
                    )
                  }
                />
              ) : (
                <MdOutlineKeyboardArrowDown
                  onClick={() =>
                    setSelectedFaqId((prevState) =>
                      prevState === id ? null : id
                    )
                  }
                />
              )}
            </div>

            {selectedFaqId === id && <p>{answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
