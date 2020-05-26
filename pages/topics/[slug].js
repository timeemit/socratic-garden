// @flow
import type { Context } from '../../types/context';
import type { QuestionType } from '../../components/QuestionView';
import type { LessonType } from '../../components/LessonView';
import type { TopicType } from '../../models/Topic';
import React, {type Node} from 'react';
import Page from '../../components/Page';
import { slug as slugger} from '../../pages/_app';
import { TopicBySlug } from '../../models/Topic';
import { LessonsByTopic } from '../../models/Lesson';
import { QuestionByLessonID } from '../../models/Question';
import Link from 'next/link';
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
        <main className="pure-u-1">
          <h1 className="header">{topic.text}</h1>
          {this.renderQuestionsWithLessons()}
        </main>
      </Page>
    );
  }

  renderQuestionsWithLessons(): Node {
    return this.props.questions.map((question, i) => {
      const lesson = this.props.lessons[i];
      return (
        <div>
          <Link href="/lessons/[id]/[slug]" as={`/lessons/${lesson.id}/${slugger(lesson.title)}`}>
            <a href="#">{question.text} ... {lesson.title}</a>
          </Link>
        </div>
      );
    });
  }
}
