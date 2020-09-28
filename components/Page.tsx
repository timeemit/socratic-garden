import React from 'react';
import Head from 'next/head'

export type Props = {
  title: string,
  grid?: boolean
};

export default class Page extends React.PureComponent<Props> {
  render() {
    return (
      <section>
        <Head>
          <title>{this.props.title}</title>
        </Head>
        <div className={this.props.grid ? "pure-g" : ""}>{this.props.children}</div>
      </section>
    );
  }
}
