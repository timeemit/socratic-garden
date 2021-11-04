// @format
import React from "react";

import styles from "../styles/Home.module.scss";
import Page from "../components/Page";

const Index = () => {
  return (
		<Page title="Socratic Garden">
			<main className="pure-u-1">
				<h1 className="header centered-text">The Socratic Garden</h1>
				<img className={"pure-img centered " + styles.pulsingLogo} src="/logo-no-text.png" />
				<h1 className="header centered-text">Is Under Development</h1>
			</main>
		</Page>
  );
};

export default Index;
