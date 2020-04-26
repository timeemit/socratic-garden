import (require('purecss').getFile('pure-min.css'));
import Link from 'next/link';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          |
          <Link href="/about">
            <a>About</a>
          </Link>
          |
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer>Copyright © 2020</footer>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164482043-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-164482043-1');
      </script>
    </>
  );
}

export default MyApp;
