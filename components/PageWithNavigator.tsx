// @format
import classnames from "classnames";
import React, { FunctionComponent } from "react";
import Page, { Props } from "./Page";
import styles from "../styles/PageWithNavigator.module.scss";

export enum CurrentPage {
  Balance,
  Deadlines,
  Challenges,
  MyResponses,
  EvaluationsGiven,
}

type NavigatorItemProps = {
  text: string,
  is_current: boolean
}

const NavigatorItem = (
  { text, is_current }: NavigatorItemProps
) => (
  <div className={classnames("pure-u-1", {[styles.strong]: is_current})}>
    {text}
  </div>
)

type PageWithNavigatorProps = {
  title: string,
  current: CurrentPage,
}

const PageWithNavigator: React.FC<PageWithNavigatorProps> = (
  { children, title, current }
) => (
  <Page title={title} grid={true}>
    <nav className="pure-u-1-8">
      <NavigatorItem text="My Balance: 12.543 Coins" is_current={current === CurrentPage.Balance} />
      <NavigatorItem text="Deadlines" is_current={current === CurrentPage.Deadlines} />
      <NavigatorItem text="Challenges" is_current={current === CurrentPage.Challenges} />
      <NavigatorItem text="My Responses" is_current={current === CurrentPage.MyResponses} />
      <NavigatorItem text="Evaluations Given" is_current={current === CurrentPage.EvaluationsGiven} />
      <div className="pure-u-1">
        Log Out
      </div>
    </nav>
    <main className="pure-u-7-8">
      {children}
    </main>
  </Page>
);

export default PageWithNavigator;
