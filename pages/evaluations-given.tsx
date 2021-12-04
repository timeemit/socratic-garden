// @format
import React from "react";

import PageWithNavigator, { CurrentPage } from "../components/PageWithNavigator";

export default () => {
  return (
    <PageWithNavigator title="Socratic Garden: Evaluations Given" current={CurrentPage.EvaluationsGiven}>
      Balance Details
		</PageWithNavigator>
  );
};
