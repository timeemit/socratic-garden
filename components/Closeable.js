// @flow
import styles from '../styles/Closeable.module.scss'

import React, { type Node } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {|
  className?: string,
  onClose: () => void,
  children: Node,
  size?: string,
  reveal?: boolean,
|};

export default class Closeable extends React.PureComponent<Props> {
  render() {
    const reveal = this.props.reveal ?  "" : styles.reveal;
    return (
      <div className={`${this.props?.className ?? ""} ${styles.closeable}`}>
        {this.props.children}
        <div className={`${styles.closeButton} ${reveal}`}>
          <FontAwesomeIcon icon={["far", "times-circle"]} size={this.props?.size ?? "lg"} onClick={this.props.onClose}/>
        </div>
      </div>
    );
  }
}
