// @format
import React from "react";

import PageWithNavigator, { CurrentPage } from "../components/PageWithNavigator";

export default () => {
  return (
    <PageWithNavigator title="Socratic Garden: My Deadlines" current={CurrentPage.Deadlines}>
      Balance Details
		</PageWithNavigator>
  );
};
