// @format
// Pure CSS
import "purecss/build/pure.css";
import "purecss/build/grids-responsive.css";

// Global CSS
import "../styles/_app.scss";

// Next Auth
import { Provider } from "next-auth/client";

// Draft JS
import 'draft-js/dist/Draft.css';

// Slugger
import slug from "slug";

// CSRF
import { csrfToken as getCsrfToken } from "next-auth/client";

slug.defaults.modes.pretty.lower = true;

export { slug };

// Listen to router events
import Router from "next/router";

const send_url_to_google = (url) => {
  gtag("config", "UA-164482043-1", { page_path: url });
};
Router.events.on("routeChangeComplete", send_url_to_google);

// Components for Rendering
import Head from "next/head";
import App from "next/app";
import React from "react";
import Navigator from "../components/Navigator";

function MyApp({ Component, pageProps, csrfToken }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Provider session={pageProps.session}>
        <Navigator csrfToken={csrfToken} />
        <Component {...pageProps} />
      </Provider>

      <footer className="footer centered-text">Copyright © 2020</footer>

      {/* Google Tag */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-164482043-1"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-164482043-1');",
        }}
      />
      {/* End of Google Tag */}
    </>
  );
}

MyApp.getInitialProps = async (context) => {
  const csrfToken = await getCsrfToken(context);
  const appProps = await App.getInitialProps(context);
  return { ...appProps, csrfToken };
};

export default MyApp;
