// @flow

import type  { QuestionType } from '../types/QuestionType';
import { ChoiceIndices } from '../types/ChoiceTypes';

const QUESTIONS: Array<QuestionType> = [
  {
    lesson_id: 0,
    text: "What is Socratic Garden?",
    media: null,
    choices: {
      [ChoiceIndices.first]: {
        text: "A martial arts video series",
        response: "No, the competition here is only of the mind",
      },
      [ChoiceIndices.second]: {
        text: "An e-commerce website",
        response: "No, you don't need to spend any money here",
      },
      [ChoiceIndices.third]: {
        text: "A free learning platform",
        response: "Yes, Socratic Garden is free for learners and instructors alike",
      },
    },
    correct_choice: ChoiceIndices.third,
  },
  {
    lesson_id: 1,
    text: "How does Socratic Garden improve itself?",
    media: null,
    choices: {
      [ChoiceIndices.first]: {
        text: "Oversight from educational institutions",
        response: "No, we're not interested in the beauracracy",
      },
      [ChoiceIndices.second]: {
        text: "Measuring impact on student performance",
        response: "Yes, we believe that this is most important quality of any educational resource",
      },
      [ChoiceIndices.third]: {
        text: "Venture capital funding",
        response: "No, this is simply a community-driven project",
      },
    },
    correct_choice: ChoiceIndices.second,
  }
];

export function QuestionByLessonID(lesson_id: number): QuestionType {
  const question = QUESTIONS.find((question) => question.lesson_id === lesson_id);
  if (question == undefined) {
    return QUESTIONS[0];
  }
  return question;
}

export function NavigationQuestion(lesson_id: number): QuestionType {
  const next = QuestionByLessonID(lesson_id);
  return {
    lesson_id: -1,
    text: "What next?",
    media: null,
    choices: {
      [ChoiceIndices.first]: {
        text: next.text,
        response: null,
      },
      /*
      [ChoiceIndices.first]: {
        text: "A new question for this lesson",
        response: null,
      },
      [ChoiceIndices.second]: {
        text: "Another lesson for the same concept",
        response: null,
      },
      [ChoiceIndices.third]: {
        text: "Find a new concept",
        response: null,
      }
      */
    },
    correct_choice: null,
  };
}
