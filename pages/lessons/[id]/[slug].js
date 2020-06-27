// @flow
import type { Context } from '../../../types/context';
import type { LessonType } from '../../../types/LessonType';
import type { QuestionType } from '../../../types/QuestionType';
import type { Props as Params } from '../../../components/ChallengeView';

import React from 'react';
import Page from '../../../components/PageWithNavigator';
import { ChoiceIndices } from '../../../types/ChoiceTypes';
import { LessonFetch } from '../../../models/Lesson';
import ChallengeView from '../../../components/ChallengeView';

export async function getServerSideProps(context: Context): Promise<{|props: Params|}> {
  const { id } = context.params;
  const lesson = LessonFetch(+id);
  return { props: {lesson} }
}

export default (params: Params) => {
  return (
    <Page title={params.lesson.title}>
      <main className="pure-u-1">
        <ChallengeView lesson={params.lesson} />
      </main>
    </Page>
  );
}
