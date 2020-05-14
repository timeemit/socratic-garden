// @flow

import type { Element } from 'react';
import styles from '../styles/GlowBlock.module.scss';
import React from 'react';

type Props = {
  className: string,
  children: Element<any>,
}

export default class GlowBlock extends React.PureComponent<Props> {
  render() {
    return (
      <div className={this.props.className}>
        <div className={styles.roundedRed}></div>
        {this.props.children}
      </div>
    );
  }
}
