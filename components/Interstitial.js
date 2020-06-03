// @flow
import styles from '../styles/Interstitial.module.scss';
import React, { type Node } from 'react';
import Closeable from './Closeable';

type Props = {|
  content: Node,
  reveal: boolean,
  onCancel: () => void,
|};

export default class Interstitial extends React.PureComponent<Props> {
  onClickToIgnore = (e: SyntheticEvent<>) => {
    e.stopPropagation();
  }

  render() {
    const classes = [
      styles.background,
    ];
    if (this.props.reveal === false) {
      classes.push(styles.hide);
    }
    return (
      <div className={classes.join(" ")} onClick={this.props.onCancel}>
        <div className={styles.interstitial} onClick={this.onClickToIgnore}>
          <Closeable size="2x" reveal={false} className={`${styles.frame} ${styles.closable}`} onClose={this.props.onCancel}>
            {this.props.content}
          </Closeable>
        </div>
      </div>
    );
  }
}
