// @flow
import type { Choice, ChoiceIndex } from './ChoiceButton';
import type { TopicType } from '../models/Topic';
import React from 'react';
import ChoiceButton  from './ChoiceButton';

export type QuestionType = {|
  lesson_id: number,
  text: string,
  choices: {[ChoiceIndex]: Choice},
  correct_choice: ?ChoiceIndex,
|};

type Props = {|
  question: QuestionType,
  onFinish: () => void,
|};

type State = {
  chosen: Array<ChoiceIndex>,
  response: ?string,
};

export default class QuestionView extends React.Component<Props,State> {
  state: State = {
    chosen: [],
    response: null,
  }

  onChoice = (choice: ChoiceIndex) => {
    let { chosen } = this.state;
    const { correct_choice } = this.props.question;
    const { response } = this.props.question.choices[choice];
    chosen.unshift(choice);
    this.setState({chosen, response});
    if (correct_choice === null || choice === correct_choice) {
      return this.props.onFinish();
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
        chosen={this.state.chosen.includes(choice_index) || this.state.chosen.includes(this.props.question.correct_choice)}
      />;
    });
    return (
      <section>
        <h2 className="header">{this.props.question.text}</h2>
        <div className="pure-g">
          {choices_list}
        </div>
        {this.renderNotice()}
      </section>
    );
  }

  renderNotice() {
    if (this.state.response == null) {
      return null;
    } else {
      return (<h3 className="header">{this.state.response}</h3>);
    }
  }
}
