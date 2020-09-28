import styles from '../styles/SignWare.module.scss'

import React from 'react';

const Direction = {
  in: "in",
  up: "up",
};

type Props = {};

type State = {
  direction: typeof Direction[keyof typeof Direction],
  username: string,
  password: string
};

export default class Gateway extends React.Component<Props, State> {
  state: State = {
    direction: Direction.up,
    username: "",
    password: "",
  };

  render() {
    return (
      <div className="centered-text">
        <h1>Thank You For Contributing!</h1>
        <em >But don't you want credit for your hard work?</em>
        {this.state.direction === Direction.in ? this.renderSignin() : this.renderSignup()}
      </div>
    );
  }

  renderSignin() {
    return (
      <form className={`pure-form pure-form-stacked ${styles.signup}`}>
        <input
          className="pure-input-1"
          type="email"
          placeholder="my@email.com"
          required />
        <input
          className="pure-input-1"
          type="password"
          placeholder="password"
          required />
        <a className="pure-u-1-2 centered-text" href="#" onClick={() => this.setState({direction: Direction.up})}>Sign Up</a>
        <div className="pure-u-1-2 centered-text">
          <input className="pure-input-1 pure-button pure-button-primary" type="button" value="Sign In" />
        </div>
      </form>
    );
  }

  renderSignup() {
    return (
      <form className={`pure-form ${styles.signup}`}>
        <input className="pure-input-1" type="text" placeholder="My Name" required />
        <input className="pure-input-1-2" type="email" placeholder="my@email.com" required />
        <input className="pure-input-1-2" type="password" placeholder="password" required />
        <a className="pure-u-1-2 centered-text" href="#" onClick={() => this.setState({direction: Direction.in})}>Sign In</a>
        <div className="pure-u-1-2 centered-text">
          <input className="pure-input-1 centered-text pure-button pure-button-primary" type="button" value="Sign Up" />
        </div>
      </form>
    );
  }
}
