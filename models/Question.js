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
    lesson_id: 2,
    text: "An archer she-elf with blue-black hair mates with a male-elf with heterozygous white hair, what are the possible outcomes for their offspring?",
    media: null,
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
  },
  {
    lesson_id: 2,
    text: "Bumble is (as his name suggests) not very coordinated, but he has stolen the heart of a nimble hobbit named Aideen. Aideen fell for bumble because his clumsiness reminds her of her father. What is the probability their child will also be clumsy?",
    media: null,
    choices: {
      [ChoiceIndices.first]: {
        text: "25%",
        response: "If Aideen's father was clumsy but she isn't, her genotype must be Nn.",
      },
      [ChoiceIndices.second]: {
        text: "50%",
        response: "That's right!",
      },
      [ChoiceIndices.third]: {
        text: "75%",
        response: "But if Bumble is clumsy, his genotype must be nn.",
      },
    },
    correct_choice: ChoiceIndices.second,
  },
  {
    lesson_id: 2,
    text: "Grack is heterozygous for his belligerent manner, he marries a mate who is also heterozygous. What is the probability of manners in their offspring?",
    media: null,
    choices: {
      [ChoiceIndices.first]: {
        text: "25%",
        response: "That's right!",
      },
      [ChoiceIndices.second]: {
        text: "50%",
        response: "Since Grack and his mate are both heterozygous (Bb), their offspring is equally likely to get either allele from both parents.",
      },
      [ChoiceIndices.third]: {
        text: "75%",
        response: "If belligerence occurs in the majority of the population, then good manners must be a recessive allele.",
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
