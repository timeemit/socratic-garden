import { LessonType } from './LessonType';

export type CourseType = {
  title: string,
  objective: string,
  lesson_ids: Array<number>
};
