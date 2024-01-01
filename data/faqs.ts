import { FAQStatus } from 'types';

type FAQ = {
  id: keyof FAQStatus;
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    id: 'question1',
    question: 'Who is GemHaus?',
    answer:
      'Q1: In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    id: 'question2',
    question: 'What is GemHaus management?',
    answer:
      'Q2: In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },

  {
    id: 'question3',
    question: 'How does GemHaus help you?',
    answer:
      'Q4: In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
  {
    id: 'question4',
    question: 'Want to be a GemHaus agent?',
    answer:
      'Q4: In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available',
  },
  {
    id: 'question5',
    question: 'Why you choose GemHaus?',
    answer:
      'Q5: In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
  },
];
