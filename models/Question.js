// @flow

import type  { QuestionType } from '../types/QuestionType';
import { MediaTypes } from '../types/Media';
import { ChoiceIndices } from '../types/ChoiceTypes';

const QUESTIONS: Array<QuestionType> = [
  {
    lesson_id: 0,
    text: "What is Socratic Garden?",
    media: null,
    choices: {
      [ChoiceIndices.first]: {
        text: "A search engine",
        response: "No, we want you to learn how to answer your own answers",
      },
      [ChoiceIndices.second]: {
        text: "An e-commerce website",
        response: "No, you don't need to spend any money here",
      },
      [ChoiceIndices.third]: {
        text: "A free learning platform",
        response: "Yes, Socratic Garden is free for learners and instructors alike",
      },
    },
    correct_choice: ChoiceIndices.third,
  },
  {
    lesson_id: 1,
    text: "So, what is an allele?",
    media: null,
    choices: {
      [ChoiceIndices.first]: {
        text: "A fun way of saying 'all eels'",
        response: "No, but that's a fun way to pronounce the word!",
      },
      [ChoiceIndices.second]: {
        text: "One of several forms a gene can take after mutation",
        response: "That's right!",
      },
      [ChoiceIndices.third]: {
        text: "The key trait to albinoism",
        response: "No, alleles combine to express many different genetic traits",
      },
    },
    correct_choice: ChoiceIndices.second,
  },
  {
    lesson_id: 1,
    text: "An archer she-elf with blue-black hair mates with a male-elf with heterozygous white hair, what are the possible outcomes for their offspring?",
    media: {
      url: "/alleles/elf.png",
      type: MediaTypes.IMAGE,
      caption: "Elves are elegant creatures, tall and thin yet very strong in body and mind. Most elves have a yellowish-white hair but a recessive allele exists, expressing as bluish-black. The majority of elves are also very tall, yet a few among them remain short like the child elves. Elves also have amazing eyesight, but blind elves are known to exist, owing to a rare recessive trait. And lastly, the elvish race of course is identified by their pointy ears, most have modestly pointed ears, but homozygous recessive individuals have extra long tops of ears.  [H] Hair: [T] Tall-stature: [F] Far-sight: [E] Pointy Ears:",
    },
    choices: {
      [ChoiceIndices.first]: {
        text: "Blue-black hair and white hair",
        response: "That's right!",
      },
      [ChoiceIndices.second]: {
        text: "Only white hair is possible",
        response: "Since white hair is heterozygous, it comprises of both the dominant and recessive genes",
      },
      [ChoiceIndices.third]: {
        text: "Yellowish-white hair and white hair",
        response: "Yellowish-white hair is the genotype consisting of two dominant alles, but blue-black hair is recessive",
      },
    },
    correct_choice: ChoiceIndices.first,
  }
].map(({lesson_id, text, media, choices, correct_choice}, id) => {
  return {
    id,
    lesson_id,
    text,
    media,
    choices,
    correct_choice,
  };
});

export function QuestionByLessonID(lesson_id?: number, completed?: Array<number>): ?QuestionType {
  return QUESTIONS.find((question) => {
    return question.lesson_id === lesson_id && (completed == null || !completed.includes(question.id))
  });
}
