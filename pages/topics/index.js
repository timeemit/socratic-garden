// @flow
import type { Context } from '../../types/context';
import type { QuestionType } from '../../types/QuestionType';
import type { LessonType } from '../../types/LessonType';
import type { TopicType } from '../../types/TopicType';
import React, {type Node} from 'react';
import Page from '../../components/PageWithNavigator';
import TopicLink from '../../components/TopicLink';
import { slug as slugger} from '../../pages/_app';
import { TOPICS } from '../../models/Topic';
import { LessonsByTopic } from '../../models/Lesson';
import { QuestionByLessonID } from '../../models/Question';
import Link from 'next/link';
import Page404 from '../404';

type Params = {|
  topics: Array<TopicType>,
|};

export async function getServerSideProps(context: Context): Promise<{|props: Params|}> {
  return { props: {topics: TOPICS} };
}

export default class TopicsPage extends React.Component<Params> {
  render() {
    return (
      <Page title="Topics">
        <h1 className="pure-u-1 header">Topics</h1>
        {this.renderTopics()}
      </Page>
    );
  }

  renderTopics(): Node {
    return this.props.topics.map((topic, i) => {
      return (
        <div key={i} className="pure-u-lg-1-3 pure-u-1">
          <TopicLink topic={topic} />
        </div>
      );
    });
  }
}
