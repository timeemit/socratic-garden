// @flow
import styles from '../styles/ChoiceButton.module.scss';
import React from 'react';

export type Choice = {
  text: string,
};

type Props = {
  total: number,
  choice: Choice,
};

export default class ChoiceButton extends React.Component<Props> {
  onClick = () => {
    alert('hello!');
  }

  render() {
    const choice_class = `${styles.button} pure-button pure-u-1 pure-u-md-1-${this.props.total}`;
    return (
      <button className={choice_class} onClick={this.onClick}>
        {this.props.choice.text}
      </button>
    );
  }
}
