// @flow

import type  { LessonType } from '../components/LessonView';
import { ChoiceIndices } from '../components/ChoiceButton';

const LESSONS: Array<LessonType> = [
  {
    id: 0,
    title: "A Free Learning Platform",
    text: "Socratic Combat aims to algorthmically synthesize informative lessons and quizzes into a dynamic curriculum personalized for learners.  Why not give it a try?",
  },
  {
    id: 1,
    title: "Continuously Self-Improving",
    text: "As learners assess themselves with quizzes, the platform improves itself continuously by identifying which resources are yielding the strongest student performance.",
  }
];

export default (id: number) => {
  const lesson = LESSONS[id];
  lesson.id = id;
  return lesson;
}
