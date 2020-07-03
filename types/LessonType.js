// @flow
import type { ConceptType } from './ConceptType';
import type { MediaURL } from './Media';

export const LESSON_HEADER: 'HEADER' = 'HEADER';
export const LESSON_MEDIA: 'MEDIA' = 'MEDIA';
export const LESSON_TEXT: 'TEXT' = 'TEXT';

type LessonHeaderType = {|
  type: typeof LESSON_HEADER,
  content: string,
|};

type LessonMediaType = {|
  type: typeof LESSON_MEDIA,
  content: MediaURL,
|};

type LessonTextType = {|
  type: typeof LESSON_TEXT,
  content: string,
|};

export type LessonSectionType = LessonHeaderType | LessonMediaType | LessonTextType;

export type LessonType = {|
  id: number,
  concept: ConceptType,
  title: string,
  sections: Array<LessonSectionType>,
|};
