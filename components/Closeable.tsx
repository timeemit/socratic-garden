// @format
import styles from "../styles/Closeable.module.scss";

import React from "react";

type Props = {
  className?: string;
  onClose: () => void;
  reveal?: boolean;
};

export default class Closeable extends React.PureComponent<Props> {
  render() {
    const reveal = this.props.reveal ? "" : styles.reveal;
    return (
      <div className={`${this.props.className ?? ""} ${styles.closeable}`}>
        {this.props.children}
        <div className={`${styles.closeButton} ${reveal}`}>
          X
        </div>
      </div>
    );
  }
}
