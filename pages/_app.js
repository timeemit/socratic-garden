import (require('purecss').getFile('pure-min.css'));
import '../styles/app.scss';
import Link from 'next/link';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/*
        <header>
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
          </nav>
        </header>
      */}

      <Component {...pageProps} />

      <footer>Copyright © 2020</footer>
    </>
  );
}

export default MyApp;
