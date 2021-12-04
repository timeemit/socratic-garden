// @format
import React from "react";

import PageWithNavigator, {
  CurrentPage,
} from "../components/PageWithNavigator";

const Challenges = () => {
  return (
    <PageWithNavigator
      title="Socratic Garden: Challenges"
      current={CurrentPage.Challenges}
    >
      Balance Details
    </PageWithNavigator>
  );
};

export default Challenges;
