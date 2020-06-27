// @flow
import styles from '../styles/ChallengeView.module.scss';
import type { LessonType } from '../types/LessonType';
import type { QuestionType } from '../types/QuestionType';
import type { ConceptType } from '../types/ConceptType';
import Router from 'next/router'
import React from 'react';
import { slug } from '../pages/_app';
import LessonView from './LessonView';
import { NextLesson } from '../models/Lesson';
import { ConceptByText } from '../models/Concept';
import { QuestionByLessonID } from '../models/Question';
import { ChoiceIndices } from '../types/ChoiceTypes';
import QuestionView from './QuestionView';

export type Props = {|
  lesson: LessonType,
|};

type Finished = {
  answered: Array<number>,
  skipped: Array<number>,
}

type State = {
  finished: Finished,
  question: ?QuestionType,
};

export default class ChallengeView extends React.Component<Props,State> {
  finishedInitialization(): Finished {
    return {answered: [], skipped: []};
  }

  nextQuestion() {
    return QuestionByLessonID(this.props.lesson.id, this.state.finished.answered.concat(this.state.finished.skipped));
  }
  
  constructor(props: Props) {
    super(props);
    const question = QuestionByLessonID(props.lesson.id);
    this.state = {
      finished: this.finishedInitialization(),
      question,
    }
  }

  onAnswer = () => {
    let { question, finished } = this.state;
    if (question == null) return;
    finished.answered.push(question.id);
    this.setState({ finished });
  }

  onSkip = () => {
    let { question, finished } = this.state;
    if (question == null) return;
    finished.skipped.push(question.id);
    this.setState({ finished });
  }

  onNextQuestion = () => {
    const question = this.nextQuestion();
    this.setState({question});
  }

  onContinue = () => {
    const lesson = NextLesson(this.props.lesson.id);
    const question = QuestionByLessonID(lesson.id);
    this.setState({question, finished: this.finishedInitialization()});
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    return Router.push("/lessons/[id]/[slug]", `/lessons/${lesson.id}/${slug(lesson.title)}`);
  }

  render() {
    return (
      <>
        <LessonView lesson={this.props.lesson} />
        {this.renderQuestion()}
        <div className="centered-text">
          {this.renderNavigation()}
        </div>
      </>
    );
  }

  renderQuestion() {
    const { question } = this.state;
    if (question == null) {
      return <strong>No one has created a question for this lesson yet.</strong>
    }
    return (
      <QuestionView
        key={question.id}
        question={question}
        disabled={this.state.finished.skipped.includes(question.id)}
        onFinish={this.onAnswer}
      />
    );
  }

  renderNavigation() {
    const { question, finished } = this.state;
    let message = "Ready for the next question?";
    const next_question = this.nextQuestion();
    let navigation_question = {
      id: -1,
      lesson_id: -1,
      text: message,
      media: null,
      choices: {
        [ChoiceIndices.first]: {
          text: "",
          response: null,
        },
      },
      correct_choice: null,
    };

    if (question == null || next_question == null) {
      navigation_question.text = `You finished the lesson! Ready for the next one?`;
      if (question != null && finished.skipped.includes(question.id)) {
        navigation_question.text = `No problem. ${navigation_question.text}`;
      }
      navigation_question.choices[ChoiceIndices.first].text = NextLesson(this.props.lesson.id).title;
      return <QuestionView
        key={-1}
        question={navigation_question}
        disabled={false}
        onFinish={this.onContinue}
      />;
    }
    if (finished.answered.includes(question.id)) {
      navigation_question.text = `Great job! ${message}`;
      navigation_question.choices[ChoiceIndices.first].text = next_question.text;
      return <QuestionView
        key={-2}
        question={navigation_question}
        disabled={false}
        onFinish={this.onNextQuestion}
      />;
    }
    if (finished.skipped.includes(question.id)) {
      navigation_question.text = `No problem! ${message}`;
      navigation_question.choices[ChoiceIndices.first].text = next_question.text;
      return <QuestionView
        key={-3}
        question={navigation_question}
        disabled={false}
        onFinish={this.onNextQuestion}
      />;
    }
    return <em><button className={styles.buttonLink} onClick={this.onSkip}>Skip this question</button></em>
  }
}
