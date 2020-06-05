// @flow
import type { TopicType } from '../types/TopicType';
import styles from '../styles/TopicLink.module.scss';
import React from 'react';
import Link from 'next/link';

type Props = {|
  topic: TopicType,
  disabled?: boolean,
|};

export default class TopicLink extends React.Component<Props> {
  render() {
    const disabled = this.props.disabled === true ? "pure-button-disabled" : "";
    return (
      <Link href="/topics/[slug]" as={`/topics/${this.props.topic.slug}`}>
        <a className={`pure-button ${styles.topicLink} ${disabled}`}>{this.props.topic.text}</a>
      </Link>
    );
  }
}
