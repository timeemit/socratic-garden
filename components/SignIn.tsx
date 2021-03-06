// @format
import React from "react";
import styles from "../styles/SignWare.module.scss";

type Props = {
  onChange: () => void;
  csrfToken: string;
};

export default class SignIn extends React.PureComponent<Props> {
  render() {
    return (
      <form
        className={`pure-form ${styles.signup}`}
        method="post"
        action="/api/auth/signin/email"
      >
        <input
          name="csrfToken"
          type="hidden"
          defaultValue={this.props.csrfToken}
        />

        <h1>Sign In</h1>
        <input
          className={`pure-input-1 ${styles.input}`}
          type="email"
          name="email"
          placeholder="my@email.com"
          required
        />
        <div className="pure-u-1-2 centered-text">
          <input
            className={`pure-input-1 centered-text pure-button ${styles.input}`}
            type="button"
            value="Sign Up"
            onClick={this.props.onChange}
          />
        </div>
        <div className="pure-u-1-2 centered-text">
          <button
            className={`pure-input-1 centered-text pure-button pure-button-primary ${styles.input}`}
            type="submit">
            Sign In
          </button>
        </div>
      </form>
    );
  }
}
