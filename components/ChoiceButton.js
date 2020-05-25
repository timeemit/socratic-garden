// @flow
import type { QuestionType } from './QuestionView';
import styles from '../styles/ChoiceButton.module.scss';
import { slug } from '../pages/_app';
import React from 'react';
import Link from 'next/link';

export const ChoiceIndices = {
  first: "1",
  second: "2",
  third: "3",
};

export type Choice = {|
  text: string,
  response: ?string,
|};

export type ChoiceIndex = $Values<typeof ChoiceIndices>;

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
    const url = `/questions/${this.props.question.id}/${slug(this.props.question.text)}/choices/${this.props.index}/${slug(this.props.choice.text)}`;
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
