// Pure CSS
import 'purecss/build/pure.css';
import 'purecss/build/grids-responsive.css';

// Global CSS
import '../styles/_app.scss';

// Font Awesome
import { config as fontAwesomeConfig } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
fontAwesomeConfig.autoAddCss = false;

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faArrowUp, faFireAlt, faChartLine, faEdit, faQuestion, faBook, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faClock, faTimesCircle } from '@fortawesome/free-regular-svg-icons';

// Slugger
import slug from 'slug';

slug.defaults.modes.pretty.lower = true;

export { slug };

library.add(
  faCheck,
  faArrowUp,
  faFireAlt,
  faClock,
  faChartLine,
  faEdit,
  faQuestion,
  faBook,
  faTimesCircle,
  faPlus,
);

// Listen to router events
import Router from 'next/router';

const send_url_to_google = (url) => {
  gtag('config',  'UA-164482043-1', {'page_path': url});
}
Router.events.on('routeChangeComplete', send_url_to_google);

// Components for Rendering
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />

      <footer className="footer centered-text">Copyright © 2020</footer>

      {/* Google Tag */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-164482043-1"></script>
      <script dangerouslySetInnerHTML={{__html:"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-164482043-1');"}} />
      {/* End of Google Tag */}
    </>
  );
}

export default MyApp;
