// @flow
import type { Choice, ChoiceIndex } from './ChoiceTypes';
import type { MediaURL } from './Media';

export type QuestionType = {|
  lesson_id: number,
  media: ?MediaURL,
  text: string,
  choices: {[ChoiceIndex]: Choice},
  correct_choice: ?ChoiceIndex,
|};
