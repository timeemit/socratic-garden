// @format
import styles from '../styles/Editable.module.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Editable extends React.PureComponent {
  render() {
    return (
      <span className={styles.editable}>
        {this.props.children}
        <span className={styles.editable}><FontAwesomeIcon icon="pencil" size="xs" transform="right-5" /></span>
      </span>
    );
  }
}
