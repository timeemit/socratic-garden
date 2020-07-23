// @flow
import type { Context } from '../../types/context';
import type User from '../../db/User';
import Page404 from '../404';

import React, {type Node} from 'react';
import PageWithNavigator from '../../components/PageWithNavigator';
import Connection from '../../db/Connection';

type Params = {|
  user: User,
|};

export async function getServerSideProps(context: Context): Promise<{|props: Params|}> {
  const { code } = context.params;
  const connection = await Connection;
  const user = await connection.instance.models.User.findOne({ where: { resetCode: code } });
  const props = {user: user == null ? null : JSON.stringify(user.toJSON())};
  return { props: props };
}

export default class ConceptPage extends React.Component<Params> {
  render() {
    const user  = JSON.parse(this.props.user);
    console.log(user);
    if (user == null) {
      return <Page404 />;
    };
    return (
      <PageWithNavigator title={`Welcome, ${user.name}`}>
        <h1 className="pure-u-1 header">Welcome, {user.name}</h1>
      </PageWithNavigator>
    );
  }
}
