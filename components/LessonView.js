// @flow
import styles from '../styles/Media.module.scss';
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
        <div className={`pure-u-1 ${styles.container}`}>
          <img className={`pure-img centered ${styles.image}`} src={this.props.lesson.media.url} />
          <strong className={`centered-text ${styles.caption}`}>{this.props.lesson.media.caption}</strong>
        </div>
        <h1 className="header">{this.props.lesson.title}</h1>
        <ConceptLink concept={this.props.lesson.concept} />
        <p>{this.props.lesson.text}</p>
      </section>
    );
  }
}
