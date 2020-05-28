// @flow
import styles from '../styles/Navigator.module.scss';
import React from 'react';
import Link from 'next/link';

export default class Navigator extends React.PureComponent<{}> {
  render() {
    return (
      <header>
        <nav>
          <Link href="/">
            <img className={`${styles.homeLogo} pure-img`} src="/logo-no-text.png" />
          </Link>
        </nav>
      </header>
    );
  }
}
