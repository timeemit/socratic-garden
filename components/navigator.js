// @flow
import styles from '../styles/Navigator.module.scss';
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Navigator extends React.PureComponent<{}> {
  render() {
    return (
      <header>
        <nav className={styles.nav}>
          <Link href="/">
            <img className={styles.homeLogo} src="/logo-no-text.png" />
          </Link>
          <Link href="/topics">
            <a href="#" className={styles.headerPurple}>
              <FontAwesomeIcon icon="book" transform="left-3" />
              <span className={styles.span}>Topics</span>
            </a>
          </Link>
          <Link href="/questions">
            <a href="#" className={styles.headerBlue}>
              <FontAwesomeIcon icon="question" transform="left-3" />
              <span className={styles.span}>Questions</span>
            </a>
          </Link>
        </nav>
      </header>
    );
  }
}
