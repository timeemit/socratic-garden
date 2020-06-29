// @flow
import type { LessonType, LessonSectionType } from '../types/LessonType';
import type { ConceptType } from '../types/ConceptType';

import React, { type Node } from 'react';
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
  renderSubtitle() {
    const { subtitle } = this.props.section;
    if (subtitle == null) return null;
    return (
      <h2 className="header">{this.props.section.subtitle}</h2>
    );
  }

  render() {
    return (
      <>
        {this.renderSubtitle()}
        <MediaView media={this.props.section.media} />
        <p>{this.props.section.text}</p>
      </>
    );
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
