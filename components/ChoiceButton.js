// @flow
import styles from '../styles/ChoiceButton.module.scss';
import type { ChoiceIndex, Choice } from '../types/ChoiceTypes';
import type { QuestionType } from '../types/QuestionType';
import { slug } from '../pages/_app';
import React from 'react';
import Link from 'next/link';

type Props = {|
  className: string,
  onChoice: (ChoiceIndex) => void,
  question: QuestionType,
  choice: Choice,
  index: ChoiceIndex,
  correct: boolean,
  chosen: boolean,
|};

export default class ChoiceButton extends React.PureComponent<Props> {
  onClick = () => {
    this.props.onChoice(this.props.index);
  }

  render() {
    let choice_classes = [
      styles.button,
      'pure-button',
    ];
    if (this.props.chosen) {
      choice_classes.push('pure-button-disabled');
    }
    return (
      <div className={this.props.className}>
        <button onClick={this.onClick} className={choice_classes.join(' ')}>
          {this.props.choice.text}
        </button>
      </div>
    );
  }
}
