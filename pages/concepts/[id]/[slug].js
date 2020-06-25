// @flow
import styles from '../../../styles/ConceptPage.module.scss';
import type { Context } from '../../../types/context';
import type { QuestionType } from '../../../types/QuestionType';
import type { LessonType } from '../../../types/LessonType';
import type { ConceptType } from '../../../types/ConceptType';
import React, {type Node} from 'react';
import Page from '../../../components/PageWithNavigator';
import ConceptLink from '../../../components/ConceptLink';
import { slug as slugger} from '../../../pages/_app';
import { ConceptByID } from '../../../models/Concept';
import { LessonsByConcept } from '../../../models/Lesson';
import { QuestionByLessonID } from '../../../models/Question';
import Link from 'next/link';
import Page404 from '../../404';

type Params = {|
  concept: ?ConceptType,
  lessons: Array<LessonType>,
  questions: Array<QuestionType>,
|};

export async function getServerSideProps(context: Context): Promise<{|props: Params|}> {
  const { id } = context.params;
  const concept = ConceptByID(+id);
  if (concept == null) {
    return { props: {concept, lessons: [], questions: []} };
  }
  const lessons = LessonsByConcept(concept);
  const questions = lessons.map(({id}) => QuestionByLessonID(id));
  return { props: {concept, lessons, questions} };
}

export default class ConceptPage extends React.Component<Params> {
  render() {
    const { concept } = this.props;
    if (concept == null) {
      return <Page404 />;
    };
    return (
      <Page title={concept.text}>
        <h1 className="pure-u-1 header"><ConceptLink concept={concept} /></h1>
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
              <span className={styles.content}>{lesson.title}</span>
            </a>
          </Link>
        </div>
      );
    });
  }
}
