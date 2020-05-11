// @flow
import type { Choice } from './ChoiceButton';
import React from 'react';
import ChoiceButton from './ChoiceButton';

const ChoiceIndices = {
  "first": "1",
  "second": "2",
  "third": "3",
};

type ChoiceIndex = $Values<typeof ChoiceIndices>;

type Question = {
  text: string,
  choices: {[ChoiceIndex]: Choice},
  correct_choice: ChoiceIndex,
};

type AnsweredQuestion = {
  text: string,
  choices: {[ChoiceIndex]: Choice},
  correct_choice: ChoiceIndex,
  chosen_choice: ChoiceIndex,
};

type State = {
  question: Question,
  answered: Array<AnsweredQuestion>,
}

export default class Guide extends React.Component<{}, State> {
  state: State = {
    question: {
      text: "What is Socratic Combat?",
      choices: {
        [ChoiceIndices.first]: {text: "A pizza delivery company"},
        [ChoiceIndices.second]: {text: "An online consultancy"},
        [ChoiceIndices.third]: {text: "A free learning platform"},
      },
      correct_choice: ChoiceIndices.third,

    },
    answered: [],
  }

  render() {
    const resources = [
      {text: "A useful webpage", url: "#link"},
      {text: "Another cool page", url: "#link"},
    ];
    const resources_list = resources.map(resource =>
      <li key={resource.url}>
        <a href={resource.url}>{resource.text}</a>
      </li>
    );
    const choices_list = Object.keys(this.state.question.choices).map(choice_index =>
      <ChoiceButton
        key={choice_index}
        choice={this.state.question.choices[choice_index]}
        total={Object.values(this.state.question.choices).length}
      />
    );
    return (
      <section>
       <h2>{this.state.question.text}</h2>
        <ul hidden>
          {resources_list}
        </ul>
        <div className="pure-g">
          {choices_list}
        </div>
      </section>
    );
  }
}
