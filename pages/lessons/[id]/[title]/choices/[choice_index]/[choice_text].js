// @flow
import type { Context } from '../../../../../../types/context';
import type  { LessonType } from '../../../../../../components/LessonView';
import type  { QuestionType } from '../../../../../../components/QuestionView';

import React from 'react';
import Page from '../../../../../../components/Page';
import { ChoiceIndices } from '../../../../../../components/ChoiceButton';
import LessonView from '../../../../../../components/LessonView';
import QuestionView from '../../../../../../components/QuestionView';
import LessonFetch from '../../../../../../models/Lesson';
import QuestionFetch from '../../../../../../models/Question';

type Params = {|
  lesson: LessonType,
  question: QuestionType,
|};

export async function getServerSideProps(context: Context): Promise<{|props: Params|}> {
  const { id, choice_index } = context.params;  // Ignore title, choice_text params
  const lesson = LessonFetch(+id);
  const question = QuestionFetch(+id);
  question.chosen.push(choice_index);
  return { props: {lesson, question} }
}

export default (params: Params) => {
  return (
    <Page title={params.lesson.title}>
      <div className="pure-u-1 centered-text">
        <LessonView lesson={params.lesson} />
      </div>
      <div className="pure-u-1 centered-text">
        <QuestionView question={params.question} />
      </div>
    </Page>
  );
}
