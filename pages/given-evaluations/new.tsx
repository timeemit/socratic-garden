// @format
import classnames from "classnames";
import React, { useState } from "react";
import Link from "next/link";
import { ResponseView } from "../../components/ResponseView";
import styles from "../../styles/EvaluationNew.module.scss";

import PageWithNavigator, {
  CurrentPage,
} from "../../components/PageWithNavigator";

enum EvaluationOptions {
  Best = "0",
  Second = "1",
  Third = "2",
  Worst = "3",
}

const EvaluationOptionText = {
  [EvaluationOptions.Best]: "A is the best response. It is better than B, C, & D.",
  [EvaluationOptions.Second]: "A is the second best response. It is better than C & D but not B.",
  [EvaluationOptions.Third]: "A is the third best response. It is better than D but neither B nor C.",
  [EvaluationOptions.Worst]: "A is the worst response. It is not better than B, C, or D.",
};

const EvaluationForm = () => {
  const [selection, setSelection] = useState<string | null>(null);
  return (
    <>
      <h2>My Evaluation of Response A is that...</h2>
      <div className="pure-g">
        {[
          EvaluationOptions.Best,
          EvaluationOptions.Second,
          EvaluationOptions.Third,
          EvaluationOptions.Worst,
        ].map(option => (
          <>
            <div className="pure-u-1-8 centered-text">
              <input
                type="radio"
                id={"evaluation-" + option}
                name="evaluation"
                value={option}
                checked={selection === option}
                onChange={(el) => setSelection(el.target.value)}
              />
            </div>
            <div className="pure-u-7-8">
              <label htmlFor={"evaluation-" + option}>{EvaluationOptionText[option]}</label>
            </div>
          </>
        ))}
      </div>
      <h2>Preview</h2>
      { selection == null && <ResponseView title={"Response A"} chosen={true} key="A" /> }
      <div className={styles.spacer}></div>
      <div className={styles.betterWorse}>Better</div>
      { (selection == EvaluationOptions.Best) && <ResponseView title={"Response A"} chosen={true} key="A" /> }
      <ResponseView title={"Response B"} chosen={false} key="B" />
      { (selection == EvaluationOptions.Second) && <ResponseView title={"Response A"} chosen={true} key="A" /> }
      <ResponseView title={"Response C"} chosen={false} key="C" />
      { (selection == EvaluationOptions.Third) && <ResponseView title={"Response A"} chosen={true} key="A" /> }
      <ResponseView title={"Response D"} chosen={false} key="D" />
      { (selection == EvaluationOptions.Worst) && <ResponseView title={"Response A"} chosen={true} key="A" /> }
      <div className={styles.betterWorse}>Worse</div>
      <div className="pure-u-1 centered-text">
        <button className={classnames(styles.submitButton, "pure-button")}>Submit</button>
      </div>
    </>
  );
};

const NewEvaluation = () => {
  return (
    <PageWithNavigator
      title="Socratic Garden: Give a New Evaluation"
      current={CurrentPage.EvaluationsGiven}
    >
      <h1>Evaluations Give &gt; New</h1>
      <p>
        Earn Coins by ranking how Response A compares to Responses B, C, & D
      </p>
      <h2>The Challenge Addressed by All Responses A, B, C, & D</h2>
      <p>
        <strong>Are Shakespeare's Fools Actually Foolish?</strong>
      </p>
      <p>
        Many of Shakespeare's plays include a character that is named only as
        "Fool." But this does not always seem appropriate considering their
        insightful commentary on the events of the story surrounding them. What
        effect do you think Shakespeare is trying to achieve with these
        characters?
      </p>
      <EvaluationForm />
    </PageWithNavigator>
  );
};

export default NewEvaluation;
