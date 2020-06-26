// @flow

import type { ConceptType } from '../types/ConceptType';
import type  { LessonType } from '../types/LessonType';

import { slug } from '../pages/_app';
import { ChoiceIndices } from '../types/ChoiceTypes';
import { MediaTypes } from '../types/Media';
import { CONCEPTS } from './Concept';

const LESSONS: Array<LessonType> = [
  {
    id: 0,
    title: "A Free Learning Platform",
    concept: CONCEPTS[0],
    sections: [
      {
        subtitle: null,
        media: {
          url: "/logo.png",
          type: MediaTypes.IMAGE,
          caption: "Fancy Logo, huh?",
        },
        text: "Socratic Garden aims to algorthmically synthesize informative lessons and quizzes into a dynamic curriculum personalized for learners.  Why not give it a try?",
      },
      {
        subtitle: "Continuously Self-Improving",
        media: null,
        text: "As you assess yourself with quizzes alongside other learners, the platform improves itself continuously by identifying which resources are yielding the strongest student performance.",
      },
    ]
  },
  {
    id: 1,
    title: "What are alleles?",
    concept: CONCEPTS[1],
    sections: [
      {
        subtitle: null,
        media: null,
        text: "Genes often have different forms – slightly different nucleotide sequences – known as alleles. In some rabbits, an alternative form of the gene for fur color makes non-functional tyrosinase. A change in the sequence of As, Ts, Cs, and Gs changes the sequence of amino acids in the protein and alters or destroys its activity. This allele is recessive and can cause lack of pigment – resulting in an albino rabbit. Let's refer to the dominant gene for brown fur as B and the recessive gene for albinism as b.",
      },
      {
        subtitle: "Genotypes, Phenotypes, Alleles, Oh My!",
        media: {
          url: "/alleles/albinos.jpg",
          type: MediaTypes.IMAGE,
          caption: "If a rabbit receives two copies of the mutant allele for tyrosinase, it will lack pigment altogether – a condition known as albinism",
        },
        text: "Mendel showed that humans and rabbits have two copies of each gene, or 'heritable unit' – one from each of our parents. The two alleles we receive make up our genotype. For simple Mendelian traits, our genotype determines our physical appearance, or phenotype, for that trait. A rabbit having two copies of the mutant, recessive gene cannot make tyrosinase – or melanin; its genotype is bb, and its phenotype is albino. A rabbit having either one or two copies of the gene for tyrosinase makes melanin; its genotype is either Bb or BB, and in either case, because B is dominant, its phenotype is brown.",
      },
      {
        subtitle: "Oh and Zygotes.  Don't forget about zygotes...",
        media: {
          url: "/alleles/colored.jpg",
          type: MediaTypes.IMAGE,
          caption: "Two different phenotypes.  Which one can you be certain is homozygous?",
        },
        text: "Brown rabbits which have different alleles (genotype Bb) are heterozygous, and brown rabbits with identical alleles (BB) are homozygous. Albino rabbits with identical recessive alleles (bb) are also homozygous.",
      },
    ]
 },
];

export function LessonFetch(id: number) {
  const lesson = LESSONS[id];
  lesson.id = id;
  return lesson;
}

export function NextLesson(id: number) {
  const next_id = (id + 1) % LESSONS.length; // lol
  return LessonFetch(next_id);
}

export function LessonsByConcept(concept: ConceptType): Array<LessonType> {
  return LESSONS.filter((lesson) => lesson.concept.text === concept.text);
}
