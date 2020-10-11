// @format

import {genKey, EditorState, ContentState, convertFromRaw} from 'draft-js';

const createEditorStateWithText = (text: string): EditorState => {
  return EditorState.createWithContent(convertFromRaw({
    entityMap: {},
    blocks: [
      {
        text: text,
        key: genKey(),
        type: 'unstyled',
        entityRanges: [],
        depth: 0,
        inlineStyleRanges: [],
      },
    ]
  }))
}

export default createEditorStateWithText;
