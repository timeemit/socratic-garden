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
        <div style={{margin: "50px 0"}} className="pure-u-1">
          <img style={{maxHeight: "100px"}} className="pure-img centered" src={this.props.lesson.media.url} />
        </div>
        <h1 className="header">{this.props.lesson.title}</h1>
        <ConceptLink concept={this.props.lesson.concept} />
        <p>{this.props.lesson.text}</p>
      </section>
    );
  }
}
