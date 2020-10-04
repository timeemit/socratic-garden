// @format
import styles from "../styles/Interstitial.module.scss";
import React from "react";
import Closeable from "./Closeable";

type Props = {
  reveal: boolean;
  onCancel: () => void;
};

export default class Interstitial extends React.PureComponent<Props> {
  onClickToIgnore = (e: React.SyntheticEvent) => {
    e.stopPropagation();
  };

  render() {
    const classes = [styles.background];
    if (this.props.reveal === false) {
      classes.push(styles.hide);
    }
    return (
      <div className={classes.join(" ")} onClick={this.props.onCancel}>
        <div className={styles.interstitial} onClick={this.onClickToIgnore}>
          <Closeable
            size="2x"
            reveal={false}
            className={`${styles.frame} ${styles.closable}`}
            onClose={this.props.onCancel}>
            {this.props.children}
          </Closeable>
        </div>
      </div>
    );
  }
}
