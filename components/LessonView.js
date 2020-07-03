// @flow
import type { LessonType, LessonSectionType } from '../types/LessonType';
import type { ConceptType } from '../types/ConceptType';

import React, { type Node } from 'react';
import { LESSON_HEADER, LESSON_MEDIA, LESSON_TEXT } from '../types/LessonType';
import { ConceptByText} from '../models/Concept';
import MediaView from './MediaView';
import ConceptLink from './ConceptLink';

type Props = {|
  lesson: LessonType,
|};

type SectionProps = {|
  section: LessonSectionType,
|}

class LessonSectionView extends React.Component<SectionProps> {
  render() {
    const { section } = this.props;
    if (section.type === LESSON_HEADER) {
      return <h2 className="header">{section.content}</h2>;
    } else if (section.type === LESSON_MEDIA) {
      return <MediaView media={section.content} />;
    }
    return <p>{section.content}</p>;
  }
}

export default class LessonView extends React.Component<Props> {
  render() {
    const sections = this.props.lesson.sections.map((section, i) => <LessonSectionView key={i} section={section} />);
    return (
      <section style={{margin: "50px 0"}}>
        <h1 className="header">{this.props.lesson.title}</h1>
        <ConceptLink concept={this.props.lesson.concept} />
        {sections}
      </section>
    );
  }
}
