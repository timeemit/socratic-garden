import React, { FunctionComponent } from 'react';
import Page, { Props } from './Page';
import Navigator from './Navigator'

export default ({
  children,
  title,
}) =>  (
  <Page title={title}>
    <Navigator />
    {children}
  </Page>
);
