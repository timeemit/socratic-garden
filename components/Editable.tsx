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
  focused: boolean,
}

export default class Editable extends React.PureComponent<Props, State> {
  domEditor = null;

  state = {
    editor: false,
    focused: false,
  };

  constructor(props) {
    super(props);
    this.domEditor = React.createRef();
  }

  componentDidMount() {
    this.setState({editor: true});  // Workaround for Draft JS on SSR
  }

  onFocus = () => {
    this.setState({focused: true});
  }

  onBlur = () => {
    this.setState({focused: false});
  }

  render() {
    const style = [styles.editable];
    if (this.state.focused) {
      style.push(styles.focused);
    }
    return (
      <span className={style.join(' ')}>
        <Editor
          editorState={this.props.editorState}
          onChange={this.props.onChange}
          handleReturn={() => {return 'handled';}}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          ref={this.domEditor} />
        <span className={styles.editable}><FontAwesomeIcon icon="pencil" size="xs" transform="right-5" /></span>
      </span>
    );
  }
}
