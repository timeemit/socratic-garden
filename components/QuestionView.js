// @flow
import type { Choice, ChoiceIndex } from '../types/ChoiceTypes';
import type { QuestionType } from '../types/QuestionType';
import type { ConceptType } from '../types/ConceptType';
import React from 'react';
import NewChoiceDepth from '../utils/NewChoiceDepth';
import ChoiceButton  from './ChoiceButton';
import MediaView from './MediaView';

type Props = {|
  question: QuestionType,
  onFinish: () => void,
  disabled: boolean,
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

    let correct_choice_depth = JSON.parse(window.sessionStorage.correct_choice_depth ?? "{}");
    if (correct_choice === null || choice === correct_choice) {
      if (correct_choice !== null) {
        correct_choice_depth = NewChoiceDepth(correct_choice_depth);
        window.sessionStorage.correct_choice_depth = JSON.stringify(correct_choice_depth);
      }
      window.gtag('event', 'correct', {
        'event_category': 'choice',
        'event_label': `/lessons/${this.props.question.lesson_id}`,
        'value': correct_choice_depth.count,
      });
      return this.props.onFinish();
    } else {
      window.gtag('event', 'incorrect', {
        'event_category': 'choice',
        'event_label': `/lessons/${this.props.question.lesson_id}`,
        'value': correct_choice_depth.count,
      });
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
        chosen={
          this.props.disabled
            || this.state.chosen.includes(choice_index)
            || this.state.chosen.includes(this.props.question.correct_choice)
        }
      />;
    });
    return (
      <section className="centered-text">
        <MediaView media={this.props.question.media} />
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
