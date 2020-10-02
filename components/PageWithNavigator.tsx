// @format
import React, { FunctionComponent } from "react";
import Page, { Props } from "./Page";

const PageWithNavigator = (
  { children, title } // Moved the Navigator to the App component
) => <Page title={title}>{children}</Page>;

export default PageWithNavigator;
