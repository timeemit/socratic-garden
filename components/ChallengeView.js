// @flow
import type { LessonType } from './LessonView';
import type { QuestionType } from './QuestionView';
import React from 'react';
import LessonView from './LessonView';
import { NextQuestion } from '../models/Question';
import QuestionView from './QuestionView';

export type Props = {|
  lesson: LessonType,
  question: QuestionType,
|};

type State = {|
  lesson: LessonType,
  question: QuestionType,
|};

export default class ChallengeView extends React.Component<Props,State> {
  constructor(props: Props) {
    super(props);
    const { lesson, question } = props;
    this.state = { lesson, question };
  }

  onFinish = () => {
    const question = NextQuestion(this.state.question.id);
    return this.setState({ question });
  }

  render() {
    return (
      <section>
        <LessonView lesson={this.props.lesson} />
        <QuestionView 
          question={this.props.question}
          onFinish={this.onFinish}
        />
      </section>
    );
  }
}
