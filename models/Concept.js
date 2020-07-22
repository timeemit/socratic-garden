// @flow
import type { ConceptType } from '../types/ConceptType';

export const CONCEPTS: Array<ConceptType> = [
  {
    text: "Socratic Garden",
    definition: "An online textbook that rewards engaging instruction.",
    aliases: [],
  },
  {
    text: "Allele",
    definition: "An allele is a variant form of a given gene, meaning it is one of two or more versions of a known mutation at the same place on a chromosome",
    aliases: ["Alleles", "allele"]
  },
  {
    text: "Gene",
    definition: "A gene is a sequence of nucleotides in DNA or RNA that encodes the synthesis of a gene product, either RNA or protein",
    aliases: ["Genes"]
  },
  {
    text: "Genotype",
    definition: "A genotype is an organism’s complete set of heritable genes, or genes that can be passed down from parents to offspring.",
    aliases: []
  },
  {
    text: "Heterozygous",
    definition: "having two different alleles of a particular gene or genes",
    aliases: ["heterozygous"]
  },
  {
    text: "Homozygous",
    definition: "having two identical alleles of a particular gene or genes.",
    aliases: ["homozygous"]
  },
].map(({ text, definition, aliases }, id) => {
  return {id, text, definition, aliases, as: text};
});

export function ConceptByText(text: string): ConceptType {
  const concept = CONCEPTS.find((concept) => concept.text === text || concept.aliases.includes(text))
  if (concept == null) {
    return CreateConceptByText(text);
  } else {
    const copy = {...concept};
    copy.as = text;
    return copy;
  }
};

export function ConceptByID(id: number): ?ConceptType {
  return CONCEPTS.find((concept) => concept.id === id);
};

export function CreateConceptByText(text: string): ConceptType {
  return {id: -1, text, definition: "", aliases: [], as: text};
}

export function ConceptsByText(text: string): Array<ConceptType> {
  return CONCEPTS.filter((concept) => concept.text.toLowerCase().startsWith(text.toLowerCase()));
};
