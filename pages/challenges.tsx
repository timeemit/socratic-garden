// @format
import React from "react";

import PageWithNavigator, { CurrentPage } from "../components/PageWithNavigator";

export default () => {
  return (
    <PageWithNavigator title="Socratic Garden: Challenges" current={CurrentPage.Challenges}>
      Balance Details
		</PageWithNavigator>
  );
};
