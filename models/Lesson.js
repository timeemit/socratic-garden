// @flow

import type { ConceptType } from '../types/ConceptType';
import type  { LessonType } from '../types/LessonType';

import { slug } from '../pages/_app';
import { ChoiceIndices } from '../types/ChoiceTypes';
import { MediaTypes } from '../types/Media';
import { CONCEPTS } from './Concept';

const LESSONS: Array<LessonType> = [
  {
    id: 0,
    title: "A Free Learning Platform",
    concept: CONCEPTS[0],
    sections: [
      {
        subtitle: null,
        media: {
          url: "/logo.png",
          type: MediaTypes.IMAGE,
          caption: "Fancy Logo, huh?",
        },
        text: "Socratic Garden aims to algorthmically synthesize informative lessons and quizzes into a dynamic curriculum personalized for learners.  Why not give it a try?",
      },
      {
        subtitle: "Continuously Self-Improving",
        media: null,
        text: "As you assess yourself with quizzes alongside other learners, the platform improves itself continuously by identifying which resources are yielding the strongest student performance.",
      },
    ]
  },
  // {
  //   id: 2,
  //   title: "Empower Curiosity",
  //   text: "Socratic Garden puts you at the center of an educational journey, where the menus of lessons and quizzes are highlighted with algorithmically measured signals that help guide students towards their own criteria for success."
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

export function LessonsByConcept(concept: ConceptType): Array<LessonType> {
  return LESSONS.filter((lesson) => lesson.concept.text === concept.text);
}
