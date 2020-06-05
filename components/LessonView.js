// @flow
import type { LessonType } from '../types/LessonType';
import type { ConceptType } from '../types/ConceptType';

import React, { type Node } from 'react';
import { ConceptByText} from '../models/Concept';
import ConceptLink from './ConceptLink';

type Props = {|
  lesson: LessonType,
|};

export default class LessonView extends React.Component<Props> {
  render() {
    return (
      <section>
        <h1 className="header">{this.props.lesson.title}</h1>
          {this.renderConcepts()}
        <p>{this.props.lesson.text}</p>
      </section>
    );
  }

  renderConcepts() {
    const concepts: Array<ConceptType> = this.props.lesson.concepts.map(ConceptByText).filter(Boolean);
    return concepts.map<Node>((concept, i) => <ConceptLink key={i} concept={concept} />);
  }
}
