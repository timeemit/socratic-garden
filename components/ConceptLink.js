// @flow
import styles from '../styles/ConceptLink.module.scss';
import type { ConceptType } from '../types/ConceptType';

import React from 'react';
import Link from 'next/link';
import { slug } from '../pages/_app';

type Props = {|
  concept: ConceptType,
  disabled?: boolean,
|};

export default class ConceptLink extends React.Component<Props> {
  render() {
    const disabled = this.props.disabled === true ? "pure-button-disabled" : "";
    return (
      <Link href="/concepts/[id]/[slug]" as={`/concepts/${this.props.concept.id}/${slug(this.props.concept.text)}`}>
        <a className={`pure-button ${styles.conceptLink} ${disabled}`}>{this.props.concept.text}</a>
      </Link>
    );
  }
}
