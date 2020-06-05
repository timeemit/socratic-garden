// @flow
import type { ConceptType } from '../types/ConceptType';

import { slug } from '../pages/_app';

export const CONCEPTS: Array<ConceptType> = [
  "Socratic Combat",
].map((text) => {
  return {slug: slug(text), text};
});

export function ConceptBySlug(slug: string): ?ConceptType {
  return CONCEPTS.find((concept) => concept.slug === slug) ?? null;
};

export function ConceptByText(text: string): ?ConceptType {
  return CONCEPTS.find((concept) => concept.text === text) ?? null;
};

export function CreateConceptByText(text: string): ConceptType {
  return {text, slug: slug(text)};
}

export function ConceptsByText(text: string): Array<ConceptType> {
  return CONCEPTS.filter((concept) => concept.text.toLowerCase().startsWith(text.toLowerCase()));
};
