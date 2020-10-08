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
      text: '"The greatest lesson I have learned in life is that I still have a lot to learn." - Socrates',
      key: 'two',
      type: 'paragraph',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [
        {style: 'BOLD', offset: 5, length: 15},
        {style: 'ITALIC', offset: 65, length: 15},
      ],
    },{
      text: '(You can edit this lesson!)',
      key: 'three',
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

  isHeader(): boolean {
    const selectedKey = this.state.editorState.getSelection().getStartKey();
    return this.state.editorState.getCurrentContent().getBlockForKey(selectedKey).getType() === "header-two";
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
        <h1 className="header">The Title of Your Next Lesson (You can edit this title!)</h1>
        <hr />
        <div className={`pure-button-group ${styles.buttonGroup}`} role="toolbar" aria-label="Styles">
          <button
            className={`pure-button ${this.isHeader() ? "pure-button-active" : null}`}
            onClick={this.onHeaderClick}>
            <FontAwesomeIcon icon="heading" />
          </button>
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
        <h2 className="header">Whose quote is this? (You can edit this question!)</h2>
        <div className="pure-g">
          <div key={0} className="pure-u-1-8"><strong>Correct?</strong></div>
          <div key={1} className="pure-u-1-4"><strong>Choice?</strong></div>
          <div key={2} className="pure-u-5-8"><strong>Response?</strong></div>
          <div key={3} className="pure-u-1-8"><input type="radio" name="choice-0" value="first" /></div>
          <div key={4} className="pure-u-1-4">Heroditus (You can edit this choice!)</div>
          <div key={5} className="pure-u-5-8">No, but Heroditus is well-known for his medical oath (You can edit this response!)</div>
          <div key={6} className="pure-u-1-8"><input type="radio" name="choice-0" value="second" checked={true} /> </div>
          <div key={7} className="pure-u-1-4">Socrates (You can edit this choice!)</div>
          <div key={8} className="pure-u-5-8">Yes! And Socrates loved learning through inquiry (You can edit this response!)</div>
          <div key={9} className="pure-u-1-8"><input type="radio" name="choice-0" value="third" /></div>
          <div key={9} className="pure-u-1-4">Euclid (You can edit this choice!)</div>
          <div key={9} className="pure-u-5-8">No, but Euclid wrote the foundational treatise for Geometry (You can edit this response!)</div>
        </div>
        <button className="pure-button"><FontAwesomeIcon icon="minus" transform="left-4 down-1" /> Remove Question</button>
        <hr />
        <button className="pure-button"><FontAwesomeIcon icon="plus" transform="left-2" /> Add Another Question</button>
        <hr />
        <div className={`pure-button-group ${styles.buttonGroup}`} role="group" aria-label="Styles">
          <button className="pure-button">Discard Lesson</button>
          <button className="pure-button">Save For Later</button>
          <button className="pure-button pure-button-primary">Preview</button>
        </div>

      </>
    );
  }
}

export default MyEditor;
