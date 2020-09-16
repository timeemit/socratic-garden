// @flow
import styles from '../../styles/CoursePage.module.scss';
import type { Context } from '../../types/context';
import type { CourseType } from '../../types/CourseType';
import type { LessonType } from '../../types/LessonType';
import { type LessonMediaType, LESSON_MEDIA } from '../../types/LessonType';
import React, {type Node} from 'react';
import Page from '../../components/PageWithNavigator';
import ConceptLink from '../../components/ConceptLink';
import MediaView from '../../components/MediaView';
import { slug as slugger} from '../../pages/_app';
import { COURSES } from '../../models/Course';
import { LessonFetch } from '../../models/Lesson';
import Link from 'next/link';
import Page404 from '../404';

type Params = {|
  courses: Array<CourseType>,
|};

export async function getServerSideProps(context: Context): Promise<{|props: Params|}> {
  return { props: { courses: COURSES } };
}

export default class CoursePage extends React.Component<Params> {
  render() {
    return (
      <Page title="Courses on Socratic Garden">
        <h1 className="pure-u-1 header">Courses</h1>
        {this.renderCourses()}
      </Page>
    );
  }

  renderCourses(): Node {
    return this.props.courses.map((course, i) => {
      const lesson = LessonFetch(course.lesson_ids[0]);
      return (
        <div key={i} className={`pure-u-lg-1-2 pure-u-1`}>
          <Link href="/lessons/[id]/[slug]" as={`/lessons/${lesson.id}/${slugger(lesson.title)}`}>
            <a className={`link ${styles.link}`} href="">
              <h2 className={`header`}>{course.title}</h2>
              <em>{course.objective}</em>
              
              <div className="pure-g">
                {this.renderMediaPreview(lesson)}
              </div>
            </a>
          </Link>
        </div>
      );
    });
  }

  renderMediaPreview(lesson: LessonType): Node {
    const media = lesson.sections.filter((section) => section.type === LESSON_MEDIA);
    return media.map((shiny, i) => (
      <div className={`pure-u-1-4 ${styles.mediaContainer}`}>
        <img className={`pure-img centered ${styles.media}`} src={shiny.content.url} />
      </div>
    ));
  }
}
