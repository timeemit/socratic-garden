import styles from '../../../styles/ConceptPage.module.scss';
import { Context } from '../../../types/context';
import { QuestionType } from '../../../types/QuestionType';
import { LessonType } from '../../../types/LessonType';
import { ConceptType } from '../../../types/ConceptType';
import React from 'react';
import PageWithNavigator from '../../../components/PageWithNavigator';
import { LESSON_PARAGRAPH, LESSON_TEXT } from '../../../types/LessonType';
import ConceptLink from '../../../components/ConceptLink';
import { slug as slugger} from '../../../pages/_app';
import { ConceptByID } from '../../../models/Concept';
import { LessonsByConcept } from '../../../models/Lesson';
import { QuestionByLessonID } from '../../../models/Question';
import Link from 'next/link';
import Page404 from '../../404';

type Params = {
  concept: ConceptType | null,
  lessons: Array<LessonType>
};

export async function getServerSideProps(context: Context): Promise<{
  props: Params
}> {
  const { id } = context.params;
  const concept = ConceptByID(+id);
  if (concept == null) {
    return { props: {concept, lessons: [] } };
  }
  const lessons = LessonsByConcept(concept);
  return { props: {concept, lessons} };
}

export default class ConceptPage extends React.Component<Params> {
  render() {
    const { concept } = this.props;
    if (concept == null) {
      return <Page404 />;
    };
    return (
      <PageWithNavigator title={concept.text}>
        <h1 className="pure-u-1 header"><ConceptLink concept={concept} /></h1>
        <em className="pure-u-1">{concept.definition}</em>
        {this.renderLessons()}
      </PageWithNavigator>
    );
  }

  renderLessons() {
    return this.props.lessons.map((lesson, i) => {
      return (
        <div key={i} className={`pure-u-lg-1-3 pure-u-1 ${styles.card}`}>
          <Link href="/lessons/[id]/[slug]" as={`/lessons/${lesson.id}/${slugger(lesson.title)}`}>
            <a className={`link ${styles.link}`} href="">
              <h2 className={`header ${styles.header}`}>{lesson.title}</h2>
              {this.renderTextPreview(lesson)}
            </a>
          </Link>
        </div>
      );
    });
  }

  renderTextPreview(lesson: LessonType) {
    const first_paragraph_section = lesson.sections.find((section) => section.type === LESSON_PARAGRAPH);
    if (first_paragraph_section == null || first_paragraph_section.type !== LESSON_PARAGRAPH) {
      return null;
    }
    const first_text_section = first_paragraph_section.content.find((span) => span.type === LESSON_TEXT);
    if (first_text_section == null || first_text_section.type !== LESSON_TEXT) {
      return null;
    }
    return <span className={styles.content}>{first_text_section.content}</span>;
  }
}
