// @flow
import styles from '../../styles/TopicPage.module.scss';
import type { Context } from '../../types/context';
import type { QuestionType } from '../../types/QuestionType';
import type { LessonType } from '../../types/LessonType';
import type { TopicType } from '../../types/TopicType';
import React, {type Node} from 'react';
import Page from '../../components/PageWithNavigator';
import TopicLink from '../../components/TopicLink';
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
        <h1 className="pure-u-1 header"><TopicLink topic={topic} /></h1>
        {this.renderQuestionsWithLessons()}
      </Page>
    );
  }

  renderQuestionsWithLessons(): Node {
    return this.props.questions.map((question, i) => {
      const lesson = this.props.lessons[i];
      return (
        <div key={i} className={`pure-u-lg-1-3 pure-u-1 ${styles.card}`}>
          <Link href="/lessons/[id]/[slug]" as={`/lessons/${lesson.id}/${slugger(lesson.title)}`}>
            <a className={`link ${styles.link}`} href="#">
              <h2 className={`header ${styles.header}`}>{question.text}</h2>
              <span className={styles.content}>{lesson.text}</span>
            </a>
          </Link>
        </div>
      );
    });
  }
}
