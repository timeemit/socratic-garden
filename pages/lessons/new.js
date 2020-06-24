// @flow
import styles from '../../styles/NewLesson.module.scss'
import button_styles from '../../styles/ChoiceButton.module.scss'
import type { LessonType } from '../../types/LessonType';
import type { QuestionType } from '../../types/QuestionType';
import type { Props as Params } from '../../components/ChallengeView';
import type { NewProps, OptionProps, ChosenProps } from '../../components/Autocomplete';
import type { ConceptType } from '../../types/ConceptType';
import type { Choice, ChoiceIndex } from '../../types/ChoiceTypes';

import React, { type Node } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Page from '../../components/PageWithNavigator';
import { ChoiceIndices } from '../../types/ChoiceTypes';
import { LessonFetch } from '../../models/Lesson';
import { QuestionByLessonID } from '../../models/Question';
import Autocomplete from '../../components/Autocomplete';
import ConceptLink from '../../components/ConceptLink';
import Interstitial from '../../components/Interstitial';
import SignWhere from '../../components/SignWhere';
import { ConceptsByText, CreateConceptByText } from '../../models/Concept';

type Props = {||};

type State = {
  lesson_title: string,
  lesson_text: string,
  concepts: Array<ConceptType>,
  question_text: string,
  choices: {[ChoiceIndex]: Choice},
  correct_choice: ?ChoiceIndex,
  reveal_interstitial: boolean,
};

export default class NewLesson extends React.Component<Props,State> {
  state: State = {
    lesson_title: "",
    lesson_text: "",
    concepts: [],
    question_text: "",
    choices: {
      [ChoiceIndices.first]: {text: "", response: ""},
      [ChoiceIndices.second]: {text: "", response: ""},
      [ChoiceIndices.third]: {text: "", response: ""},
    },
    correct_choice: null,
    reveal_interstitial: false,
  };

  textChanger = (field: ("lesson_title" | "lesson_text" | "question_text" | "correct_choice")): (SyntheticEvent<HTMLInputElement> => void) => {
    return (e: SyntheticEvent<HTMLInputElement>) => {
      return this.setState({[field]: e.currentTarget.value});
    }
  }

  choiceChanger = (index: ChoiceIndex, field: $Keys<Choice> ): (SyntheticEvent<HTMLInputElement> => void) => {
    return (e: SyntheticEvent<HTMLInputElement>) => {
      let { choices } = this.state;
      choices[index][field] = e.currentTarget.value;
      return this.setState({ choices });
    }
  }

  isValid() {
    return true; // For Debugging
    // return this.state.concepts.length > 0 &&
    //   this.state.correct_choice !== null &&
    //   ![this.state.lesson_title, this.state.lesson_text, this.state.question_text, this.state.correct_choice].includes("") &&
    //   Object.values(this.state.choices).every(choice => !Object.values(choice).includes(""))
  }

  onConceptChoice = (chosen_concept: ?ConceptType) => {
    let { concepts } = this.state;
    if (chosen_concept != null) {
      concepts.push(chosen_concept);
    }
    this.setState({concepts});
  }

  onConceptRemoval = (chosen_concept: ConceptType) => {
    const concepts = this.state.concepts.filter((concept) => {
      return concept.text !== chosen_concept.text;
    });
    this.setState({concepts});
  }

  onSubmit = (e: SyntheticEvent<>) => {
    e.stopPropagation;
    this.setState({reveal_interstitial: true});
  }

  render() {
    const enabled = this.isValid() ? "" : "pure-button-disabled";
    return (
      <Page title="Create a lesson">
        <form className="pure-form">
          <h1 className="pure-u-1 header">
            <input
              className={`pure-u-1 ${styles.isValid}`}
              type="text"
              placeholder="Title for your Great Lesson..."
              required
              spellCheck
              onChange={this.textChanger("lesson_title")}
            />
          </h1>
          <div className="pure-u-1">
            <Autocomplete
              values={this.state.concepts}
              onChoice={this.onConceptChoice}
              onRemoval={this.onConceptRemoval}
              retrieve={ConceptsByText}
              create={CreateConceptByText}
              display={(concept) => concept.text}
              width="200px"
              placeholder="...on the concept of...?"
              option={({value, display}: OptionProps<ConceptType>) => {
                return (
                  <div className={styles.option}>
                    {display}
                  </div>
                );
              }}
              new={({display}: NewProps) => {
                return (
                  <div className={styles.option}>
                    <FontAwesomeIcon icon="plus" /> Add "{display}"
                  </div>
                );
              }}
              chosen={({value}: ChosenProps<ConceptType>) => {
                return (
                  <div className={styles.conceptLink}>
                    <ConceptLink concept={value} disabled={true} />
                  </div>
                )
              }}
            />
          </div>
          <div className="pure-u-1">
            <textarea
              className={`pure-u-1 ${styles.textArea} ${styles.isValid}`}
              placeholder="...that pushes a student's understanding forward in just a few seconds"
              minLength="2"
              required
              spellCheck
              onChange={this.textChanger("lesson_text")}>
            </textarea>
          </div>
          <h2 className="pure-u-1 header centered-text">
            <input
              className={`pure-u-1 centered-text ${styles.isValid}`}
              type="text"
              placeholder="What question will encourage deeper thought?"
              required
              spellCheck
              onChange={this.textChanger("question_text")}
            />
          </h2>
          {this.renderChoices()}
          <button
            className={`pure-u-1 pure-button pure-button-primary ${styles.publishButton} ${enabled}`}
            onClick={this.onSubmit}>
            Publish
          </button>
        </form>
        <Interstitial
          content={
            <SignWhere />
          }
          reveal={this.state.reveal_interstitial}
          onCancel={() => this.setState({reveal_interstitial: false})}
        />
      </Page>
    );
  }

  renderChoices() {
    const choice_labels = ["A", "B", "C"];
    const choice_indices = [ChoiceIndices.first, ChoiceIndices.second, ChoiceIndices.third];
    return choice_indices.map<Node>((index, i) => {
      let is_correct = "Expected?";
      if (this.state.correct_choice == index) {
        is_correct = "Expected!";
      } else if (this.state.correct_choice != null) {
        is_correct = "Not expected.";
      }
      return (
        <div className="pure-u-1 pure-u-lg-1-3 centered-text" key={index}>
          <textarea
            className={`centered-text ${button_styles.button} ${styles.choiceTextArea} ${styles.isValid}`}
            type="text"
            placeholder={`Possible Answer ${choice_labels[i]}`}
            required
            spellCheck
            onChange={this.choiceChanger(index, "text")}>
          </textarea>
          <label htmlFor={index} className="pure-radio">
            <div className={`pure-button ${styles.correctChoiceSelector}`}>
            <input
              type="radio"
              name="choices"
              id={index}
              value={index}
              onChange={this.textChanger("correct_choice")}
            />
            <div><span>{is_correct}</span></div>
            </div>
          </label>
          <textarea
            className={`centered-text ${button_styles.button} ${styles.choiceTextArea} ${styles.isValid}`}
            type="text"
            placeholder={`Response to Answer ${choice_labels[i]}`}
            required
            spellCheck
            onChange={this.choiceChanger(index, "response")}>
          </textarea>
        </div>
      );
    });
  }
}
