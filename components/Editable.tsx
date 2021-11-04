// @format
import styles from '../styles/Editable.module.scss';
import React from 'react';

export default class Editable extends React.PureComponent {
  render() {
    return (
      <span className={styles.editable}>
        {this.props.children}
        <span className={styles.editable}>X</span>
      </span>
    );
  }
}
