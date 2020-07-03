// @flow
import styles from '../styles/Media.module.scss';
import type { MediaURL } from '../types/Media';

import React, { type Node } from 'react';

type Props = {|
  media: ?MediaURL,
|}

export default class MediaView extends React.PureComponent<Props> {
  render() {
    const { media } = this.props;
    if (media == null) return null;
    return (
      <div className={`pure-u-1`}>
        <img className={`pure-img centered ${styles.image}`} src={media.url} />
        <em className={`centered-text ${styles.caption}`}>{media.caption}</em>
      </div>
    );
  }
}
