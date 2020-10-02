// @format
"use strict";
var _a, _b, _c, _d, _e;
exports.__esModule = true;
exports.QuestionByLessonID = void 0;
var ChoiceTypes_1 = require("../types/ChoiceTypes");
var QUESTIONS = [
  {
    lesson_id: 0,
    text: "What is the Socratic Garden?",
    media: null,
    choices:
      ((_a = {}),
      (_a[ChoiceTypes_1.ChoiceIndices.first] = {
        text: "A search engine",
        response: "No, we want you to learn how to answer your own answers",
      }),
      (_a[ChoiceTypes_1.ChoiceIndices.second] = {
        text: "An e-commerce website",
        response: "No, you don't need to spend any money here",
      }),
      (_a[ChoiceTypes_1.ChoiceIndices.third] = {
        text: "A free learning platform",
        response:
          "Yes, Socratic Garden is free for learners and instructors alike",
      }),
      _a),
    correct_choice: ChoiceTypes_1.ChoiceIndices.third,
  },
  {
    lesson_id: 1,
    text: "So, what is an allele?",
    media: null,
    choices:
      ((_b = {}),
      (_b[ChoiceTypes_1.ChoiceIndices.first] = {
        text: "A fun way of saying 'all eels'",
        response: "No, but that's a fun way to pronounce the word!",
      }),
      (_b[ChoiceTypes_1.ChoiceIndices.second] = {
        text: "One of several forms a gene can take after mutation",
        response: "That's right!",
      }),
      (_b[ChoiceTypes_1.ChoiceIndices.third] = {
        text: "The key trait to albinoism",
        response:
          "No, alleles combine to express many different genetic traits",
      }),
      _b),
    correct_choice: ChoiceTypes_1.ChoiceIndices.second,
  },
  {
    lesson_id: 2,
    text:
      "An archer she-elf with blue-black hair mates with a male-elf with heterozygous white hair, what are the possible outcomes for their offspring?",
    media: null,
    choices:
      ((_c = {}),
      (_c[ChoiceTypes_1.ChoiceIndices.first] = {
        text: "Blue-black hair and white hair",
        response: "That's right!",
      }),
      (_c[ChoiceTypes_1.ChoiceIndices.second] = {
        text: "Only white hair is possible",
        response:
          "Since white hair is heterozygous, it comprises of both the dominant and recessive genes",
      }),
      (_c[ChoiceTypes_1.ChoiceIndices.third] = {
        text: "Yellowish-white hair and white hair",
        response:
          "Yellowish-white hair is the genotype consisting of two dominant alles, but blue-black hair is recessive",
      }),
      _c),
    correct_choice: ChoiceTypes_1.ChoiceIndices.first,
  },
  {
    lesson_id: 2,
    text:
      "Bumble is (as his name suggests) not very coordinated, but he has stolen the heart of a nimble hobbit named Aideen. Aideen fell for bumble because his clumsiness reminds her of her father. What is the probability their child will also be clumsy?",
    media: null,
    choices:
      ((_d = {}),
      (_d[ChoiceTypes_1.ChoiceIndices.first] = {
        text: "25%",
        response:
          "If Aideen's father was clumsy but she isn't, her genotype must be Nn.",
      }),
      (_d[ChoiceTypes_1.ChoiceIndices.second] = {
        text: "50%",
        response: "That's right!",
      }),
      (_d[ChoiceTypes_1.ChoiceIndices.third] = {
        text: "75%",
        response: "But if Bumble is clumsy, his genotype must be nn.",
      }),
      _d),
    correct_choice: ChoiceTypes_1.ChoiceIndices.second,
  },
  {
    lesson_id: 2,
    text:
      "Grack is heterozygous for his belligerent manner, he marries a mate who is also heterozygous. What is the probability of manners in their offspring?",
    media: null,
    choices:
      ((_e = {}),
      (_e[ChoiceTypes_1.ChoiceIndices.first] = {
        text: "25%",
        response: "That's right!",
      }),
      (_e[ChoiceTypes_1.ChoiceIndices.second] = {
        text: "50%",
        response:
          "Since Grack and his mate are both heterozygous (Bb), their offspring is equally likely to get either allele from both parents.",
      }),
      (_e[ChoiceTypes_1.ChoiceIndices.third] = {
        text: "75%",
        response:
          "If belligerence occurs in the majority of the population, then good manners must be a recessive allele.",
      }),
      _e),
    correct_choice: ChoiceTypes_1.ChoiceIndices.first,
  },
].map(function (_a, id) {
  var lesson_id = _a.lesson_id,
    text = _a.text,
    media = _a.media,
    choices = _a.choices,
    correct_choice = _a.correct_choice;
  return {
    id: id,
    lesson_id: lesson_id,
    text: text,
    media: media,
    choices: choices,
    correct_choice: correct_choice,
  };
});
function QuestionByLessonID(lesson_id, completed) {
  return QUESTIONS.find(function (question) {
    return (
      question.lesson_id === lesson_id &&
      (completed == null || !completed.includes(question.id))
    );
  });
}
exports.QuestionByLessonID = QuestionByLessonID;
