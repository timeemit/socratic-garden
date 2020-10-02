// @format
import { Choice, ChoiceIndex } from "./ChoiceTypes";
import { MediaURL } from "./Media";

export type QuestionType = {
  id: number;
  lesson_id: number;
  media: MediaURL | null;
  text: string;
  choices: {
    [K in ChoiceIndex]: Choice;
  };
  correct_choice: ChoiceIndex | null;
};
