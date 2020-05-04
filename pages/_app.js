import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css';
import '../styles/app.scss';
import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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

      <footer className="centered-text">Copyright © 2020</footer>

      {/* Google Tag */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164482043-1"></script>
      <script dangerouslySetInnerHTML={{__html:"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-164482043-1');"}} />
      {/* End of Google Tag */}
    </>
  );
}

export default MyApp;
