// @flow

import type { ConceptType } from '../types/ConceptType';
import type  { LessonType } from '../types/LessonType';
import { LESSON_PARAGRAPH, LESSON_HEADER, LESSON_MEDIA, LESSON_TEXT, LESSON_CONCEPT } from '../types/LessonType';
import { slug } from '../pages/_app';
import { ChoiceIndices } from '../types/ChoiceTypes';
import { MediaTypes } from '../types/Media';
import { CONCEPTS, ConceptByText } from './Concept';

const LESSONS: Array<LessonType> = [
  {
    title: "Online Learning Powered by Merit",
    sections: [
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
          content: "The Socratic Garden is a socio-economic experiment to develop an online system that rewards contributors for helping people learn.",
        }]
      },
      {
        type: LESSON_MEDIA,
        content: {
          url: "/logo.png",
          type: MediaTypes.IMAGE,
          caption: "brain + lightbulb = colorful logo",
        },
      },
      {
        type: LESSON_HEADER,
        content: "Where Learners Work Towards Jobs, not Pedagogy",
      },
      {
        type: LESSON_MEDIA,
        content: {
          url: "/socratic-garden/wonder.png",
          type: MediaTypes.IMAGE,
          caption: "Why Not?",
        },
      },
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
          content: "What's more valuable: A certificate of accomplishment or a paying job?  Learners on the Socratic Garden will receive recommendations for employment opportunities relevant to the studies they're interested in.",
        }],
      },
      {
        type: LESSON_HEADER,
        content: "Where Instructors are Rewarded for Outcomes, not Signups",
      },
      {
        type: LESSON_MEDIA,
        content: {
          url: "/socratic-garden/money.png",
          type: MediaTypes.IMAGE,
          caption: "Better Lessons Earn More",
        },
      },
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
          content: "Unlike other online platforms that pay you only for traffic volume, contributions to the Socratic Garden are measured by quality, not quantity.  Contributors here can earn for the engagement of their lessons: the more questions learners answer correctly after seeing a lesson, the more that lesson is worth.",
        }]
      },
      {
        type: LESSON_HEADER,
        content: "Where Employers Hire Hardworking Talent, not Resumes",
      },
      {
        type: LESSON_MEDIA,
        content: {
          url: "/socratic-garden/chart.png",
          type: MediaTypes.IMAGE,
          caption: "Advertisements for Jobs",
        },
      },
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
          content: "Great students make a great workforce.  Job applications coming from the Socratic Garden will be augmented with anlaytics we've collected around student performance to enhance hiring signal.",
        }],
      },
    ]
  },
  {
    title: "What are alleles?",
    sections: [
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
            content: "Genes often have different forms – slightly different nucleotide sequences – known as ",
        }, {
          type: LESSON_CONCEPT,
          content: ConceptByText("Alleles"),
        }, {
          type: LESSON_TEXT,
          content: ".  In some rabbits, an alternative form of the ",
        }, {
          type: LESSON_CONCEPT,
          content: ConceptByText("Gene"),
        }, {
          type: LESSON_TEXT,
            content: " for fur color makes non-functional tyrosinase. A change in the sequence of As, Ts, Cs, and Gs changes the sequence of amino acids in the protein and alters or destroys its activity. This allele is recessive and can cause lack of pigment – resulting in an albino rabbit. Let's refer to the dominant gene for brown fur as B and the recessive gene for albinism as b.",
        }]
      },
      {
        type: LESSON_HEADER,
        content: "Genotypes, Phenotypes, Alleles, Oh My!",
      },
      {
        type: LESSON_MEDIA,
        content: {
          url: "/alleles/albinos.jpg",
          type: MediaTypes.IMAGE,
          caption: "If a rabbit receives two copies of the mutant allele for tyrosinase, it will lack pigment altogether – a condition known as albinism",
        },
      },
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
          content: "Mendel showed that humans and rabbits have two copies of each gene, or 'heritable unit' – one from each of our parents. The two alleles we receive make up our ",
        },{
          type: LESSON_CONCEPT,
          content: ConceptByText("Genotype"),
        },{
          type: LESSON_TEXT,
          content: ". For simple Mendelian traits, our genotype determines our physical appearance, or phenotype, for that trait. A rabbit having two copies of the mutant, recessive gene cannot make tyrosinase – or melanin; its genotype is bb, and its phenotype is albino. A rabbit having either one or two copies of the gene for tyrosinase makes melanin; its genotype is either Bb or BB, and in either case, because B is dominant, its phenotype is brown.",
        }],
      },
      {
        type: LESSON_HEADER,
        content: "Oh and Zygotes.  Don't forget about zygotes...",
      },
      {
        type: LESSON_MEDIA,
        content: {
          url: "/alleles/colored.jpg",
          type: MediaTypes.IMAGE,
          caption: "Two different phenotypes.  Which one can you be certain is homozygous?",
        },
      },
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
          content: "Brown rabbits which have different alleles (genotype Bb) are "
        },{
          type: LESSON_CONCEPT,
          content: ConceptByText("Heterozygous"),
        },{
          type: LESSON_TEXT,
          content: ", and brown rabbits with identical alleles (BB) are homozygous. Albino rabbits with identical recessive alleles (bb) are ",
        },{
          type: LESSON_CONCEPT,
          content: ConceptByText("Homozygous"),
        },{
          type: LESSON_TEXT,
          content: ".",
        }]
      },
    ]
  },
  {
    title: "Vocabulary and Punnett Practice: Lord of the Genes",
    sections: [
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
          content: "Below are three fictitious races of humanoid creatures: elves, hobbits, and orcs.  For each question, read the back story carefully to answer the questions.",
        }]
      },
      {
        type: LESSON_HEADER,
        content: "Elves",
      },
      {
        type: LESSON_MEDIA,
        content: {
          url: "/alleles/elf.png",
          type: MediaTypes.IMAGE,
          caption: "Elves are elegant creatures, tall and thin yet very strong in body and mind",
        },
      },
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
          content: "Most elves have a yellowish-white hair but a recessive ",
        },{
          type: LESSON_CONCEPT,
          content: ConceptByText("allele"),
        },{
          type: LESSON_TEXT,
          content: " exists, expressing as bluish-black. The majority of elves are also very tall, yet a few among them remain short like the child elves. Elves also have amazing eyesight, but blind elves are known to exist, owing to a rare recessive trait. And lastly, the elvish race of course is identified by their pointy ears, most have modestly pointed ears, but ",
        },{
          type: LESSON_CONCEPT,
          content: ConceptByText("homozygous"),
        },{
          type: LESSON_TEXT,
          content: " recessive individuals have extra long tops of ears. [H] Hair: [T] Tall-stature: [F] Far-sight: [E] Pointy Ears:",
        }]
      },
      {
        type: LESSON_HEADER,
        content: "Hobbits",
      },
      {
        type: LESSON_MEDIA,
        content: {
          url: "/alleles/hobbit.png",
          type: MediaTypes.IMAGE,
          caption: "Hobbits are also known in middle earth as halflings, due to their short stature, even the older hobbits are no taller than children.",
        },
      },
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
          content: "Most hobbits have curly hair but a mutation has been seen recently that codes for straight hair! The majority of hobbits have large and hairy tops to their feet, but there is a genetic condition that codes for baldness of the foot with growing old, thankfully it is a recessive trait. Lastly, although hobbits are known to be nimble and quick on their feet, a recessive ",
        }, {
          type: LESSON_CONCEPT,
          content: ConceptByText("allele"),
        },{
          type: LESSON_TEXT,
          content: " exists that makes them much more clumsy. [H] Short-stature: [R] CuRly hair : [B] NOT bald feet: [N] Nimble:",
        }],
      },
      {
        type: LESSON_HEADER,
        content: "Orcs",
      },
      {
        type: LESSON_MEDIA,
        content: {
          url: "/alleles/orc.png",
          type: MediaTypes.IMAGE,
          caption: "Orcs are mostly vile and nasty beings.",
        },
      },
      {
        type: LESSON_PARAGRAPH,
        content: [{
          type: LESSON_TEXT,
          content: "There is a small subset of orcs who are well mannered and eloquent, far from their more regularly seen belligerent trait. Most orcs have long canine teeth (both upper and lower) that stick out of their mouths. This is the dominant trait, however a recessive ",
        }, {
          type: LESSON_CONCEPT,
          content: ConceptByText("allele"),
        },{
          type: LESSON_TEXT,
          content: " expresses as only having lower canines grow long enough to stick out of the mouth. You wouldn’t know it but orcs can have beautiful blue eyes--a rare trait to the more dominant yellow eyes. Orcs also have pointed ears, like the elves, it is a dominant trait over the rounded tip ears which are recessive. You don’t see female orcs so wizards suspect that there is little outward differences between female and male orcs. [B] belligerent: [T] canine teeth:[Y] yellow eyes: [E] pointy ears:",
        }]
      },
    ]
  }
].map(({title, concept, sections}, id) => {
  return {
    id,
    title,
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
  return LESSONS.filter((lesson) => {
    return LessonConceptIDs(lesson).includes(concept.id);
  });
}

export function LessonConceptIDs(lesson: LessonType): Array<number> {
  const concept_ids = lesson.sections.map(section => {
    if (section.type === LESSON_PARAGRAPH) {
      return section.content.map<?number>(span => {
        if (span.type === LESSON_CONCEPT) {
          return span.content.id;
        }
      }).filter(id => id != null);
    }
    return [];
  });
  // Unique Values
  // $FlowFixMe
  return Array.from(new Set(concept_ids.flat()));
}
