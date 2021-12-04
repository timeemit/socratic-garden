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

      <div>
        12.543 Socratic Coins (SOC) ≈ $0.65 (USD)
      </div>

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

      <h2>Recent Transactions</h2>
      <div>
        <em>February 6</em> -0.66 Coins Resubmission Fee
      </div>
      <div>
        <em>January 23</em> +5.2 Coins Awarded for Being in Partial Agreement
      </div>
      <div>
        <em>January 23</em> +8 Coins Awarded for Being in Complete Agreement
      </div>
    </PageWithNavigator>
  );
};

export default Balance;
