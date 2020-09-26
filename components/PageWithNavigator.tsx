import React, { Node } from 'react';
import Page, { Props } from './Page';
import Navigator from './Navigator'

export default ({
  children,
  title,
  grid
}: Props) =>  (
  <Page title={title} grid={grid}>
    <Navigator />
    {children}
  </Page>
);
