// @flow
import React, { type Node } from 'react'
import Head from 'next/head'

type Props = {
  children: Node,
  title?: string,
}

export default ({ children, title = 'This is the default title' }: Props) => (
  <section>
    <Head>
      <title>{title}</title>
    </Head>
    <div className="pure-g">{children}</div>
  </section>
)
