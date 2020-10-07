// @format

import styles from '../../styles/editor.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, ContentState, EditorState, RichUtils, convertFromRaw} from 'draft-js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const placeholder = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: 'A Great Person Once Said...',
      key: 'one',
      type: 'header-two',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [],
    },{
      text: '"The greatest lesson I have learned in life...',
      key: 'two',
      type: 'paragraph',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [
        {style: 'BOLD', offset: 5, length: 15},
      ],
    },{
      text: '...is that I still have a lot to learn."',
      key: 'four',
      type: 'paragraph',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [
        {style: 'BOLD', offset: 30, length: 8},
      ],
    },{
      text: '- Socrates',
      key: 'five',
      type: 'blockquote',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [],
    },{
      text: '(you can edit these lines yourself!)',
      key: 'six',
      type: 'paragraph',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [
        {style: 'ITALIC', offset: 0, length: 36},
      ],
    }
  ]
})

class MyEditor extends React.Component {
  domEditor = null;

  state = {
    editorState: EditorState.createWithContent(placeholder),
    editor: false,
  };

  constructor(props) {
    super(props);
    this.domEditor = React.createRef();
  }

  componentDidMount() {
    this.setState({editor: true});  // Workaround for Draft JS on SSR
    this.forceFocus();
  }

  onChange = (editorState) => {
    this.setState((state) => {
      return {...state, editorState}
    });
  }

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  forceFocus = () => {
    this.domEditor?.current?.focus();
  };

  blockStyleFn(contentBlock) {
    return {
      'header-one': 'header',
      'header-two': 'header',
    }[contentBlock.getType()];
  }

  onHeaderClick = () => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, 'header-two'));
  }

  isBold(): boolean {
    return this.state.editorState.getCurrentInlineStyle().has('BOLD');
  }

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  }

  isItalic(): boolean {
    return this.state.editorState.getCurrentInlineStyle().has('ITALIC');
  }

  onItalicClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  }

  isUnderline(): boolean {
    return this.state.editorState.getCurrentInlineStyle().has('UNDERLINE');
  }

  onUnderlineClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'UNDERLINE'));
  }

  render() {
    if (!this.state.editor) {
      return null;
    }
    return (
      <>
        <h1 className="header">The Title of Your Next Lesson (edit this!)</h1>
        <hr />
        <div className={`pure-button-group ${styles.buttonGroup}`} role="toolbar" aria-label="Styles">
          <button className="pure-button"><FontAwesomeIcon icon="heading" onClick={this.onHeaderClick} /></button>
        </div>
        <div className={`pure-button-group ${styles.buttonGroup}`} role="toolbar" aria-label="Styles">
          <button
            className={`pure-button ${this.isBold() ? "pure-button-active" : null}`}
            onClick={this.onBoldClick}>
            <FontAwesomeIcon icon="bold" />
          </button>
          <button
            className={`pure-button ${this.isItalic() ? "pure-button-active" : null}`}
            onClick={this.onItalicClick}>
            <FontAwesomeIcon icon="italic" />
          </button>
          <button
            className={`pure-button ${this.isUnderline() ? "pure-button-active" : null}`}
            onClick={this.onUnderlineClick}>
            <FontAwesomeIcon icon="underline" />
          </button>
        </div>
        <Editor
          editorState={this.state.editorState}
          handleKeyCommand={this.handleKeyCommand}
          onChange={this.onChange}
          blockStyleFn={this.blockStyleFn}
          ref={this.domEditor} />
        <hr />
        <h2 className="header">Whose quote is this? (edit this!)</h2>
          <div key={0}>Heroditus (edit this!)</div>
          <div key={1}>Socrates (edit this!)</div>
          <div key={2}>Plato (edit this!)</div>
        <hr />
        <div className={`pure-button-group ${styles.buttonGroup}`} role="group" aria-label="Styles">
          <button className="pure-button">Discard</button>
          <button className="pure-button pure-button-primary">Preview</button>
        </div>

      </>
    );
  }
}

export default MyEditor;
