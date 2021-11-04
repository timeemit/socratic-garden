// @format
import styles from "../styles/Navigator.module.scss";
import React from "react";
import Link from "next/link";
import Interstitial from "./Interstitial";
import { Direction } from "./SignWhere";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

type Props = {
  csrfToken: string;
};

type State = {
  interstitial: boolean;
  direction: Direction;
};

export default class Navigator extends React.Component<Props, State> {
  state: State = {
    interstitial: false,
    direction: Direction.up,
  };

  render() {
    return (
      <header>
        <Interstitial reveal={this.state.interstitial} onCancel={this.onHide}>
          {this.state.direction === Direction.in ? (
            <SignIn
              onChange={this.onChangeToSignUp}
              csrfToken={this.props.csrfToken}
            />
          ) : (
            <SignUp
              onChange={this.onChangeToSignIn}
              csrfToken={this.props.csrfToken}
            />
          )}
        </Interstitial>
        <nav className={styles.nav}>
          <Link href="/">
            <img className={styles.homeLogo} src="/logo-no-text.png" />
          </Link>
          <Link href="/courses">
            <a href="/courses" className={styles.headerPurple}>
              <span className={styles.span}>Courses</span>
            </a>
          </Link>
          <Link href="/concepts">
            <a href="/concepts" className={styles.headerRed}>
              <span className={styles.span}>Concepts</span>
            </a>
          </Link>
          <span className={styles.headerYellow} onClick={this.onShowSignUp}>
            <span className={styles.span}>Sign Up</span>
          </span>
          <span className={styles.headerBlue} onClick={this.onShowSignIn}>
            <span className={styles.span}>Sign In</span>
          </span>
        </nav>
      </header>
    );
  }

  onShowSignUp = () => {
    this.setState({
      interstitial: true,
      direction: Direction.up,
    });
  };

  onShowSignIn = () => {
    this.setState({
      interstitial: true,
      direction: Direction.in,
    });
  };

  onHide = () => {
    this.setState({ interstitial: false });
  };

  onChangeToSignUp = () => {
    this.setState({ direction: Direction.up });
  };

  onChangeToSignIn = () => {
    this.setState({ direction: Direction.in });
  };
}
