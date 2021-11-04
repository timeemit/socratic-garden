// @format
import { EditorState } from 'draft-js';
import React from 'react';
import { ChoiceIndex, ChoiceIndices } from '../types/ChoiceTypes';
import { ChoiceEditor, ChoiceState, ChoiceChange } from './ChoiceEditor';
import EditableText from './EditableText';

export interface QuestionState {
  text: EditorState,
  choices: {[choice in ChoiceIndex]: ChoiceState},
  correct: ChoiceIndex | void,
}

interface Inputs {
  index: number,
  onQuestionChange: (
      questionIndex: number,
      text: EditorState,
      correct: ChoiceIndex | void,
    ) => void,
  onChoiceChange: ChoiceChange,
  onRemove: (number) => void,
}

type Props = QuestionState & Inputs;

export class QuestionEditor extends React.Component<Props> {

  onQuestionChange = (text: EditorState) => {
    this.props.onQuestionChange(this.props.index, text, this.props.correct);
  }

  onChoiceSelect = (correct: ChoiceIndex) => {
    this.props.onQuestionChange(this.props.index, this.props.text, correct);
  }

  onRemove = () => {
    this.props.onRemove(this.props.index);
  }

  render() {
    return (
      <>
        <div className="pure-u-1-8 marginal">
          <div><strong>A Question</strong></div>
        </div>
        <h2 className="pure-u-7-8 header">
          <EditableText editorState={this.props.text} onChange={this.onQuestionChange} />
        </h2>
        <div className="pure-u-1-8 marginal">
          <div><strong>Some Choices</strong></div>
        </div>
        <div className="pure-u-7-8">
          <div className="pure-g">
            <div key={0} className="pure-u-1-8 centered-text"><strong>Correct?</strong></div>
            <div key={1} className="pure-u-1-4"><strong>Choice?</strong></div>
            <div key={2} className="pure-u-5-8"><strong>Response?</strong></div>
            {this.renderChoices()}
          </div>
        </div>
        <div className="pure-u-1">
          <button className="pure-button" onClick={this.onRemove}>
            Remove Question
          </button>
        </div>
        <hr className="pure-u-1" />
      </>
    );
  }

  renderChoices() {
    return Object.entries(this.props.choices).map(([choice_index, choice], i) => {
      const {text, response} = choice;
      return <ChoiceEditor
        key={i}
        text={text}
        response={response}
        chosen={this.props.correct === choice_index}
        questionIndex={this.props.index}
        choiceIndex={choice_index}
        onChange={this.props.onChoiceChange}
        onChoiceSelect={this.onChoiceSelect} />
    });
  }
}
