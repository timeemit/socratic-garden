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

type NavigatorProps = {
  current: CurrentPage;
}

interface NavigationLinkProps extends NavigatorProps {
  text: string;
  destination: CurrentPage;
};

const NavigationLink = ({ text, current, destination }: NavigationLinkProps) => (
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
  <div className={classnames("pure-u-1", styles.navButton)}>
    <button onClick={handler}>{text}</button>
  </div>
);

interface PageWithNavigatorProps extends NavigatorProps {
  title: string;
};

const LoggedOutNavigation = ({ current }: NavigatorProps) => (
  <>
    <NavigationButton text="Sign Up" handler={signIn} />
    <NavigationButton text="Sign In" handler={signIn} />
    <NavigationLink
      text="Challenges"
      current={current}
      destination={CurrentPage.Challenges}
    />
  </>
);

const LoggedInNavigation = ({ current }: NavigatorProps) => (
  <>
    <NavigationLink
      text="My Balance: 12.543 Coins"
      current={current}
      destination={CurrentPage.Balance}
    />
    <NavigationLink
      text="Deadlines"
      current={current}
      destination={CurrentPage.Deadlines}
    />
    <NavigationLink
      text="Challenges"
      current={current}
      destination={CurrentPage.Challenges}
    />
    <NavigationLink
      text="My Responses"
      current={current}
      destination={CurrentPage.MyResponses}
    />
    <NavigationLink
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
