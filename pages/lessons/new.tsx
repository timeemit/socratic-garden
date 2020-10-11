// @format
import styles from '../../styles/NewLesson.module.scss';
import React from 'react';
import LessonEditor from '../../components/LessonEditor';
import ConceptLink from '../../components/ConceptLink';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MyEditor extends React.Component {
  render() {
    return (
      <div className="pure-g">
        <div className="pure-u-1-8 marginal">
          <strong>Lesson Title</strong>
        </div>
        <h1 className={`pure-u-7-8 header ${styles.editable}`}>
          <span>Your Next Lesson</span>
          <span className={styles.editable}><FontAwesomeIcon icon="pencil" size="xs" transform="right-5" /></span>
        </h1>
        <hr className="pure-u-1" />
        <div className="pure-u-1-8 marginal"><strong>Lesson Content</strong></div>
        <div className="pure-u-7-8"><LessonEditor /></div>
        <hr className="pure-u-1" />
        <div className="pure-u-1-8 marginal">
          <div><strong>A Question</strong></div>
        </div>
        <h2 className={`pure-u-7-8 header ${styles.editable}`}>
          <span>Whose quote is this?</span>
          <span className={styles.editable}><FontAwesomeIcon icon="pencil" transform="right-5" /></span>
        </h2>
        <div className="pure-u-1-8 marginal">
          <div><strong>Some Choices</strong></div>
        </div>
        <div className="pure-u-7-8 header">
          <div className="pure-g">
            <div key={0} className="pure-u-1-8 centered-text"><strong>Correct?</strong></div>
            <div key={1} className="pure-u-1-4"><strong>Choice?</strong></div>
            <div key={2} className="pure-u-5-8"><strong>Response?</strong></div>
            <div key={3} className="pure-u-1-8 centered-text"><input type="radio" name="choice_0" value="first" /></div>
            <div key={4} className={`pure-u-1-4 ${styles.editable}`}>
              <span>Heroditus</span> 
              <span className={styles.editable}><FontAwesomeIcon icon="pencil" transform="right-5" /></span>
            </div>
            <div key={5} className={`pure-u-5-8 ${styles.editable}`}>
              <span>No, but Heroditus is well-known for his medical oath</span>
              <span className={styles.editable}><FontAwesomeIcon icon="pencil" transform="right-5" /></span>
            </div>
            <div key={6} className="pure-u-1-8 centered-text"><input type="radio" name="choice_0" value="second" /> </div>
            <div key={7} className={`pure-u-1-4 ${styles.editable}`}>
              <span>Socrates</span>
              <span className={styles.editable}><FontAwesomeIcon icon="pencil" transform="right-5" /></span>
            </div>
            <div key={8} className={`pure-u-5-8 ${styles.editable}`}>
              <span>Yes! And Socrates loved learning through inquiry</span>
              <span className={styles.editable}><FontAwesomeIcon icon="pencil" transform="right-5" /></span>
            </div>
            <div key={9} className="pure-u-1-8 centered-text"><input type="radio" name="choice_0" value="third" /></div>
            <div key={10} className={`pure-u-1-4 ${styles.editable}`}>
              <span>Euclid</span>
              <span className={styles.editable}><FontAwesomeIcon icon="pencil" transform="right-5" /></span>
            </div>
            <div key={11} className={`pure-u-5-8 ${styles.editable}`}>
              <span>No, but Euclid wrote the foundational treatise for Geometry</span>
              <span className={styles.editable}><FontAwesomeIcon icon="pencil" transform="right-5" /></span>
            </div>
          </div>
        </div>
        <div className="pure-u-1">
          <a href="#"><em>Remove Question</em></a>
        </div>
        <hr className="pure-u-1" />
        <div className={`pure-u-1 pure-button-group ${styles.buttonGroup}`} role="group" aria-label="Controls">
          <button className="pure-button"><FontAwesomeIcon icon="plus" transform="left-2" /> Add Another Question</button>
          <button className="pure-button pure-button-primary">Preview</button>
        </div>
        <br />
        <div className={`pure-u-1 pure-button-group ${styles.buttonGroup}`} role="group" aria-label="Exit">
          <button className={`pure-button ${styles.cancel}`}>Discard Lesson</button>
          <button className="pure-button">Save For Later</button>
        </div>
      </div>
    );
  }
}

export default MyEditor;
