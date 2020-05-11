// @flow
import type { Choice, ChoiceIndex } from './ChoiceButton';
import React from 'react';
import ChoiceButton  from './ChoiceButton';

export type QuestionType = {|
  text: string,
  choices: {[ChoiceIndex]: Choice},
  correct_choice: ChoiceIndex,
|};

type Props = {|
  question: QuestionType,
  onChoice: (ChoiceIndex) => void,
|};

export default class QuestionView extends React.Component<Props> {
  render() {
    const choices_list = Object.keys(this.props.question.choices).map(choice_index =>
      <ChoiceButton
        key={choice_index}
        index={choice_index}
        choice={this.props.question.choices[choice_index]}
        total={Object.values(this.props.question.choices).length}
        onClick={this.props.onChoice}
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
