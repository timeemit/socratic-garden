// @flow
import type { Context } from '../../types/context';
import type { QuestionType } from '../../types/QuestionType';
import type { LessonType } from '../../types/LessonType';
import type { ConceptType } from '../../types/ConceptType';
import React, {type Node} from 'react';
import Page from '../../components/PageWithNavigator';
import ConceptLink from '../../components/ConceptLink';
import { slug as slugger} from '../../pages/_app';
import { CONCEPTS } from '../../models/Concept';
import { LessonsByConcept } from '../../models/Lesson';
import { QuestionByLessonID } from '../../models/Question';
import Link from 'next/link';
import Page404 from '../404';

type Params = {|
  concepts: Array<ConceptType>,
|};

export async function getServerSideProps(context: Context): Promise<{|props: Params|}> {
  return { props: {concepts: CONCEPTS} };
}

export default class ConceptsPage extends React.Component<Params> {
  render() {
    return (
      <Page title="Concepts">
        <h1 className="pure-u-1 header">Concepts</h1>
        {this.renderConcepts()}
      </Page>
    );
  }

  renderConcepts(): Node {
    return this.props.concepts.map((concept, i) => {
      return (
        <div key={i} className="pure-u-lg-1-3 pure-u-1">
          <ConceptLink concept={concept} />
        </div>
      );
    });
  }
}
