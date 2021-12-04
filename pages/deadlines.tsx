// @format
import React from "react";

import PageWithNavigator, {
  CurrentPage,
} from "../components/PageWithNavigator";

const Deadlines = () => {
  return (
    <PageWithNavigator
      title="Socratic Garden: My Deadlines"
      current={CurrentPage.Deadlines}
    >
      Balance Details
    </PageWithNavigator>
  );
};

export default Deadlines;
