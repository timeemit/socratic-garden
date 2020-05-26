// @flow
import type { LessonType } from './LessonView';
import type { QuestionType } from './QuestionView';
import type { TopicType } from '../models/Topic';
import Router from 'next/router'
import React from 'react';
import { slug } from '../pages/_app';
import LessonView from './LessonView';
import { NextLesson } from '../models/Lesson';
import { TopicByText } from '../models/Topic';
import { NavigationQuestion } from '../models/Question';
import { ChoiceIndices } from './ChoiceButton';
import QuestionView from './QuestionView';

export type Props = {|
  lesson: LessonType,
  question: QuestionType,
|};

type Finished = "answered" | "skipped";

type State = {
  finished: ?Finished,
};

export default class ChallengeView extends React.Component<Props,State> {
  state: State = {
    finished: null,
  }

  onFinish = () => {
    this.setState({finished: "answered"});
  }

  onSkip = () => {
    this.setState({finished: "skipped"});
  }

  onContinue = () => {
    const lesson = NextLesson(this.props.lesson.id);
    this.setState({finished: null});
    return Router.push("/lessons/[id]/[slug]", `/lessons/${lesson.id}/${slug(lesson.title)}`);
  }

  render() {
    return (
      <>
        <LessonView lesson={this.props.lesson} />
        <QuestionView
          key={this.props.question.lesson_id}
          question={this.props.question}
          onFinish={this.onFinish}
        />
        <div className="centered-text">
          {this.renderNavigation()}
        </div>
      </>
    );
  }

  renderNavigation() {
    if (this.state.finished === null) {
      return <em><a href="#" onClick={this.onSkip}>Skip this question</a></em>
    } else {
      const { finished } = this.state;
      let question = NavigationQuestion(this.props.question.lesson_id);
      const message = (finished === "answered") ? "Great job!" : "No problem!";
      question.text = `${message} ${question.text}`;

      return <QuestionView
        key={-1}
        question={question}
        onFinish={this.onContinue}
      />
    }
  }
}
