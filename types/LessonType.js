// @flow
import type { ConceptType } from './ConceptType';
import type { MediaURL } from './Media';

export type LessonType = {|
  id: number,
  media: MediaURL,
  concept: ConceptType,
  title: string,
  text: string,
|};
