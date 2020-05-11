// @flow
import styles from '../styles/ChoiceButton.module.scss';
import React from 'react';

export const ChoiceIndices = {
  "first": "1",
  "second": "2",
  "third": "3",
};

export type Choice = {|
  text: string,
|};

export type ChoiceIndex = $Values<typeof ChoiceIndices>;

type Props = {|
  total: number,
  choice: Choice,
  index: ChoiceIndex,
  onClick: (ChoiceIndex) => void,
|};

export default class ChoiceButton extends React.Component<Props> {
  onClick = () => {
    this.props.onClick(this.props.index);
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
