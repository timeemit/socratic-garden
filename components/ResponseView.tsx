// @format
import classnames from "classnames";
import React from "react";
import styles from "../styles/ResponseView.module.scss";

type ResponseViewProps = {
  title: string;
  chosen: boolean;
};

export const ResponseView = ({ title, chosen }: ResponseViewProps) => (
  <div className={classnames(styles.response, {[styles.chosen]: chosen})}>
    <div className={styles.preview}>Preview {title}</div>
  </div>
);

type RankedResponseViewProps = {
  rank: number;
  cost: number;
};

export const RankedResponseView = ({ rank, cost }: RankedResponseViewProps) => (
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
