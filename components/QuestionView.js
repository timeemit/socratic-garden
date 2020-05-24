// @flow
import type { Choice, ChoiceIndex } from './ChoiceButton';
import React from 'react';
import ChoiceButton  from './ChoiceButton';

export type QuestionType = {|
  id: number,
  text: string,
  choices: {[ChoiceIndex]: Choice},
  correct_choice: ChoiceIndex,
|};

type Props = {|
  question: QuestionType,
  onFinish: () => void,
|};

type State = {
  chosen: Array<ChoiceIndex>,
};

export default class QuestionView extends React.Component<Props,State> {
  state: State = {
    chosen: [],
  }

  onChoice = (choice: ChoiceIndex) => {
    let { chosen } = this.state;
    if (choice === this.props.question.correct_choice) {
      this.setState({chosen: []});
      return this.props.onFinish();
    } else {
      chosen.unshift(choice);
      this.setState({chosen});
    }
  }

  render() {
    const total = Object.keys(this.props.question.choices).length;
    const choices_list = Object.keys(this.props.question.choices).map(choice_index => {
      return <ChoiceButton
        className={`pure-u-1 pure-u-lg-1-${total}`}
        key={choice_index}
        onChoice={this.onChoice}
        index={choice_index}
        question={this.props.question}
        choice={this.props.question.choices[choice_index]}
        correct={choice_index === this.props.question.correct_choice}
        chosen={this.state.chosen.includes(choice_index)}
        chosen_last={this.state.chosen[0] === choice_index}
      />;
    });
    return (
      <section>
        <h2 className="header">{this.props.question.text}</h2>
        <div className="pure-g">
          {choices_list}
        </div>
      </section>
    );
  }
}
