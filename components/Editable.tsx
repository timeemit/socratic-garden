// @format
import styles from '../styles/Editable.module.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, convertFromRaw} from 'draft-js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import createEditorStateWithText from '../utils/createEditorStateWithText';

interface Props {
  editorState: EditorState,
  onChange: (EditorState) => void,
}

interface State {
  editor: boolean,
}

export default class Editable extends React.PureComponent<Props, State> {
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
    this.forceFocus();
  }

  forceFocus = () => {
    this.domEditor?.current?.focus();
  };

  render() {
    return (
      <span className={styles.editable}>
        <Editor
          editorState={this.props.editorState}
          onChange={this.props.onChange}
          handleReturn={() => {return 'handled';}}
          ref={this.domEditor} />
        <span className={styles.editable}><FontAwesomeIcon icon="pencil" size="xs" transform="right-5" /></span>
      </span>
    );
  }
}
