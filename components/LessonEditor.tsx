// @format
import styles from '../styles/editor.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, ContentState, EditorState, RichUtils, convertFromRaw} from 'draft-js';
import Editable from './Editable';

const placeholder = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: '"The Greatest Lesson..."',
      key: 'one',
      type: 'header-two',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [],
    },{
      text: '"...I have learned in life is that I still have a lot to learn." - Socrates',
      key: 'two',
      type: 'paragraph',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [
        {style: 'BOLD', offset: 19, length: 7},
        {style: 'ITALIC', offset: 65, length: 11},
        {style: 'UNDERLINE', offset: 48, length: 5},
      ],
    }
  ]
})

export default class LessonEditor extends React.Component {
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
        <div className={`pure-button-group ${styles.buttonGroup}`} role="toolbar" aria-label="Block Styles">
          <button
            className={`pure-button ${this.isHeader() ? "pure-button-active" : null}`}
            onClick={this.onHeaderClick}>
          </button>
        </div>
        <div className={`pure-button-group ${styles.buttonGroup}`} role="toolbar" aria-label="Inline Styles">
          <button
            className={`pure-button ${this.isBold() ? "pure-button-active" : null}`}
            onClick={this.onBoldClick}>
          </button>
          <button
            className={`pure-button ${this.isItalic() ? "pure-button-active" : null}`}
            onClick={this.onItalicClick}>
          </button>
          <button
            className={`pure-button ${this.isUnderline() ? "pure-button-active" : null}`}
            onClick={this.onUnderlineClick}>
          </button>
        </div>
        <Editable>
          <Editor
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            blockStyleFn={this.blockStyleFn}
            ref={this.domEditor} />
        </Editable>
      </>
    );
  }
}
