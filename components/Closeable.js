// @flow
import styles from '../styles/Closeable.module.scss'

import React, { type Node } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {|
  className: string,
  onClose: () => void,
  children: Node,
|};

export default class Closeable extends React.PureComponent<Props> {
  render() {
    return (
      <div className={`${this.props.className} ${styles.closeable}`}>
        {this.props.children}
        <div className={styles.closeButton}>
        <FontAwesomeIcon icon={["far", "times-circle"]} size="lg" onClick={this.props.onClose}/>
        </div>
      </div>
    );
  }
}
