// @flow

import type { CourseType } from '../types/CourseType';

export const COURSES: Array<CourseType> = [
  {
    title: "What is the Socratic Garden?",
    objective: "Learn how this online education platform can benefit both learners and teachers",
    lessons: [ 0 ],
  },
  {
    title: "Why your hair color is similar to your parents'",
    objective: "Learn how genes determine physical traits",
    lessons: [ 1, 2 ]
  },
].map((course, id) => {
  return {
    ...course,
    id,
  };
});