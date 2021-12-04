// @format
import React from "react";

import styles from "../styles/Home.module.scss";
import PageWithNavigator, { CurrentPage } from "../components/PageWithNavigator";

const Index = () => {
  return (
		<PageWithNavigator title="Socratic Garden" current={CurrentPage.Balance}>
      <img className={"pure-img centered " + styles.pulsingLogo} src="/logo-no-text.png" />
		</PageWithNavigator>
  );
};

export default Index;
