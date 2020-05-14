// @flow
import type { QuestionType } from './QuestionView';
import styles from '../styles/ChoiceButton.module.scss';
import { slug } from '../pages/_app';
import React from 'react';
import Link from 'next/link';
import GlowBlock from './GlowBlock';

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
  question: QuestionType,
  total: number,
  choice: Choice,
  index: ChoiceIndex,
  correct: boolean,
  chosen: boolean,
  chosen_last: boolean,
|};

export default class ChoiceButton extends React.Component<Props> {
  render() {
    const choice_class = `${styles.button} pure-button pure-u-1 pure-u-md-1-${this.props.total}`;
    const url = `/questions/${this.props.question.id}/${slug(this.props.question.text)}/choices/${this.props.index}/${slug(this.props.choice.text)}`;
    return (
      <GlowBlock>
        <button className={choice_class}>
          {this.props.choice.text}
        </button>
      </GlowBlock>
    );
  }
}
