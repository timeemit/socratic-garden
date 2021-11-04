// @format
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, convertFromRaw} from 'draft-js';
import createEditorStateWithText from '../utils/createEditorStateWithText';
import Editable from './Editable';

interface Props {
  editorState: EditorState,
  onChange: (EditorState) => void,
}

interface State {
  editor: boolean,
}

export default class EditableText extends React.PureComponent<Props, State> {
  domEditor = null;

  state = {
    editor: false,
  };

  constructor(props) {
    super(props);
    this.domEditor = React.createRef();
  }

  componentDidMount() {
    this.setState({editor: true});  // Workaround for Draft JS on SSR
  }

  render() {
    return (
      <Editable>
        <Editor
          editorState={this.props.editorState}
          onChange={this.props.onChange}
          handleReturn={() => {return 'handled';}}
          ref={this.domEditor} />
      </Editable>
    );
  }
}
