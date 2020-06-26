// @flow
import type { ConceptType } from '../types/ConceptType';

export const CONCEPTS: Array<ConceptType> = [
  "Socratic Garden",
  "Allele",
].map((text, id) => {
  return {text, id};
});

export function ConceptByText(text: string): ?ConceptType {
  return CONCEPTS.find((concept) => concept.text === text) ?? null;
};

export function ConceptByID(id: number): ?ConceptType {
  return CONCEPTS.find((concept) => concept.id === id) ?? null;
};

export function CreateConceptByText(text: string): ConceptType {
  return {text, id: -1};
}

export function ConceptsByText(text: string): Array<ConceptType> {
  return CONCEPTS.filter((concept) => concept.text.toLowerCase().startsWith(text.toLowerCase()));
};
