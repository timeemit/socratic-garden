// @flow
import type { Choice, ChoiceIndex } from './ChoiceButton';
import React from 'react';
import ChoiceButton  from './ChoiceButton';

export type QuestionType = {|
  id: number,
  text: string,
  choices: {[ChoiceIndex]: Choice},
  correct_choice: ChoiceIndex,
  chosen: Array<ChoiceIndex>,
|};

type Props = {|
  question: QuestionType,
|};

type State = {};

export default class QuestionView extends React.Component<Props> {
  render() {
    const choices_list = Object.keys(this.props.question.choices).map(choice_index => {
      return <ChoiceButton
        key={choice_index}
        index={choice_index}
        choice={this.props.question.choices[choice_index]}
        total={Object.keys(this.props.question.choices).length}
        correct={choice_index === this.props.question.correct_choice}
        chosen={this.props.question.chosen.includes(choice_index)}
        chosen_last={this.props.question.chosen[0] === choice_index}
      />;
    });
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
