// @flow
import type { Choice, ChoiceIndex } from './ChoiceTypes';

export type QuestionType = {|
  lesson_id: number,
  text: string,
  choices: {[ChoiceIndex]: Choice},
  correct_choice: ?ChoiceIndex,
|};
