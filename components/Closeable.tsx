import styles from '../styles/Closeable.module.scss'

import React from 'react';
import { SizeProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  className?: string,
  onClose: (() => void),
  size?: SizeProp,
  reveal?: boolean
};

export default class Closeable extends React.PureComponent<Props> {
  render() {
    const reveal = this.props.reveal ?  "" : styles.reveal;
    return (
      <div className={`${this.props.className ?? ""} ${styles.closeable}`}>
        {this.props.children}
        <div className={`${styles.closeButton} ${reveal}`}>
          <FontAwesomeIcon icon={["far", "times-circle"]} size={this.props.size ?? "lg"} onClick={this.props.onClose}/>
        </div>
      </div>
    );
  }
}
