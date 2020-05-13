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
    chosen: [],
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
    chosen: [],
  }
];

export default (id: number) => {
  const question = QUESTIONS[id];
  question.id = id;
  return question;
}
