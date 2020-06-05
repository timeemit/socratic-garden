// @flow
import type { ConceptType } from './ConceptType';

export type LessonType = {|
  id: number,
  concept: ConceptType,
  title: string,
  text: string,
|};
