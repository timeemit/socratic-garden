// @flow
import type { Choice, ChoiceIndex } from './ChoiceButton';
import React from 'react';
import ChoiceButton  from './ChoiceButton';
import ChosenButton  from './ChosenButton';

export type QuestionType = {|
  text: string,
  choices: {[ChoiceIndex]: Choice},
  correct_choice: ChoiceIndex,
|};

type Props = {|
  question: QuestionType,
  onChoice: (ChoiceIndex) => void,
|};

type State = {
  chosen: Array<ChoiceIndex>,
};

export default class QuestionView extends React.Component<Props> {
  state: State = {
    chosen: [],
  }

  onChoice = (choice: ChoiceIndex) => {
    let { chosen } = this.state;
    chosen.push(choice);
    this.setState({ chosen });
    if (this.props.correct_choice === choice) {
      this.props.onContinue();
    }
  }

  render() {
    const choices_list = Object.keys(this.props.question.choices).map(choice_index => {
      if (this.state.chosen.includes(choice_index)) {
        return <ChosenButton
          key={choice_index}
          index={choice_index}
          choice={this.props.question.choices[choice_index]}
          total={Object.keys(this.props.question.choices).length}
          correct={choice_index === this.props.question.correct_choice}
        />;
      } else {
        return <ChoiceButton
          key={choice_index}
          index={choice_index}
          choice={this.props.question.choices[choice_index]}
          total={Object.keys(this.props.question.choices).length}
          onClick={this.onChoice}
        />;
      }
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
