// @format
import React from "react";

import PageWithNavigator, {
  CurrentPage,
} from "../components/PageWithNavigator";

const Balance = () => {
  return (
    <PageWithNavigator
      title="Socratic Garden: My Balance"
      current={CurrentPage.Balance}
    >
      Balance Details
    </PageWithNavigator>
  );
};

export default Balance;
