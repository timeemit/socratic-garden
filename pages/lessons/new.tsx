// @format
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, ContentState, EditorState, RichUtils, convertFromRaw} from 'draft-js';

const placeholder = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: 'The Greatest Lesson I have learned in life',
      key: 'two',
      type: 'paragraph',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [
        {style: 'ITALIC', offset: 4, length: 16},
      ],
    },{
      text: 'is that I still have a lot to learn',
      key: 'four',
      type: 'paragraph',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [],
    },{
      text: '- Socrates',
      key: 'five',
      type: 'blockquote',
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [],
    }
  ]
})

class MyEditor extends React.Component {
  state = {
    editorState: EditorState.createWithContent(placeholder),
  };


	onChange = (editorState) => {
		return this.setState({editorState});
	}

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }

  render() {
    return (
      <Editor
        editorState={this.state.editorState}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange} />
    );
  }
}

export default MyEditor;
