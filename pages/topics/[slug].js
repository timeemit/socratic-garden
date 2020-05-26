// @flow
import type { Context } from '../../types/context';
import type { QuestionType } from '../../components/QuestionView';
import type { LessonType } from '../../components/LessonView';
import type { TopicType } from '../../models/Topic';
import React, {type Node} from 'react';
import Page from '../../components/Page';
import { TopicBySlug } from '../../models/Topic';
import { LessonsByTopic } from '../../models/Lesson';
import { QuestionByLessonID } from '../../models/Question';
import Page404 from '../404';

type Params = {|
  topic: ?TopicType,
  lessons: Array<LessonType>,
  questions: Array<QuestionType>,
|};

export async function getServerSideProps(context: Context): Promise<{|props: Params|}> {
  const { slug } = context.params;
  const topic = TopicBySlug(slug);
  if (topic == null) {
    return { props: {topic, lessons: [], questions: []} };
  }
  const lessons = LessonsByTopic(topic);
  const questions = lessons.map(({id}) => QuestionByLessonID(id));
  return { props: {topic, lessons, questions} };
}

export default class TopicPage extends React.Component<Params> {
  render() {
    const { topic } = this.props;
    if (topic == null) {
      return <Page404 />;
    };
    return (
      <Page title={topic.text}>
        <main className="pure-u-1 centered-text">
          <h1>Lessons</h1>
          {this.renderLessons()}
          <h1>Questions</h1>
          {this.renderQuestions()}
        </main>
      </Page>
    );
  }

  renderLessons(): Node {
    return this.props.lessons.map((lesson) => (
      <div>{lesson.title}</div>
    ));
  }

  renderQuestions(): Node {
    return this.props.questions.map((question) => (
      <div>{question.text}</div>
    ));
  }
}

