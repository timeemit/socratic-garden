// @format
import React from "react";
import classnames from "classnames";

import PageWithNavigator, {
  CurrentPage,
} from "../components/PageWithNavigator";

import styles from "../styles/Balance.module.scss";

const Balance = () => {
  return (
    <PageWithNavigator
      title="Socratic Garden: My Balance"
      current={CurrentPage.Balance}
    >
      <h1>My Balance</h1>
      <em>
        Earn coins by evaluating peer submissions to challenges you have already
        completed
      </em>

      <div className={classnames("pure-g", styles.actions)}>
        <div className="pure-u-1-3 centered-text">
          <button className="pure-button">Transfer Coins</button>
        </div>
        <div className="pure-u-1-3 centered-text">
          <button className="pure-button">Buy Coins</button>
        </div>
        <div className="pure-u-1-3 centered-text">
          <button className="pure-button">Sell Coins</button>
        </div>
      </div>
    </PageWithNavigator>
  );
};

export default Balance;
