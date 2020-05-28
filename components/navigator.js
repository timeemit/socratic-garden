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
              <span className={styles.span}>Review Topics</span>
            </a>
          </Link>
            <Link href="/lessons/new">
            <a href="#" className={styles.headerBlue}>
              <FontAwesomeIcon icon="edit" transform="left-3" />
              <span className={styles.span}>Submit a Lesson</span>
            </a>
          </Link>
        </nav>
      </header>
    );
  }
}
