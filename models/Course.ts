
import { CourseType } from '../types/CourseType';

export const COURSES: Array<CourseType> = [
  {
    title: "What is the Socratic Garden?",
    objective: "Learn how this online education platform can benefit both learners and teachers",
    lesson_ids: [ 0 ],
  },
  {
    title: "Why is your hair color is similar to your parents'?",
    objective: "Learn how genes determine physical traits",
    lesson_ids: [ 1, 2 ]
  },
].map((course, id) => {
  return {
    ...course,
    id,
  };
});
