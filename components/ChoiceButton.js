// @flow
import React, { type Node } from 'react';

export type Choice = {
  text: string,
};

type Props = {
  total: number,
  choice: Choice,
};

export default class ChoiceButton extends React.Component<Props> {
  render() {
    const choice_class =  `pure-button pure-u-1 pure-u-sm-1-${this.props.total}`;
    return (
      <button className={choice_class}>
        {this.props.choice.text}
      </button>
    );
  }
}
