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
    text: "So, what is an allele?",
    media: {
      url: "/alleles/elf.png",
      type: MediaTypes.IMAGE,
      caption: "An archer she-elf with blue-black hair mates with a male-elf with heterozygous white hair, what are the possible outcomes for their offspring?",
    },
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
  }
];

export function QuestionByLessonID(lesson_id: number): QuestionType {
  const question = QUESTIONS.find((question) => question.lesson_id === lesson_id);
  if (question == undefined) {
    return QUESTIONS[0];
  }
  return question;
}

export function NavigationQuestion(lesson_id: number): QuestionType {
  const next = QuestionByLessonID(lesson_id);
  return {
    lesson_id: -1,
    text: "What next?",
    media: null,
    choices: {
      [ChoiceIndices.first]: {
        text: next.text,
        response: null,
      },
      /*
      [ChoiceIndices.first]: {
        text: "A new question for this lesson",
        response: null,
      },
      [ChoiceIndices.second]: {
        text: "Another lesson for the same concept",
        response: null,
      },
      [ChoiceIndices.third]: {
        text: "Find a new concept",
        response: null,
      }
      */
    },
    correct_choice: null,
  };
}
