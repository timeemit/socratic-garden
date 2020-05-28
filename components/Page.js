// @flow
import React, { type Node } from 'react'
import Head from 'next/head'

export type Props = {
  children: Node,
  title: string,
  grid?: boolean
}

export default ({ children, title, grid=false }: Props) => (
  <section>
    <Head>
      <title>{title}</title>
    </Head>
    <div className={grid ? "pure-g" : ""}>{children}</div>
  </section>
)
