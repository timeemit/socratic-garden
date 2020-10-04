import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, ContentState, EditorState, RichUtils, convertFromHTML} from 'draft-js';

const placeholder = `
  <div>
    <h1>The Greatest Lesson</h1>
    <div>I have learned</div>
    <div><em>in life</em></div>
    <div>is that I still have</div>
    <div><strong>a lot to learn.</strong></div>
  </div>
`;

class MyEditor extends React.Component {
  state = { editorState: EditorState.createEmpty() };

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
