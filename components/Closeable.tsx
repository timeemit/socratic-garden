import styles from '../styles/Closeable.module.scss'

import React, { Node } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  className?: string,
  onClose: (() => void),
  children: Node,
  size?: string,
  reveal?: boolean
};

export default class Closeable extends React.PureComponent<Props> {
  render() {
    const reveal = this.props.reveal ?  "" : styles.reveal;
    return (
      <div className={`${// Auto generated from flowToTs. Please clean me!
      // Auto generated from flowToTs. Please clean me!
      (this.props === null || this.props === undefined ? undefined : this.props.className) !== null && // Auto generated from flowToTs. Please clean me!
      (this.props === null || this.props === undefined ? undefined : this.props.className) !== undefined ? // Auto generated from flowToTs. Please clean me!
      this.props === null || this.props === undefined ? undefined : this.props.className : ""} ${styles.closeable}`}>
        {this.props.children}
        <div className={`${styles.closeButton} ${reveal}`}>
          <FontAwesomeIcon icon={["far", "times-circle"]} size={// Auto generated from flowToTs. Please clean me!
          // Auto generated from flowToTs. Please clean me!
          (this.props === null || this.props === undefined ? undefined : this.props.size) !== null && // Auto generated from flowToTs. Please clean me!
          (this.props === null || this.props === undefined ? undefined : this.props.size) !== undefined ? // Auto generated from flowToTs. Please clean me!
          this.props === null || this.props === undefined ? undefined : this.props.size : "lg"} onClick={this.props.onClose}/>
        </div>
      </div>
    );
  }
}
