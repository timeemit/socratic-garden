// @flow
import { TopicByText, type TopicType } from '../models/Topic';
import React, { type Node } from 'react';
import TopicLink from './TopicLink';

export type LessonType = {|
  id: number,
  topics: Array<string>,
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
          {this.renderTopics()}
        <p>{this.props.lesson.text}</p>
      </section>
    );
  }

  renderTopics() {
    const topics: Array<TopicType> = this.props.lesson.topics.map(TopicByText).filter(Boolean);
    return topics.map<Node>((topic, i) => <TopicLink key={i} topic={topic} />);
  }
}
