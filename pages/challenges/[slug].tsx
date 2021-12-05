// @format
import classnames from "classnames";
import React from "react";
import Link from "next/link";
import ResponseView from "../../components/ResponseView";
import styles from "../styles/Challenge.module.scss";

import PageWithNavigator, {
  CurrentPage,
} from "../../components/PageWithNavigator";

const Challenge = () => {
  return (
    <PageWithNavigator
      title="Socratic Garden: Challenge"
      current={CurrentPage.Challenges}
    >
      <h1>Challenges &gt; Are Shakespeare's Fools Actually Foolish?</h1>
      <p>
        Many of Shakespeare's plays include a character that is named only as
        "Fool." But this does not always seem appropriate considering their
        insightful commentary on the events of the story surrounding them. What
        effect do you think Shakespeare is trying to achieve with these
        characters?
      </p>
      <h2>My Responses to this Challenge</h2>
      <p>
        <em>You have not made any submissions to this challenge</em>
      </p>
      <p className="centered-text">
        <input type="file" />
      </p>
      <h2>All Responses to this Challenge</h2>
      <ResponseView rank={1} cost={4} />
      <ResponseView rank={2} cost={2} />
      <ResponseView rank={3} cost={1} />
      <ResponseView rank={4} cost={1} />
    </PageWithNavigator>
  );
};

export default Challenge;
