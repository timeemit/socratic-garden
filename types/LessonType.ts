import { ConceptType } from './ConceptType';
import { MediaURL } from './Media';

export const LESSON_HEADER: "HEADER" = 'HEADER';
export const LESSON_MEDIA: "MEDIA" = 'MEDIA';
export const LESSON_TEXT: "TEXT" = 'TEXT';
export const LESSON_CONCEPT: "CONCEPT" = 'CONCEPT';
export const LESSON_PARAGRAPH: "PARAGRAPH" = 'PARAGRAPH';

type LessonHeaderType = {
  type: typeof LESSON_HEADER,
  content: string
};

export type LessonMediaType = {
  type: typeof LESSON_MEDIA,
  content: MediaURL
};

type LessonTextType = {
  type: typeof LESSON_TEXT,
  content: string
};

type LessonConceptType = {
  type: typeof LESSON_CONCEPT,
  content: ConceptType
};

type LessonParagraphType = {
  type: typeof LESSON_PARAGRAPH,
  content: Array<LessonParagraphContentsType>
};

export type LessonParagraphContentsType = LessonTextType | LessonConceptType;

export type LessonSectionType = LessonHeaderType | LessonMediaType | LessonParagraphType;

export type LessonType = {
  id: number,
  title: string,
  sections: Array<LessonSectionType>
};
