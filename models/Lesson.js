// @flow

import type { TopicType } from '../types/TopicType';
import type  { LessonType } from '../types/LessonType';
import { ChoiceIndices } from '../types/ChoiceTypes';

const LESSONS: Array<LessonType> = [
  {
    id: 0,
    topics: ["Socratic Combat"],
    title: "A Free Learning Platform",
    text: "Socratic Combat aims to algorthmically synthesize informative lessons and quizzes into a dynamic curriculum personalized for learners.  Why not give it a try?",
  },
  {
    id: 1,
    topics: ["Socratic Combat"],
    title: "Continuously Self-Improving",
    text: "As you assess yourself with quizzes alongside other learners, the platform improves itself continuously by identifying which resources are yielding the strongest student performance.",
  },
  // {
  //   id: 2,
  //   title: "Empower Curiosity",
  //   text: "Socratic Combat puts you at the center of an educational journey, where the menus of lessons and quizzes are highlighted with algorithmically measured signals that help guide students towards their own criteria for success."
  // },
];

export function LessonFetch(id: number) {
  const lesson = LESSONS[id];
  lesson.id = id;
  return lesson;
}

export function NextLesson(id: number) {
  const next_id = (id + 1) % LESSONS.length; // lol
  return LessonFetch(next_id);
}

export function LessonsByTopic(topic: TopicType): Array<LessonType> {
  return LESSONS.filter((lesson) => lesson.topics.includes(topic.text));
}
