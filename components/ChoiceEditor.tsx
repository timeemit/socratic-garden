// @format
import { EditorState } from 'draft-js';
import { ChoiceIndex } from '../types/ChoiceTypes';

import React from 'react';
import Editable from './Editable';

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
    response: EditorState
  ) => void;

interface Inputs {
  questionIndex: number,
  choiceIndex: ChoiceIndex,
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
    this.props.onChoiceSelect(e.target.value);
  }

  render() {
    return (
      <>
        <div key={3} className="pure-u-1-8 centered-text"><input type="radio" name="choice_0" value="first" /></div>
        <div key={4} className="pure-u-1-4">
          <Editable editorState={this.props.text} onChange={this.onTextChange} />
        </div>
        <div key={5} className="pure-u-5-8">
          <Editable editorState={this.props.response} onChange={this.onResponseChange} />
        </div>
      </>
    );
  }
}
