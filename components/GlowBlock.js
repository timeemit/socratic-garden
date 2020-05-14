// @flow

import type { Element } from 'react';
import styles from '../styles/GlowBlock.module.scss';
import React from 'react';

type Props = {
  children: Element<any>,
}

export default class GlowBlock extends React.PureComponent<Props> {
  render() {
    return (
      <>
      <div className={styles.roundedRed} />
        {this.props.children}
      </>
    );
  }
}
