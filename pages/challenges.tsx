// @format
import classnames from "classnames";
import React from "react";
import styles from "../styles/Challenges.module.scss";

import PageWithNavigator, {
  CurrentPage,
} from "../components/PageWithNavigator";

type ChallengeListItemProps = {
  title: string;
  response: string | null;
};

const ChallengeListItem = ({ title, response }) => (
  <div className={classnames("pure-class-g", styles.challengeListItem)}>
    <div className="pure-u-2-3">
      <div>
        <strong>{title}</strong>
        <br />
        <em>{response ?? "No response submitted"}</em>
      </div>
    </div>
    <div className="pure-u-1-6 centered-text">
      <button className="pure-button">Read More</button>
    </div>
    <div className="pure-u-1-6 centered-text">
      <button
        className={classnames("pure-button", {
          "pure-button-disabled": response == null,
        })}
      >
        Evaluate Peer
      </button>
    </div>
  </div>
);

const Challenges = () => {
  return (
    <PageWithNavigator
      title="Socratic Garden: Challenges"
      current={CurrentPage.Challenges}
    >
      <h1>Challenges</h1>
      <em>
        You must respond to a challenge before you can evaluate a peers'
        submissions
      </em>
      <ChallengeListItem
        title="Are Shakespeare's Fools Actually Foolish?"
        response={null}
      />
      <ChallengeListItem
        title="Are Beauty & Innocence The Same in British Literature?"
        response="Submitted on January 30"
      />
      <ChallengeListItem
        title="How Are Women Portrayed in Medieval English Literature?"
        response={null}
      />
      <ChallengeListItem
        title="How Does Divinity Influence Action in British Literature?"
        response="Response Submitted January 22"
      />
    </PageWithNavigator>
  );
};

export default Challenges;
