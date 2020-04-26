// @flow
import React, { type Node } from 'react';
import Head from 'next/head';

type Props = {
  children: Node,
  title: string,
}

export default ({ children, title }: Props) => (
  <section>
    <Head>
      <title>{title}</title>
    </Head>
    {children}
    <script type="text/javascript" src="//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js" data-dojo-config="usePlainJson: true, isDebug: false"></script><script type="text/javascript" dangerouslySetInnerHTML={{__html: 'window.dojoRequire(["mojo/signup-forms/Loader"], function(L) { L.start({"baseUrl":"mc.us8.list-manage.com","uuid":"01032a27f69729090a9cd31f0","lid":"a5deae97ac","uniqueMethods":true}) })'}} />
  </section>
)
