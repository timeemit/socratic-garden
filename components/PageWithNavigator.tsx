// @format
import React, { FunctionComponent } from "react";
import Page, { Props } from "./Page";

const PageWithNavigator = (
  { children, title } // Moved the Navigator to the App component
) => (
  <Page title={title} grid={true}>
    <nav className="pure-u-1-8">
      Navigation
    </nav>
    <main className="pure-u-7-8">
      {children}
    </main>
  </Page>
);

export default PageWithNavigator;
