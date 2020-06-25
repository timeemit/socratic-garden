// @flow
import type { ConceptType } from './ConceptType';
import type { MediaURL } from './Media';

export type LessonSectionType = {|
  subtitle: ?string,
  media: ?MediaURL,
  text: string,
|};

export type LessonType = {|
  id: number,
  concept: ConceptType,
  title: string,
  sections: Array<LessonSectionType>,
|};
