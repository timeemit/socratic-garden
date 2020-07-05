// @flow
import type { LessonType, LessonSectionType, LessonParagraphContentsType } from '../types/LessonType';
import type { ConceptType } from '../types/ConceptType';

import React, { type Node } from 'react';
import { LESSON_HEADER, LESSON_MEDIA, LESSON_TEXT } from '../types/LessonType';
import { LessonConceptIDs } from '../models/Lesson';
import { ConceptByID, ConceptByText } from '../models/Concept';
import MediaView from './MediaView';
import ConceptLink from './ConceptLink';

type Props = {|
  lesson: LessonType,
|};

type SectionProps = {|
  section: LessonSectionType,
|}

type ParagraphProps = {|
  paragraph: LessonParagraphContentsType,
|};

class LessonParagraphView extends React.Component<ParagraphProps> {
  render() {
    const { paragraph } = this.props;
    if (paragraph.type === LESSON_TEXT) {
      return paragraph.content;
    }
    return <ConceptLink concept={paragraph.content} />;
  }
}

class LessonSectionView extends React.Component<SectionProps> {
  render() {
    const { section } = this.props;
    if (section.type === LESSON_HEADER) {
      return <h2 className="header">{section.content}</h2>;
    } else if (section.type === LESSON_MEDIA) {
      return <MediaView media={section.content} />;
    }
    return (
      <span style={{whitespace: "pre"}}>
        {section.content.map<Node>((span, i) => <LessonParagraphView key={i} paragraph={span} />)}
      </span>
    );
  }
}

export default class LessonView extends React.Component<Props> {
  render() {
    const sections = this.props.lesson.sections.map((section, i) => <LessonSectionView key={i} section={section} />);
    return (
      <section style={{margin: "50px 0"}}>
        <h1 className="header">{this.props.lesson.title}</h1>
        <div>{this.renderConcepts()}</div>
        {sections}
      </section>
    );
  }

  renderConcepts() {
    const concepts: Array<ConceptType> = LessonConceptIDs(this.props.lesson).map(ConceptByID).filter(Boolean);
    return concepts.map<Node>((concept, i) => <ConceptLink key={i} concept={concept} />);
  }
}
