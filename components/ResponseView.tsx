// @format
import classnames from "classnames";
import React from "react";
import styles from "../styles/ResponseView.module.scss";

type ResponseViewProps = {
  rank: number;
  cost: number;
};

const ResponseView = ({ rank, cost }: ResponseViewProps) => (
  <div className={styles.response}>
    <div className={styles.rankContainer}>
      <div className={styles.rank}>{rank}</div>
    </div>
    <div className={styles.preview}>
      Preview
      {cost ? (
        <>
          <br />
          (-{cost} Coins)
        </>
      ) : (
        ""
      )}
    </div>
  </div>
);

export default ResponseView;
