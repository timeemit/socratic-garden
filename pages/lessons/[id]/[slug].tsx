import { Context } from '../../../types/context';
import { LessonType } from '../../../types/LessonType';
import { QuestionType } from '../../../types/QuestionType';
import { Props as Params } from '../../../components/ChallengeView';

import React from 'react';
import PageWithNavigator from '../../../components/PageWithNavigator';
import { ChoiceIndices } from '../../../types/ChoiceTypes';
import { LessonFetch } from '../../../models/Lesson';
import ChallengeView from '../../../components/ChallengeView';

export async function getServerSideProps(context: Context): Promise<{
  props: Params
}> {
  const { id } = context.params;
  const lesson = LessonFetch(+id);
  return { props: {lesson} }
}

export default (params: Params) => {
  return (
    <PageWithNavigator title={params.lesson.title}>
      <main className="pure-u-1">
        <ChallengeView lesson={params.lesson} />
      </main>
    </PageWithNavigator>
  );
}
