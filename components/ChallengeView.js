// @flow
import type { LessonType } from './LessonView';
import type { QuestionType } from './QuestionView';
import Router from 'next/router'
import React from 'react';
import { slug } from '../pages/_app';
import LessonView from './LessonView';
import { NextLesson } from '../models/Lesson';
import { NextQuestion } from '../models/Question';
import QuestionView from './QuestionView';

export type Props = {|
  lesson: LessonType,
  question: QuestionType,
|};

export default class ChallengeView extends React.Component<Props> {
  onFinish = () => {
    const lesson = NextLesson(this.props.lesson.id);
    return Router.push("/lessons/[id]/[slug]", `/lessons/${lesson.id}/${slug(lesson.title)}`);
  }

  render() {
    return (
      <>
        <LessonView lesson={this.props.lesson} />
        <QuestionView 
          question={this.props.question}
          onFinish={this.onFinish}
        />
      </>
    );
  }
}
