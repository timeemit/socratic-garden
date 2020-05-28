// @flow
import React, { type Node } from 'react'
import Page, { type Props } from './Page'
import Navigator from './Navigator'

export default ({ children, title, grid }: Props) =>  (
  <Page title={title} grid={grid}>
    <Navigator />
    {children}
  </Page>
);
