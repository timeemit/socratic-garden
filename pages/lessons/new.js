// @flow
import styles from '../../styles/ChoiceButton.module.scss'
import type { LessonType } from '../../components/LessonView';
import type { QuestionType } from '../../components/QuestionView';
import type { Props as Params } from '../../components/ChallengeView';

import React from 'react';
import Page from '../../components/PageWithNavigator';
import { ChoiceIndices } from '../../components/ChoiceButton';
import { LessonFetch } from '../../models/Lesson';
import { QuestionByLessonID } from '../../models/Question';

type Props = {||}; 

type State = {};

export default class NewLesson extends React.Component<Props,State> {
  state: State = {

  };

  render() {
    return (
      <Page title="Create a lesson">
        <form class="pure-form">
          <h1 className="pure-u-1 header" contenteditable="true">
            Title of a Great Lesson (Edit Me!)
          </h1>
          <div className="pure-u-1" contenteditable="true">
            (Edit Me!) That pushes the envelope of a student's understanding in just a few seconds
          </div>
          <h2 className="pure-u-1 header centered-text" contenteditable="true">
            (Edit Me!) What question will encourage deeper thought?
          </h2>
          <div className="pure-u-1 pure-u-lg-1-3 centered-text">
            <div className={styles.button} contenteditable="true">
              (Edit Me!) Option 1
            </div>
            <label for="choices" class="pure-radio">
              <input type="radio" name="choices" value="1" />
              <div>This is the expected submission </div>
            </label>
          </div>
          <div className="pure-u-1 pure-u-lg-1-3 centered-text">
            <div className={styles.button} contenteditable="true">
              (Edit Me!) Option 2
            </div>
            <label for="choices" class="pure-radio">
              <input type="radio" name="choices" value="2" />
              <div>This is the expected submission </div>
            </label>
          </div>
          <div className="pure-u-1 pure-u-lg-1-3 centered-text">
            <div className={styles.button} contenteditable="true">
              (Edit Me!) Option 3
            </div>
            <label for="choices" class="pure-radio">
              <input type="radio" name="choices" value="3" />
              <div>This is the expected submission </div>
            </label>
          </div>
          <button class="pure-u-1 pure-button pure-button-primary">
            Publish
          </button>
        </form>
      </Page>
    );
  }
}
