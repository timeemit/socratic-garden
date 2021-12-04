// @format
import React from "react";

import styles from "../styles/Home.module.scss";
import Page from "../components/Page";

const Index = () => {
  return (
    <Page title="Socratic Garden">
      <main className="pure-u-1">
        <h1 className="header centered-text">The Socratic Garden</h1>
        <img
          className={"pure-img centered " + styles.pulsingLogo}
          src="/logo-no-text.png"
        />
        <h1 className="header centered-text">Is Under Development</h1>
        <img
          className={"pure-img centered " + styles.goth}
          src="/patrick/treehouse.png"
        />
        <h1 className="header centered-text">Thanks for Your Patience</h1>
        <img
          className={"pure-img centered " + styles.goth}
          src="/patrick/goth_stares_out_window-no_window.png"
        />
      </main>
    </Page>
  );
};

export default Index;
