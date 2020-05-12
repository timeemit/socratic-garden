// @flow
import type { ChoiceIndex } from './ChoiceButton';
import type { QuestionType } from './QuestionView';
import React from 'react';
import ChosenButton  from './ChosenButton';

export type AnsweredQuestionType = {|
  ...QuestionType,
  chosen_choice: ChoiceIndex,
|};

type Props = {|
  question: AnsweredQuestionType,
|};

export default class AnsweredQuestionView extends React.Component<Props> {
  render() {
    const choices_list = Object.keys(this.props.question.choices).map(choice_index =>
      <ChosenButton
        key={choice_index}
        index={choice_index}
        choice={this.props.question.choices[choice_index]}
        total={Object.values(this.props.question.choices).length}
        chosen={choice_index === this.props.question.chosen_choice}
      />
    );
    return (
      <section>
        <h2>{this.props.question.text}</h2>
        <div className="pure-g">
          {choices_list}
        </div>
      </section>
    );
  }
}
