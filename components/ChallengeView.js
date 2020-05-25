// @flow
import type { LessonType } from './LessonView';
import type { QuestionType } from './QuestionView';
import Router from 'next/router'
import React from 'react';
import { slug } from '../pages/_app';
import LessonView from './LessonView';
import { NextLesson } from '../models/Lesson';
import { NextQuestion, NavigationQuestion } from '../models/Question';
import { ChoiceIndices } from './ChoiceButton';
import QuestionView from './QuestionView';

type Props = {|
  lesson: LessonType,
  question: QuestionType,
|};

type State = {
  finished: boolean,
};

export default class ChallengeView extends React.Component<Props,State> {
  state: State = {
    finished: false,
  }

  onFinish = () => {
    this.setState({finished: true});
  }

  onContinue = () => {
    const lesson = NextLesson(this.props.lesson.id);
    this.setState({finished: false});
    return Router.push("/lessons/[id]/[slug]", `/lessons/${lesson.id}/${slug(lesson.title)}`);
  }

  render() {
    return (
      <>
        <LessonView lesson={this.props.lesson} />
        <QuestionView
          key={this.props.question.id}
          question={this.props.question}
          onFinish={this.onFinish}
        />
        {this.renderNavigation()}
      </>
    );
  }

  renderNavigation() {
    if (this.state.finished) {
      return <QuestionView
        key={-1}
        question={NavigationQuestion(this.props.question.id)}
        onFinish={this.onContinue}
      />
    } else {
      return <em><a href="#" onClick={this.onFinish}>Skip this question</a></em>
    }
  }
}
