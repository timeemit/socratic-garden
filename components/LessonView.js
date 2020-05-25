// @flow
import React from 'react';

export type LessonType = {|
  id: number,
  title: string,
  text: string,
|};

type Props = {|
  lesson: LessonType,
|};

export default class LessonView extends React.Component<Props> {
  render() {
    return (
      <section>
        <h1 className="header">{this.props.lesson.title}</h1>
        <p>{this.props.lesson.text}</p>
      </section>
    );
  }
}
