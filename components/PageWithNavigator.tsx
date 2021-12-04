// @format
import classnames from "classnames";
import React, { FunctionComponent } from "react";
import Page, { Props } from "./Page";
import Link from "next/link";
import styles from "../styles/PageWithNavigator.module.scss";

export enum CurrentPage {
  Balance = "balance",
  Deadlines = "deadlines",
  Challenges = "challenges",
  MyResponses = "my-responses",
  EvaluationsGiven = "evaluations-given",
}

type NavigatorItemProps = {
  text: string;
  current: CurrentPage;
  destination: CurrentPage;
};

const NavigatorItem = ({ text, current, destination }: NavigatorItemProps) => (
  <div
    className={classnames("pure-u-1", styles.navLink, {
      [styles.strong]: current === destination,
    })}
  >
    <Link href={"/" + destination}>{text}</Link>
  </div>
);

type PageWithNavigatorProps = {
  title: string;
  current: CurrentPage;
};

const PageWithNavigator: React.FC<PageWithNavigatorProps> = ({
  children,
  title,
  current,
}) => (
  <Page title={title} grid={true}>
    <nav className="pure-u-1-8">
      <NavigatorItem
        text="My Balance: 12.543 Coins"
        current={current}
        destination={CurrentPage.Balance}
      />
      <NavigatorItem
        text="Deadlines"
        current={current}
        destination={CurrentPage.Deadlines}
      />
      <NavigatorItem
        text="Challenges"
        current={current}
        destination={CurrentPage.Challenges}
      />
      <NavigatorItem
        text="My Responses"
        current={current}
        destination={CurrentPage.MyResponses}
      />
      <NavigatorItem
        text="Evaluations Given"
        current={current}
        destination={CurrentPage.EvaluationsGiven}
      />
      <div className="pure-u-1">Log Out</div>
    </nav>
    <main className="pure-u-7-8">{children}</main>
  </Page>
);

export default PageWithNavigator;
