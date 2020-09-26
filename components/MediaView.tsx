import styles from '../styles/Media.module.scss';
import { MediaURL } from '../types/Media';

import React, { Node } from 'react';

type Props = {
  className?: string,
  media: MediaURL | null
};

export default class MediaView extends React.PureComponent<Props> {
  render() {
    const { media } = this.props;
    if (media == null) return null;
    return (
      <div className={`pure-u-1 ${// Auto generated from flowToTs. Please clean me!
      this.props.className !== null && this.props.className !== undefined ? this.props.className : ""}`}>
        <img className={`pure-img centered ${styles.image}`} src={media.url} />
        <em className={`centered-text ${styles.caption}`}>{media.caption}</em>
      </div>
    );
  }
}
