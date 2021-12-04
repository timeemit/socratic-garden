// @format
import React from "react";

import PageWithNavigator, {
  CurrentPage,
} from "../components/PageWithNavigator";

const MyResponses = () => {
  return (
    <PageWithNavigator
      title="Socratic Garden: My Responses"
      current={CurrentPage.MyResponses}
    >
      Balance Details
    </PageWithNavigator>
  );
};

export default MyResponses;
