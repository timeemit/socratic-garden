// @format
import { EditorState } from 'draft-js';
import { ChoiceIndex } from '../types/ChoiceTypes';

import React from 'react';
import EditableText from './EditableText';

export interface ChoiceState {
  text: EditorState,
  response: EditorState,
}

type ChoiceSelect = (
    choiceIndex: ChoiceIndex,
  ) => void;

export type ChoiceChange = (
    questionIndex: number,
    choiceIndex: ChoiceIndex,
    text: EditorState,
    response: EditorState,
  ) => void;

interface Inputs {
  questionIndex: number,
  choiceIndex: ChoiceIndex,
  chosen: boolean,
  onChange: ChoiceChange,
  onChoiceSelect: ChoiceSelect,
}

type Props = Inputs & ChoiceState;

export class ChoiceEditor extends React.Component<Props> {

  onTextChange = (text: EditorState) => {
    const {questionIndex, choiceIndex, response} = this.props;
    this.props.onChange(questionIndex, choiceIndex, text, response);
  }

  onResponseChange = (response: EditorState) => {
    const {questionIndex, choiceIndex, text} = this.props;
    this.props.onChange(questionIndex, choiceIndex, text, response);
  }

  onChoiceSelect = (e) => {
    this.props.onChoiceSelect(e.currentTarget.value);
  }

  render() {
    return (
      <>
        <div key={this.props.questionIndex * 3} className="pure-u-1-8 centered-text">
          <input type="radio" name={`choice-${this.props.questionIndex}-${this.props.choiceIndex}`} value={this.props.choiceIndex} checked={this.props.chosen} onChange={this.onChoiceSelect} />
        </div>
        <div key={this.props.questionIndex * 3 + 1} className="pure-u-1-4">
          <EditableText editorState={this.props.text} onChange={this.onTextChange} />
        </div>
        <div key={this.props.questionIndex * 3 + 2} className="pure-u-5-8">
          <EditableText editorState={this.props.response} onChange={this.onResponseChange} />
        </div>
      </>
    );
  }
}
