// @flow
import lesson_styles from '../../styles/NewLesson.module.scss'
import button_styles from '../../styles/ChoiceButton.module.scss'
import type { LessonType } from '../../components/LessonView';
import type { QuestionType } from '../../components/QuestionView';
import type { Props as Params } from '../../components/ChallengeView';
import type { NewProps, OptionProps, ChosenProps } from '../../components/Autocomplete';
import type { TopicType } from '../../models/Topic';

import React, { type Node } from 'react';
import Page from '../../components/PageWithNavigator';
import { ChoiceIndices } from '../../components/ChoiceButton';
import { LessonFetch } from '../../models/Lesson';
import { QuestionByLessonID } from '../../models/Question';
import Autocomplete from '../../components/Autocomplete';
import TopicLink from '../../components/TopicLink';
import { TopicsByText, CreateTopicByText } from '../../models/Topic';

type Props = {||};

type State = {
  topics: Array<TopicType>,
};

export default class NewLesson extends React.Component<Props,State> {
  state: State = {
    topics: [],
  };

  onTopicChoice = (chosen_topic: ?TopicType) => {
    let { topics } = this.state;
    if (chosen_topic != null) {
      topics.push(chosen_topic);
    }
    this.setState({topics});
  }

  onTopicRemoval = (chosen_topic: TopicType) => {
    const topics = this.state.topics.filter((topic) => {
      return topic.text !== chosen_topic.text;
    });
    this.setState({topics});
  }

  render() {
    return (
      <Page title="Create a lesson">
        <form className="pure-form">
          <h1 className="pure-u-1 header">
            <input className="pure-u-1" type="text" placeholder="Title of a Great Lesson..." spellCheck="true" />
          </h1>
          <div className="pure-u-1">
            <Autocomplete
              values={this.state.topics}
              onChoice={this.onTopicChoice}
              onRemoval={this.onTopicRemoval}
              retrieve={TopicsByText}
              create={CreateTopicByText}
              display={(topic) => topic.text}
              width="200px"
              placeholder="...on the topic of...?"
              option={({value, display}: OptionProps<TopicType>) => {
                return (
                  <div className={lesson_styles.option}>
                    {display}
                  </div>
                );
              }}
              new={({display}: NewProps) => {
                return (
                  <div className={lesson_styles.option}>
                    + Add "{display}"
                  </div>
                );
              }}
              chosen={({value}: ChosenProps<TopicType>) => {
                return (
                  <div className={lesson_styles.topicLink}>
                    <TopicLink topic={value} disabled={true} />
                  </div>
                )
              }}
            />
          </div>
          <div className="pure-u-1">
            <textarea className={`pure-u-1 ${lesson_styles.textArea}`} placeholder="...that pushes a student's understanding forward in just a few seconds"></textarea>
          </div>
          <h2 className="pure-u-1 header centered-text">
            <input className="pure-u-1 centered-text" type="text" placeholder="What question will encourage deeper thought?" spellCheck="true" />
          </h2>
          <div className="pure-u-1 pure-u-lg-1-3 centered-text">
            <textarea className={`centered-text ${button_styles.button} ${lesson_styles.textArea}`} type="text" placeholder="Possible Response A"></textarea>
            <label htmlFor="choices" className="pure-radio">
              <input type="radio" name="choices" value="1" />
              <div>This is the expected submission </div>
            </label>
          </div>
          <div className="pure-u-1 pure-u-lg-1-3 centered-text">
            <textarea className={`centered-text ${button_styles.button} ${lesson_styles.textArea}`} type="text" placeholder="Possible Response B"></textarea>
            <label htmlFor="choices" className="pure-radio">
              <input type="radio" name="choices" value="2" />
              <div>This is the expected submission </div>
            </label>
          </div>
          <div className="pure-u-1 pure-u-lg-1-3 centered-text">
            <textarea className={`centered-text ${button_styles.button} ${lesson_styles.textArea}`} type="text" placeholder="Possible Response C"></textarea>
            <label htmlFor="choices" className="pure-radio">
              <input type="radio" name="choices" value="3" />
              <div>This is the expected submission </div>
            </label>
          </div>
          <button className={`pure-u-1 pure-button pure-button-primary ${lesson_styles.publishButton}`}>
            Publish
          </button>
        </form>
      </Page>
    );
  }
}
