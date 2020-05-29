// @flow
import lesson_styles from '../../styles/NewLesson.module.scss'
import button_styles from '../../styles/ChoiceButton.module.scss'
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
          <h1 className="pure-u-1 header">
            <input className="pure-u-1" type="text" placeholder="Title of a Great Lesson..." spellcheck="true" />
          </h1>
          <div className="pure-u-1"myBrowser>
            <input className={lesson_styles.topicInput} placeholder="...on the topic of...?" />
          </div>
          <div className="pure-u-1">
            <textarea className={`pure-u-1 ${lesson_styles.textArea}`} placeholder="...that pushes a student's understanding forward in just a few seconds"></textarea>
          </div>
          <h2 className="pure-u-1 header centered-text">
            <input className="pure-u-1 centered-text" type="text" placeholder="What question will encourage deeper thought?" spellcheck="true" />
          </h2>
          <div className="pure-u-1 pure-u-lg-1-3 centered-text">
            <textarea className={`centered-text ${button_styles.button} ${lesson_styles.textArea}`} type="text" placeholder="Possible Response A"></textarea>
            <label for="choices" class="pure-radio">
              <input type="radio" name="choices" value="1" />
              <div>This is the expected submission </div>
            </label>
          </div>
          <div className="pure-u-1 pure-u-lg-1-3 centered-text">
            <textarea className={`centered-text ${button_styles.button} ${lesson_styles.textArea}`} type="text" placeholder="Possible Response B"></textarea>
            <label for="choices" class="pure-radio">
              <input type="radio" name="choices" value="2" />
              <div>This is the expected submission </div>
            </label>
          </div>
          <div className="pure-u-1 pure-u-lg-1-3 centered-text">
            <textarea className={`centered-text ${button_styles.button} ${lesson_styles.textArea}`} type="text" placeholder="Possible Response C"></textarea>
            <label for="choices" class="pure-radio">
              <input type="radio" name="choices" value="3" />
              <div>This is the expected submission </div>
            </label>
          </div>
          <button class={`pure-u-1 pure-button pure-button-primary ${lesson_styles.publishButton}`}>
            Publish
          </button>
        </form>
      </Page>
    );
  }
}
