// @flow

import type  { QuestionType } from '../components/QuestionView';
import { ChoiceIndices } from '../components/ChoiceButton';

const QUESTIONS: Array<QuestionType> = [
  {
    id: 0,
    text: "What is Socratic Combat?",
    choices: {
      [ChoiceIndices.first]: {text: "A pizza delivery company"},
      [ChoiceIndices.second]: {text: "An online consultancy"},
      [ChoiceIndices.third]: {text: "A free learning platform"},
    },
    correct_choice: ChoiceIndices.third,
  },
  {
    id: 1,
    text: "How does Socratic Combat improve itself?",
    choices: {
      [ChoiceIndices.first]: {text: "Oversight from educational institutions"},
      [ChoiceIndices.second]: {text: "Measuring impact on student performance"},
      [ChoiceIndices.third]: {text: "Regular exercise and a good diet"},
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
