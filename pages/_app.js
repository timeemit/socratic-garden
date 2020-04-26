import (require('purecss').getFile('pure-min.css'));
import Link from 'next/link';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
