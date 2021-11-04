// @format
import React from "react";

import styles from "../styles/Home.module.scss";
import PageWithNavigator from "../components/PageWithNavigator";

const Index = () => {
  return (
    <main className="pure-u-1">
      <h1 className="header centered-text">The Socratic Garden</h1>
      <img className={"pure-img centered " + styles.pulsingLogo} src="/logo-no-text.png" />
      <h1 className="header centered-text">Is Under Development</h1>
    </main>
  );
};

export default Index;
