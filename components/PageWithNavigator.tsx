// @format
import classnames from "classnames";
import React, { FunctionComponent } from "react";
import Page, { Props } from "./Page";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/client";
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

type NavigationButton = {
  text: string;
  handler: () => void;
};

const NavigationButton = ({ text, handler }: NavigationButton) => (
  <div className="pure-u-1">
    <button className={styles.navButton} onClick={handler}>
      {text}
    </button>
  </div>
);

type PageWithNavigatorProps = {
  title: string;
  current: CurrentPage;
};

const LoggedOutNavigation = ({ current }: { current: CurrentPage }) => (
  <>
    <NavigationButton text="Sign Up" handler={signIn} />
    <NavigationButton text="Sign In" handler={signIn} />
    <NavigatorItem
      text="Challenges"
      current={current}
      destination={CurrentPage.Challenges}
    />
  </>
);

const LoggedInNavigation = ({ current }: { current: CurrentPage }) => (
  <>
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
    <NavigationButton text="Sign Out" handler={signOut} />
  </>
);

const PageWithNavigator: React.FC<PageWithNavigatorProps> = ({
  children,
  title,
  current,
}) => {
  const [session, loading] = useSession();
  return (
    <Page title={title} grid={true}>
      <nav className="pure-u-1-8">
        {loading && <>Loading...</>}
        {!loading && !session && <LoggedOutNavigation current={current} />}
        {!loading && session && <LoggedInNavigation current={current} />}
      </nav>
      <main className="pure-u-7-8">{children}</main>
    </Page>
  );
};

export default PageWithNavigator;
