import styles from "../styles/SignWare.module.scss";

import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export enum Direction {
  in = "in",
  up = "up",
}

type Props = {
  direction: Direction;
  csrfToken: string;
};

type State = {
  direction: Direction;
};

export default class SignWhere extends React.Component<Props, State> {
  state: State = {
    direction: Direction.up,
  };

  render() {
    return (
      <div className="centered-text">
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
      </div>
    );
  }

  onChangeToSignUp = () => {
    this.setState({ direction: Direction.in });
  };

  onChangeToSignIn = () => {
    this.setState({ direction: Direction.up });
  };
}
