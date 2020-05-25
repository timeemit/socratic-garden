// @flow

import type  { QuestionType } from '../components/QuestionView';
import { ChoiceIndices } from '../components/ChoiceButton';

const QUESTIONS: Array<QuestionType> = [
  {
    id: 0,
    text: "What is Socratic Combat?",
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
        response: "Yes, Socratic Combat is free for learners and instructors alike",
      },
    },
    correct_choice: ChoiceIndices.third,
  },
  {
    id: 1,
    text: "How does Socratic Combat improve itself?",
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

export function QuestionFetch(id: number) {
  const question = QUESTIONS[id];
  return question;
}

export function NextQuestion(id: number) {
  const question = QUESTIONS[(id + 1) % QUESTIONS.length]; // lol
  return question;
}