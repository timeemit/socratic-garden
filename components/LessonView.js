// @flow
import React from 'react';
import Topic from '../models/Topic';
import TopicLink from './TopicLink';

export type LessonType = {|
  id: number,
  topics: Array<string>,
  title: string,
  text: string,
|};

type Props = {|
  lesson: LessonType,
  topics: Array<Topic>,
|};

export default class LessonView extends React.Component<Props> {
  render() {
    return (
      <section>
        <h1 className="header">{this.props.lesson.title}</h1>
          {this.renderTopics()}
        <p>{this.props.lesson.text}</p>
      </section>
    );
  }

  renderTopics() {
    return this.props.topics.map((topic, i) => <TopicLink key={i} topic={topic} />);
  }
}
