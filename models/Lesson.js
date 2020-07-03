// @flow

import type { ConceptType } from '../types/ConceptType';
import type  { LessonType } from '../types/LessonType';

import { slug } from '../pages/_app';
import { ChoiceIndices } from '../types/ChoiceTypes';
import { MediaTypes } from '../types/Media';
import { CONCEPTS } from './Concept';

const LESSONS: Array<LessonType> = [
  {
    title: "What is the Socratic Garden?",
    concept: CONCEPTS[0],
    sections: [
      {
        subtitle: null,
        media: {
          url: "/logo.png",
          type: MediaTypes.IMAGE,
          caption: "brain + lightbulb = logo",
        },
        text: "The Socratic Garden is a socio-economic experiment to develop an online system that rewards contributors for helping people learn.",
      },
      {
        subtitle: "Can free, high-quality, massively available learning material be a sustainable enterprise?",
        media: {
          url: "/socratic-garden/wonder.png",
          type: MediaTypes.IMAGE,
          caption: "Why Not?",
        },
        text: "It's a simple question, really.  More than a billion people spend the majority of their day at a school, costing either the student's family or government.",
      },
      {
        subtitle: "Great lessons are valuable!  Contributors here are paid accordingly.",
        media: {
          url: "/socratic-garden/money.png",
          type: MediaTypes.IMAGE,
          caption: "Better Lessons Earn More",
        },
        text: "Contributors earn money for the engagement of their lessons: the more questions learners answer correctly after seeing a lesson, the more that lesson is worth.  Unlike other online platforms that pay you only for traffic volume, contributions to the Socratic Garden are measured by quality, not quantity.",
      },
      {
        subtitle: "If the Socratic Garden is free, how does it cover costs?",
        media: {
          url: "/socratic-garden/chart.png",
          type: MediaTypes.IMAGE,
          caption: "Advertisements for Jobs",
        },
        text: "With enough traffic, delivering advertisements for jobs relevant to lessons learners are viewing should generate revenue that can then be redirected to rewarding contributors appropriately.",
      },
    ]
  },
  {
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
  {
    title: "Vocabulary and Punnett Practice: Lord of the Genes",
    concept: CONCEPTS[1],
    sections: [
      {
        subtitle: null,
        media: null,
        text: "Below are three fictitious races of humanoid creatures: elves, hobbits, and orcs.  For each question, read the back story carefully to answer the questions.",
      },
      {
        subtitle: "Elves",
        media: {
          url: "/alleles/elf.png",
          type: MediaTypes.IMAGE,
          caption: "Elves are elegant creatures, tall and thin yet very strong in body and mind",
        },
        text: "Most elves have a yellowish-white hair but a recessive allele exists, expressing as bluish-black. The majority of elves are also very tall, yet a few among them remain short like the child elves. Elves also have amazing eyesight, but blind elves are known to exist, owing to a rare recessive trait. And lastly, the elvish race of course is identified by their pointy ears, most have modestly pointed ears, but homozygous recessive individuals have extra long tops of ears. [H] Hair: [T] Tall-stature: [F] Far-sight: [E] Pointy Ears:",
      },
      {
        subtitle: "Hobbits",
        media: {
          url: "/alleles/hobbit.png",
          type: MediaTypes.IMAGE,
          caption: "Hobbits are also known in middle earth as halflings, due to their short stature, even the older hobbits are no taller than children.",
        },
        text: "Most hobbits have curly hair but a mutation has been seen recently that codes for straight hair! The majority of hobbits have large and hairy tops to their feet, but there is a genetic condition that codes for baldness of the foot with growing old, thankfully it is a recessive trait. Lastly, although hobbits are known to be nimble and quick on their feet, a recessive allele exists that makes them much more clumsy. [H] Short-stature: [R] CuRly hair : [B] NOT bald feet: [N] Nimble:",
      },
      {
        subtitle: "Orcs",
        media: {
          url: "/alleles/orc.png",
          type: MediaTypes.IMAGE,
          caption: "Orcs are mostly vile and nasty beings.",
        },
        text: "There is a small subset of orcs who are well mannered and eloquent, far from their more regularly seen belligerent trait. Most orcs have long canine teeth (both upper and lower) that stick out of their mouths. This is the dominant trait, however a recessive allele expresses as only having lower canines grow long enough to stick out of the mouth. You wouldn’t know it but orcs can have beautiful blue eyes but it is a rare trait to the more dominant yellow eyes. Orcs also have pointed ears, like the elves, it is a dominant trait over the rounded tip ears which are recessive. You don’t see female orcs so wizards suspect that there is little outward differences between female and male orcs. [B] belligerent: [T] canine teeth:[Y] yellow eyes: [E] pointy ears:",
      },
    ]
  }
].map(({title, concept, sections}, id) => {
  return {
    id,
    title,
    concept,
    sections,
  };
});

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
