// @flow
import styles from '../styles/TopicLink.module.scss';
import Topic from '../models/Topic';
import React from 'react';
import Link from 'next/link';

type Props = {|
  topic: Topic,
|};

export default class TopicLink extends React.Component<Props> {
  render() {
    return (
      <Link href="/topics/[slug]" as={`/topics/${this.props.topic.slug()}`}>
        <a className={`pure-button ${styles.topicLink}`}>{this.props.topic.text}</a>
      </Link>
    );
  }
}
