// @flow
import type { ConceptType } from '../types/ConceptType';
import styles from '../styles/ConceptLink.module.scss';
import React from 'react';
import Link from 'next/link';

type Props = {|
  concept: ConceptType,
  disabled?: boolean,
|};

export default class ConceptLink extends React.Component<Props> {
  render() {
    const disabled = this.props.disabled === true ? "pure-button-disabled" : "";
    return (
      <Link href="/concepts/[slug]" as={`/concepts/${this.props.concept.slug}`}>
        <a className={`pure-button ${styles.conceptLink} ${disabled}`}>{this.props.concept.text}</a>
      </Link>
    );
  }
}
